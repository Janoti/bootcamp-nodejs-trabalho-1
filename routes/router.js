const express = require("express");
const { lessmodels, moremodels, bybrand } = require("../controller/controller");

const router = express.Router();

router.get("/maisModelos", moremodels);
router.get("/menosModelos", lessmodels);
router.get("/listaMaisModelos/:amount", moremodels);
router.get("/listaMenosModelos/:amount", lessmodels);
router.post("/listaModelos", bybrand);

module.exports = router;
