const { Recipe , TypeDiet } = require("../db")
const axios = require("axios");
const { API_KEY } = process.env;


// Traemos info de la API:

const getApiInfo = async()=>{

  try{
  const apiInfo = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)
  const mapApiData = apiInfo.data.results.map((r)=>{
    return{
      id: r.id,
      name: r.title,
      image: r.image,
      summary: r.summary,
      healthscore: r.healthScore,
      dishtypes: r.dishTypes.map((f)=>{ return {title: f }}),
      diets: r.diets.map((diet)=>{ return {title: diet }}),
      steps: r.analyzedInstructions
    }
  });
  //console.log(mapApiData)
  return mapApiData;

  }catch(error){
    console.log(error)
  };
};


// Ahora traigo lo que tengo en la BDD

const getDataBase = async()=>{
  try{

    const dbInfo = await Recipe.findAll({
      include:{
        model : TypeDiet,
        attributes: ["name"],
        through:{
          attributes:[]
        }
      }
    })
    const dbMaping = await dbInfo?.map((e) => {
      
      return{
        id: e.id,
        name : e.name,
        summary: e.summary,
        healthscore: e.healthscore,
        image: e.image,
        steps: e.steps,
        diets: e.TypeDiets.map((e)=>{e.name}),
        dishtypes: e.dishtypes
      }
    })
    return dbMaping;
  }catch(error){
    console.log(error)
  }
};


// Ahora concateno la info


const getAllRecipes = async()=>{
  try{
    const apiInfo = await getApiInfo()
    const ddbInfo = await getDataBase()
    const concat = [...apiInfo, ...ddbInfo];
    return concat;
  }catch(error){
    console.log(error)
  };
};


const searchRecipeByName = async (name) => {
  try{
    const dbRecipes = await Recipe.findAll({ where: { name: name } });
    const apiRecipes = await getApiInfo()
  
    const filteredApi = apiRecipes.filter((r) => r.name === name);
  
    return [...filteredApi, ...dbRecipes];
    
  }catch(error){
    console.log(error)
  };
};

const getRecipeById = async (id) => {
  try{
    const searchRecipe = await getAllRecipes();
    const findRecipe = searchRecipe.find((e)=> e.id == id)
    if(findRecipe){
      return findRecipe
    }
  
  }catch(error){
    console.log(error)
  };
};



const createRecipe = async (name,summary,diets,healthscore,image,steps,dishtypes) => {
  try{

    const recipeCreated = await Recipe.create({name,summary,healthscore,image,steps,dishtypes  });
    const typediet = await TypeDiet.findAll({
      where:{name: diets}
    })
    await recipeCreated.addTypeDiet(typediet)

    return recipeCreated;
  }catch(error){
    console.log(error)
  }
};


  



module.exports = { getAllRecipes, searchRecipeByName, getRecipeById , createRecipe}