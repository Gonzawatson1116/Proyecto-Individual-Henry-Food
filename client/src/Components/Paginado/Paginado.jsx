import React from "react";

const Paginado =({recipesPerPage,allRecipes,paginado})=>{
  const numPagina = []

  for(let i = 1 ; i <= Math.ceil(allRecipes/recipesPerPage); i++ ){
     numPagina.push(i)
  }// esto me va a redondear todos las recetas por las que quieroo en cada pag
  
  return( // este comp va a renderizar los numeros del paginado
    <div>
      <nav>
        <ul className="paginado">
          {
            numPagina && numPagina.map((number) =>{
              return(
                <button onClick = {()=> paginado(number)}>{number}</button>
              )
            })
          }
        </ul>
      </nav>
    </div>
  )
  

}




export default Paginado;