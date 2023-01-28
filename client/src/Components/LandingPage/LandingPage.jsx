import React from "react";
import { Link } from "react-router-dom"

const LandingPage = ()=>{
  return(
   <div className="landingpage">
      <h1>PROYECTO INDIVIDUAL FOOD</h1>
      <Link to ="/home">
      <button className="boton-ingreso">Ingresar</button>
      </Link>
   </div>
  )
}




export default LandingPage;