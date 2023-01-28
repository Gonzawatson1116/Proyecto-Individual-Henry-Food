const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    healthscore:{
      type: DataTypes.FLOAT
    },
    image:{
      type: DataTypes.STRING,
      defaultValue: "https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_640.png",
    },
    steps:{
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    dishtypes:{
      type: DataTypes.STRING,
    }
  });
};
