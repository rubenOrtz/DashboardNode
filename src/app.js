require("dotenv").config();
require("./strategies/discord");

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const passport = require("passport");
const PORT = process.env.port || 3092;
const routes = require("./routes");
const session = require("express-session");
const Store = require("connect-mongo")(session);
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const RootSchema = require("./graphql/index");

mongoose.connect(" mongodb+srv://dbUser:bK0W7jepeeUl7fch@cluster0.yzv4p.mongodb.net/test?authSource=admin&replicaSet=atlas-jwxuxo-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.static(__dirname + "/public"));
app.use(
    cors({
        origin: ["http://localhost:3000", "http://localhost:5000", "http://176.9.111.217:3000", "https://176.9.111.217:3000"],
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
    session({
        secret: "secret",
        cookie: {
            maxAge: 60000 * 60 * 24,
        },
        resave: false,
        saveUninitialized: false,
        store: new Store({ mongooseConnection: mongoose.connection }),
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", routes);
app.get("/dashboard", function(req, res) {
    res.redirect(`${process.env.URL}:3000/`);
});

app.listen(PORT, () => console.log(`
            running on $ { PORT }
            `));