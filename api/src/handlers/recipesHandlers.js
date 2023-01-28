const { getAllRecipes, getRecipeById, createRecipe, searchRecipeByName} = require("../Controlers/recipesControlers");


 const getAllRecipesHandler= async(req,res)=>{

    const { name } = req.query;
    const result = name? await searchRecipeByName(name) : await getAllRecipes();
    res.status(200).json(result);
  };

 const getRecipesByIdHandler =async(req,res)=>{
  try{
    const { id } = req.params;
    const recipe = await getRecipeById(id)
    res.status(200).json(recipe)
  }catch(error){
    res.status(400).json({error: error.message})
  };
 };
 


 const createRecipesHandler = async (req, res) => {
  const { name,summary,healthscore,diets,image,steps,dishtypes } = req.body;

  try {
    const newRecipe = await createRecipe(name,summary,healthscore,image,diets,steps,dishtypes);
    newRecipe? res.status(200).json(newRecipe)
    : res.status(404).send("No pudimos crear la receta")
  } catch (error) {
    res.status(400).json({ error: error.message });
  };
};




 module.exports = {
  getAllRecipesHandler,
  getRecipesByIdHandler,
  createRecipesHandler
 }




 

