const { TypeDiet } = require("../db")

  const getDietsHandler= async(req,res)=>{
  try{

    const types = [
  "gluten free",
  "dairy free",
  "paleolithic",
  "lacto ovo vegetarian",
  "primal",
  "whole 30",
  "fodmap friendly",
  "ketogenic",
  "pescatarian",
  "vegan"
]
types.forEach(async (e)=> {
  await TypeDiet.findOrCreate({
      where: { name: e }
  })
});
let result = await TypeDiet.findAll()
return res.send(result)
}catch(error){
  res.status(400).send("Hubo un error")
}
}


module.exports = getDietsHandler