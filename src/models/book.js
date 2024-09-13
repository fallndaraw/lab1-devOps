require('dotenv').config(); // Charge les variables d'environnement depuis le fichier .env

const { Sequelize, DataTypes } = require("sequelize");

// Construire l'URL de la base de données en utilisant les variables d'environnement
const databaseUrl = `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;


const sequelize = new Sequelize(databaseUrl, {
  dialect: "postgres",
});

// Define the Book model
const Book = sequelize.define("Book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  published_year: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

// Sync the model with the database
sequelize.sync();

module.exports = Book;