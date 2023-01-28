const { Router } = require("express");
const { getAllRecipesHandler, getRecipesByIdHandler, createRecipesHandler } = require("../handlers/recipesHandlers");


const routRecipes = Router();


routRecipes.get("/", getAllRecipesHandler);
routRecipes.get("/:id",getRecipesByIdHandler);
routRecipes.post("/",createRecipesHandler);



module.exports = routRecipes;