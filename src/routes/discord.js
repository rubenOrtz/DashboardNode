const router = require("express").Router();
const { getBotGuilds, getUserGuilds, getChannels } = require("../utils/api");
const User = require("../database/schemas/user");
const { getMutualsGuilds } = require("../utils/utils");
const Guild = require("../database/schemas/guild");

router.get("/guilds", async (req, res) => {
  const guilds = await getBotGuilds();
  // const user = await User.findOne({ discordId: req.user.discordId })
  if (req.user) {
    const userGuilds = await getUserGuilds(req.user.discordId);
    const mutualGuilds = getMutualsGuilds(guilds, userGuilds);
    res.send(mutualGuilds);
    JSON.parse(JSON.stringify(mutualGuilds));
  } else {
    return res.status(401).send({ msg: "Unauthorized" });
  }
});

router.put("/guilds/:guildId/prefix", async (req, res) => {
  const { prefix } = req.body.prefix;
  const { guildId } = req.params;
  console.log(req.body);
  if (!prefix) return res.status(400).send({ msg: "Prefix Required" });
  const update = await Guild.findOneAndUpdate(
    { guildId },
    { prefix },
    { new: false }
  );
  if (update) {
    return res.send(update);
  } else return res.status(400).send({ msg: "Could not find that Guild" });
});

router.get("/guilds/:guildId/config", async (req, res) => {
  const { guildId } = req.params;
  const config = await Guild.findOne({ id: guildId });
  return config ? res.send(config) : res.status(400).send({ msg: "Not Found" });
});
router.get("/guilds/:guildId/config/welcome/channels", async (req, res) => {
  const { guildId } = req.params;
  const channels = await getChannels(guildId);
  console.log(channels);
  return channels
    ? res.send(channels)
    : res.status(400).send({ msg: "Not Found" });
});

module.exports = router;
