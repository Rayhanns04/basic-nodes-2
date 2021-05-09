const express = require("express");
const app = express();
const { PORT = 4000 } = process.env;

const bodyParser = require("body-parser");
const db = require("./models");
const cors = require("cors");

app.use(express.json());
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

console.log("PORT" + PORT);

app.get("/", (req, res) => res.send("Hellow this is Node! Update-4"));

app.use("/posts", require("./routes/Posts"));
app.use("/auth", require("./routes/Users"));
app.use("/members", require("./routes/Members"));

app.listen(PORT, () =>
  console.log(
    `Really basic nodes with app listening at http://locahost:${PORT}`
  )
);
