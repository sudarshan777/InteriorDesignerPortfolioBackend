const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema.js");
const mongoose = require("mongoose");
const cors = require("cors");
const sendMailRouter = require("./routes/sendMail");
const path = require("path");

const app = express();

// allow cross origin request

let options = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["htm", "html"],
  index: false,
  maxAge: "1d",
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set("x-timestamp", Date.now());
  },
};

app.use(cors());
app.use(express.json());
app.use("/images", express.static("images", options));

mongoose.connect(
  "mongodb+srv://dbUser:dbUser@cluster0.ejpay.mongodb.net/dbUser?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("DB connected!")
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

// app.use("/send", sendMailRouter);
app.use("/send", sendMailRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Now listening for requests on port ${PORT}`);
});
