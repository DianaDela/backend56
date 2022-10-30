<<<<<<< HEAD
const {request, resonse } = require("express")

const getUsers = (req = request, res = response) => {
    console.log("Funcion getUsers")
    res.json({msg: "Funcion getUsers"})
=======
const {request, response } = require("express")
const pool = require("../db/connection");

const getUsers = async (req = request, res = response) => {
   let conn;

   try {
       conn = await pool.getConnection()//realizamos la conexion

       //Generamos la consulta
       const users = await conn.query("SELECT * FROM Usuarios", (error) => { if (error) throw error })

       if (!users) {//en caso de no haber registros lo informamos
          res.status(404).json({msg: "No existen usuarios registrados"})
          return
       }

       res.json({users})//se manda la lista de usuarios
   } catch (error) {
       console.log(error)
       res.status(500).json({msg: error})//informamos el error
   } finally {
       if (conn) conn.end()//Termina la conexion
   }
>>>>>>> cdec3f3 (backendB-9)
}

module.exports = {getUsers}