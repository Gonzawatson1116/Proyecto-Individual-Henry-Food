import { GET_DIETS, GET_ALL_RECIPES, FILTER_BY_DIETS, FILTER_CREATED } from "../Actions/actions";


const initialState = {
  recipes:[],
  todasRecipes:[],
  diets:[],
}



const rootReducer =(state = initialState,action)=>{
  switch(action.type){ 
    case GET_ALL_RECIPES : // trae las recetas y las setea en el estado recipes
      return{
        ...state,
        recipes: action.payload,
        todasRecipes: action.payload,
      };
    case GET_DIETS :
      return{
        ...state,
        diets: action.payload
      }

    case FILTER_BY_DIETS:
      const allRecipes = state.todasRecipes;
      const dietsFiltered = action.payload === "All"? allRecipes
      : allRecipes.filter(el=> el.diets.title === action.payload)
      
      console.log(action.payload)
      console.log(dietsFiltered)

      return{
        ...state,
        recipes: dietsFiltered,
      }
    
      case FILTER_CREATED:
        
        return{

        }
      
    default:
      return state;
  }
};


export default rootReducer; // Importamos para que lo agarre el store