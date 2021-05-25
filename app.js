const express = require("express");
const router = require("./routes/router");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "TRABALHO 1 NODEJS " });
});

app.use("/marcas", router);

app.listen(3001, () => {
  console.log("Server is running on port 3001.");
});
