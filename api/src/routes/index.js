const { Router } = require('express');

const routRecipes = require("./routRecipes");
const routDiets = require("./routDiets");

const router = Router();

router.use("/recipes", routRecipes);
router.use("/diets", routDiets);

module.exports = router;
