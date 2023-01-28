import axios from "axios";
export const GET_ALL_RECIPES = "GET_ALL_RECIPES"
export const GET_DIETS = "GET_DIETS";
export const FILTER_BY_DIETS = "FILTER_BY_DIETS";
export const FILTER_CREATED = "FILTER_CREATED";

// Hago un get para todas las recetas 
export const getAllRecipes=()=>{ 
  return async function(dispatch){
    let infoApi = await axios.get("http://localhost:3001/recipes") // conexion entre f y b

    return dispatch({
      type: GET_ALL_RECIPES,
      payload: infoApi.data
    })
  };
  };


export const getDiets =()=>{
  return async function(dispatch){
    let infoApi = await axios.get("http://localhost:3001/diets")
    return dispatch({
      type: GET_DIETS,
      payload: infoApi.data
    })
  };
  };


export const filteredByDiets =(payload)=>{
  return{
    type: FILTER_BY_DIETS,
    payload: payload
  }
}

// action para saber si las recipes vienen de api o son creadas por mi 

export const filterCreated=(payload)=>{ // sera el value de la opcion elegida
  return{
    type: FILTER_CREATED,
    payload
  }
}

