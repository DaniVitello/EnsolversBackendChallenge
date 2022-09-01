import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import router from "./routes/notas.js"


const app = express();

// coneccion con base de datos
mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4/notas')
    .then(()=>{
        console.log('Conectado a la base de datos!');

    })
// Middleware
app.use(morgan('dev'))
app.use(express.json())

// config
app.set('PORT',3000)

// rutas
app.use('/api/',router)
// on server
app.listen(app.get('PORT'),()=>{
    console.log('Server port 3000')
})