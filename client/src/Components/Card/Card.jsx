import React from "react";
import { Link } from "react-router-dom";


const Card =({image, name, diets, id, healthscore})=>{ 
  return(
    <div className="card-container">
      <Link to = {`/home/${id}`}></Link>
      
      <div>
        <h3 className="cardtitle">{name}</h3>
        <h5 className="carddescription">TIPO DE DIETA: {diets.join(", ")}</h5>
        <h5 className="carddescription">PUNTUACIÓN: {healthscore}</h5>
      </div>
    </div>
  )
}



export default Card;