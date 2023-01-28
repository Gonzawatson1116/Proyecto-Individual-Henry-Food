import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, getDiets, filteredByDiets, filterCreated } from "../../Actions/actions";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";



const Home = ()=>{
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const diets = useSelector((state)=>state.diets);


  // Paginado:
  const [currentPage,setCurrentPage] = useState(1);
  const [recipesPerPage,setRecipesPerPage] = useState(9);
  const indexLastRecipe = currentPage * recipesPerPage; // 9
  const indexFirstRecipe = indexLastRecipe - recipesPerPage; // 0
  const currentRecipes =  allRecipes.slice(indexFirstRecipe,indexLastRecipe) // personajes de la pagina actual



  const paginado = (numPagina)=>{
    setCurrentPage(numPagina)
  }

   useEffect(()=>{
    dispatch(getAllRecipes())
    dispatch(getDiets())
  },[dispatch]) // pongo la dep para que no se genere un loop de llamados


  const handlerCLick = (e)=>{
    e.preventDefault()
    dispatch(getAllRecipes())
  }

  
  const handlerFilterDiets=(e)=>{
    dispatch(filteredByDiets(e.target.value))
  }
   


 return(
  <div className="homebackground">
      <Link to= "/createrecipe">
        <button>Crear Receta</button>
      </Link>
      <button className="boton-reset" onClick ={(e) => { handlerCLick(e)}}>Restablecer</button>
      <div className="div-selects">
        <select >
          <option value = "asc">A-Z</option>
          <option value = "desc">Z-A</option>
        </select>
        <select>
          <option value="">Orden por Puntuación</option>
          <option value = "healthasc">Puntuación Ascdendente</option>
          <option value = "healthdesc">Puntuación Descendente</option>
        </select>
        <select className='classic' onChange ={(e) => handlerFilterDiets(e)} >
          <option value="All">Todas</option>
          {
            diets.length &&diets.map((e)=>{
              return(
                <option
                value ={e.name}
                key = {e.id}
                name = {e.name}
                >{e.name}</option>
              )
            })
          }
        </select>
        <Paginado
          recipesPerPage= {recipesPerPage}
          allRecipes ={allRecipes.length} // lo paso asi porque necesito valor numerico
          paginado={paginado}
        ></Paginado>
        { currentRecipes && currentRecipes.map(e => {
            return (
                <Card id={e.id}  name={e.name}  diets={e.diets.map(t=>t.title)} key={e.id} healthscore={e.healthscore} />
                )
        })}
      </div>
  </div>
  
 ) 
}




export default Home;