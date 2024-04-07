const mongoose = require("mongoose");
//importamos los modelos
const Movie = require("../models/Movie.model");
//importamos los datos
const movies = require("./movies")
//conectamos a la base de datos
require("../db/index");

mongoose.connection.once('open', async () => {
    console.log('opened connection!')

    try {
    //await Movie.collection.drop();
    console.log("Collections dropped");
    
    const movieSaved = await Movie.insertMany(movies);
    console.log (`data inserted: ${movieSaved.length}`);
    } catch (error) {
        console.error("Error seeding the database", error);
    } finally {
        mongoose.connection.close();
    }
});
mongoose.connection.on('error', (error) => {
    console.error('Error connecting to the database:', error);
});

  // Escuchamos los eventos de la conexión. En este caso, nos interesa el evento "disconnected"
mongoose.connection.once('disconnected', () => {
    console.log('Disconnected from the database');
});