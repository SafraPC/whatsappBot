require("dotenv/config");
const express = require("express");
const cors = require("cors");
const app = express();
const api = require("./app");
const { connect } = require("./src/database/index");
(async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  await connect();

  app.listen(4000, () => {
    console.log(`Web client runing on port: ${4000}`);
  });

  app.use((_, res, next) => {
    var err = new Error("Not Found");
    res.status(404).send({ message: "Rota não Encontrada!" });
    next(err);
  });

  await api();
})();
