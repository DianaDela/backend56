<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
const {request, resonse } = require("express")

const getUsers = (req = request, res = response) => {
    console.log("Funcion getUsers")
    res.json({msg: "Funcion getUsers"})
=======
=======
>>>>>>> ed1118d (backendB-10)
>>>>>>> a2c19e0350d734b9bbe2769acbd7b120647f9379
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cdec3f3 (backendB-9)
}

module.exports = {getUsers}
=======
>>>>>>> a2c19e0350d734b9bbe2769acbd7b120647f9379

}

const getUserByID = async (req = request, res = response) =>{
    const {id} = req.params
    let conn;

   try {
       conn = await pool.getConnection()//realizamos la conexion

       //Generamos la consulta
       const users = await conn.query(`SELECT * FROM Usuarios WHERE ID = ${id}`, (error) => { if (error) throw error })

<<<<<<< HEAD
       console.log(users)

=======
>>>>>>> a2c19e0350d734b9bbe2769acbd7b120647f9379
       if (!users) {//en caso de no haber registros lo informamos
          res.status(404).json({msg: `No existen usuarios registrados con el ID ${id}`})
          return
       }

       res.json({users})//se manda la lista de usuarios
   }catch (error) {
       console.log(error)
       res.status(500).json({msg: error})//informamos el error
   } finally {
       if (conn) conn.end()//Termina la conexion
   }
}

<<<<<<< HEAD
const deleteUserByID = async (req = request, res = response) =>{
    const {id} = req.params
    let conn;

   try {
       conn = await pool.getConnection()//realizamos la conexion

       //Generamos la consulta
       const result = await conn.query(`UPDATE Usuarios SET Activo = 'N' WHERE ID = ${id}`, (error) => { if (error) throw error })

       console.log(result.affectedRows)

       if (result.affectedRows == 0) {//en caso de no haber registros lo informamos
          res.status(404).json({msg: `No existen usuarios registrados con el ID ${id}`})
          return
       }

       res.json({msg: `Se elimino satisfactoriamente el usuario con ID $(ID)`})//se manda la lista de usuarios
   }catch (error) {
       console.log(error)
       res.status(500).json({msg: error})//informamos el error
   } finally {
       if (conn) conn.end()//Termina la conexion
   }
}
module.exports = {getUsers, getUserByID, deleteUserByID}
=======
module.exports = {getUsers, getUserByID}
>>>>>>> ed1118d (backendB-10)
>>>>>>> a2c19e0350d734b9bbe2769acbd7b120647f9379
