const passport = require("passport");
const DiscordStrategies = require("passport-discord");
const user = require("../database/schemas/user");
const OAuth2Credentials = require("../database/schemas/Oauth2Credentials");
const { encrypt } = require("../utils/utils");

passport.serializeUser((user, done) => {
    done(null, user.discordId);
});
passport.deserializeUser(async(discordId, done) => {
    try {
        const User = await user.findOne({
            discordId,
        });
        return User ? done(null, User) : done(null, null);
    } catch (err) {
        done(err, null);
        console.log(err);
    }
});
passport.use(
    new DiscordStrategies({
            clientID: process.env.DASHBOARD_CLIENT_ID,
            clientSecret: process.env.DASHBOARD_SECRET_ID,
            callbackURL: process.env.DASHBOARD_CALLBACK_URL,
            scope: ["guilds", "identify"],
        },
        async(accessToken, refreshToken, profile, done) => {
            const encryptedToken = encrypt(accessToken).toString();
            const encryptedRefreshToken = encrypt(refreshToken).toString();
            try {
                const { id, username, discriminator, avatar, guilds } = profile;
                const findUser = await user.findOneAndUpdate({ discordId: id }, {
                    discordTag: `${username}#${discriminator}`,
                    avatar,
                }, { new: true });
                const findCredentials = await OAuth2Credentials.findOneAndUpdate({ discordId: id }, {
                    accessToken: encryptedToken,
                    refreshToken: encryptedRefreshToken,
                });

                if (findUser) {
                    if (!findCredentials) {
                        const newCredentials = await OAuth2Credentials.create({
                            accessToken: encryptedToken,
                            refreshToken: encryptedRefreshToken,
                            discordId: id,
                        });
                    }
                    return done(null, findUser);
                } else {
                    const newUser = await user.create({
                        discordId: id,
                        discordTag: `${username}#${discriminator}`,
                        avatar,
                    });
                    const newCredentials = await OAuth2Credentials.create({
                        accessToken: encryptedToken,
                        refreshToken: encryptedRefreshToken,
                        discordId: id,
                    });
                    return done(null, newUser);
                }
            } catch (err) {
                console.log(err);
                return done(err, null);
            }
        }
    )
);