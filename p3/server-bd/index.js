import { sequelize } from './database/database.js';
import express from "express";
import cors from'cors';

import { Producto } from './models/Producto.js';
const app = express()
const port = 3001;
app.use(cors({
    origin: 'http://localhost:3000',
    optionSuccessStatus: 200
}))
async function verificarConexion(){
    try{
        await sequelize.authenticate() 
        console.log("Conexion a BD exitosa");   
        await sequelize.sync()
    }
    catch(error){
        console.error("Conexion no se logro", error);
    }
    
}
app.get("/consultar-producto", async function(req, res){
   // const usuarios = await Usuario.findAll(); //select *
   const {codigo } = req.query;
   let productos;
   
    productos = await Producto.findAll({
    where: {
        codigo
        }
    });//select * where
    res.send(productos);
    //es como un select
})

 app.get("/eliminar-producto", async function(req, res){
    // const usuarios = await Usuario.findAll(); //select *
    const { codigo } = req.query;
     await Producto.destroy({
         where: {
             codigo             
         }
     });
     res.send("Producto eliminado")
 })
app.get("/insertar-producto", async function(req,res){
    const { precio,cantidad, nombre, codigo } = req.query;
    //como he nombrado igual la propiedad y el valor, no es necesario que coloque el nombre:nombre...
    const nuevoProducto= await Producto.create({
        nombre,
        codigo,
        precio,
        cantidad
    })
    res.send("Producto creado");
})
app.get("/", function(req,res){
    res.send("Programacion web");
})

app.listen(port,function(){
    console.log("El servidor esta escuchando, puerto: " + port)
    verificarConexion();
})