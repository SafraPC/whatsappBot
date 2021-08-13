const express = require("express");
const cors = require("cors");
const app = express();
const api = require("./app");
(async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());
  app.listen(4000, () => {
    console.log(`Web client runing on port: ${4000}`);
  });
  await api();
})();
