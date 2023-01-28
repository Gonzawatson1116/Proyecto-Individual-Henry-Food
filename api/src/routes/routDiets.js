const { Router } = require("express");
const getDietsHandler = require("../handlers/DietHandlers")
const routDiets = Router();

routDiets.get("/", getDietsHandler);




module.exports = routDiets;