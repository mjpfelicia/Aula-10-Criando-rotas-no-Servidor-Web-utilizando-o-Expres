const express = require("express");
const rotas = require("./rotas");
const port = 443;

const app = express();

app.use("/", rotas);

app.listen(port, () => {
  console.log("Servidor rodando");
});
