const express = require("express");
const app = express();
const { PORT = 3001 } = process.env;

console.log("PORT" + PORT);

app.get("/", (req, res) => res.send("Hellow this is Node! Update-1"));

app.listen(PORT, () =>
  console.log(
    `Really basic nodes with app listening at http://locahost:${PORT}`
  )
);
