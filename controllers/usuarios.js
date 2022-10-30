<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
const {request, response } = require("express")
const pool = require("../db/connection");
//htpp://localhost:4000/api/v1/usuarios
>>>>>>> 6f792d8 (backendB-12)
=======
const {request, response } = require("express")
const pool = require("../db/connection");
//htpp://localhost:4000/api/v1/usuarios
>>>>>>> d1eb93c (backendB-13)
=======
const {request, response } = require("express")
const pool = require("../db/connection");
//htpp://localhost:4000/api/v1/usuarios
>>>>>>> fa65de0 (backendB-14)
const getUsers = async (req = request, res = response) => {
   let conn;

   try {
       conn = await pool.getConnection()//realizamos la conexion

       //Generamos la consulta
       const users = await conn.query("SELECT * FROM Usuarios", (error) => { if (error) throw error })

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
=======
>>>>>>> d1eb93c (backendB-13)
=======
>>>>>>> fa65de0 (backendB-14)
       if (!users.length===0) {//en caso de no haber registros lo informamos
          res.status(404).json({msg: "No existen usuarios registrados"})
          return
       }
       
       res.json({users})//se manda la lista de usuarios

   } 
   
   catch (error) {
   console.log(error)
   res.status(500).json({msg: error})//informamos el error
   } 
   finally {
       if (conn) conn.end()//Termina la conexion
   }

}
   //console.log("Funcion getUsers")
   //res.json(msg: "Funcion getUsers"})
//}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 6f792d8 (backendB-12)
=======
>>>>>>> d1eb93c (backendB-13)
=======
>>>>>>> fa65de0 (backendB-14)
const getUserByID = async (req = request, res = response) =>{
    const {id} = req.params
    let conn;

   try {
       conn = await pool.getConnection()//realizamos la conexion

       //Generamos la consulta
       const users = await conn.query(`SELECT * FROM Usuarios WHERE ID = ${id}`, (error) => { if (error) throw error })

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
       console.log(users)

=======
>>>>>>> a2c19e0350d734b9bbe2769acbd7b120647f9379
=======
>>>>>>> 6f792d8 (backendB-12)
=======
>>>>>>> d1eb93c (backendB-13)
=======
>>>>>>> fa65de0 (backendB-14)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const deleteUserByID = async (req = request, res = response) =>{
=======
const deleteUsersByID = async (req = request, res = response) =>{
>>>>>>> 6f792d8 (backendB-12)
=======
const deleteUsersByID = async (req = request, res = response) =>{
>>>>>>> d1eb93c (backendB-13)
=======
const deleteUsersByID = async (req = request, res = response) =>{
>>>>>>> fa65de0 (backendB-14)
    const {id} = req.params
    let conn;

   try {
       conn = await pool.getConnection()//realizamos la conexion

       //Generamos la consulta
       const result = await conn.query(`UPDATE Usuarios SET Activo = 'N' WHERE ID = ${id}`, (error) => { if (error) throw error })

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
       console.log(result.affectedRows)

=======
>>>>>>> 6f792d8 (backendB-12)
=======
>>>>>>> d1eb93c (backendB-13)
=======
>>>>>>> fa65de0 (backendB-14)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
module.exports = {getUsers, getUserByID, deleteUserByID}
=======
module.exports = {getUsers, getUserByID}
>>>>>>> ed1118d (backendB-10)
>>>>>>> a2c19e0350d734b9bbe2769acbd7b120647f9379
=======
=======
>>>>>>> d1eb93c (backendB-13)

const addUser = async (req = request, res = response) =>{
    const {Nombre,
           Apellidos,
           Edad,
           Genero,
           Usuario,
           Contraseña,
           Fecha_Nacimiento,
           Activo}= req.body//URI Params
=======

const addUser= async (req = request, res = response) =>{
    const {
        Nombre,
        Apellidos,
        Edad,
        Genero,
        Usuario,
        Contraseña,
        Fecha_Nacimiento,
        Activo}= req.body//URI Params
>>>>>>> fa65de0 (backendB-14)

    if(!Nombre||
       !Apellidos||
       !Edad||
       !Genero||
       !Usuario||
       !Contraseña||
<<<<<<< HEAD
       !Fecha_Nacimiento||
       !Activo) 
=======
       !Activo)
>>>>>>> fa65de0 (backendB-14)
    {
        res.status(400).json({msg: "Faltan datos"})
        return
    }

    let conn;

<<<<<<< HEAD
   try {
       conn = await pool.getConnection()//realizamos la conexion

<<<<<<< HEAD
=======
=======
    //validar que no existe el usuario

   try {
       conn = await pool.getConnection()//realizamos la conexion

>>>>>>> fa65de0 (backendB-14)
       const [userExist] = await conn.query(`SELECT Usuario From Usuarios WHERE Usuario = '${Usuario}'`)

       if (userExist) {
        res.status(400).json({msg: `El usuario ${Usuario} ya se encuentra registrado.`})
        return
       }
<<<<<<< HEAD
>>>>>>> d1eb93c (backendB-13)
=======
>>>>>>> fa65de0 (backendB-14)

       //Generamos la consulta
       const result = await conn.query(`
       INSERT INTO Usuarios(
        Nombre,
        Apellidos,
        Edad,
        Genero,
        Usuario,
        Contraseña,
        Fecha_Nacimiento,
        Activo)
<<<<<<< HEAD
       VALUES(
=======
       VALUE(
>>>>>>> fa65de0 (backendB-14)
        '${Nombre}',
        '${Apellidos}',
        '${Edad}',
        '${Genero}',
        '${Usuario}',
        '${Contraseña}',
        '${Fecha_Nacimiento}',
        '${Activo}'
       )
        `, (error) => { if (error) throw error })

       if (result.affectedRows == 0) {//en caso de no haber registros lo informamos
          res.status(404).json({msg: `No se pudo agregar el usuario`})
          return
       }

       res.json({msg: `Se agrega satisfactoriamente el usuario`})//se manda la lista de usuarios
       }
       catch (error) {
           console.log(error)
           res.status(500).json({msg: error})//informamos el error
        } 
        finally{
            if (conn) conn.end()//Termina la conexion
   }
}
<<<<<<< HEAD
<<<<<<< HEAD
module.exports = {getUsers, getUserByID, addUser, deleteUsersByID}
>>>>>>> 6f792d8 (backendB-12)
=======
module.exports = {getUsers, getUserByID, addUser, deleteUsersByID}
>>>>>>> d1eb93c (backendB-13)
=======

const updateUserByUsuario= async (req = request, res = response) =>{
    const {
        Nombre,
        Apellidos,
        Edad,
        Genero,
        Usuario,
        Fecha_Nacimiento = '1900-01-01',
        }= req.body//URI Params

    if(!Nombre||
       !Apellidos||
       !Edad||
       !Usuario
    ){
        res.status(400).json({msg: "Faltan datos"})
        return
    }

    let conn;

    //validar que no existe el usuario

   try {
       conn = await pool.getConnection()//realizamos la conexion

       const [userExist] = await conn.query(`SELECT Usuario From Usuarios WHERE Usuario = '${Usuario}'`)

       if (userExist) {
        res.status(400).json({msg: `El usuario ${Usuario} no se encuentra registrado.`})
        return
       }

       //Generamos la consulta
       const result = await conn.query(`
       UPDATE Usuarios SET
        Nombre = '${Nombre}',
        Apellidos ='${Apellidos}',
        Edad ='${Edad}',
        ${Genero ? `Genero ='${Genero}',` : ''}
        Fecha_Nacimiento ='${Fecha_Nacimiento}',
       WHERE
           Usuario = '${Usuario}'
        `, (error) => { if (error) throw error })

       if (result.affectedRows == 0) {//en caso de no haber registros lo informamos
          res.status(404).json({msg: `No se pudo agregar el usuario`})
          return
       }

       res.json({msg: `Se agrega satisfactoriamente el usuario`})//se manda la lista de usuarios
       }
       catch (error) {
           console.log(error)
           res.status(500).json({msg: error})//informamos el error
        } 
        finally{
            if (conn) conn.end()//Termina la conexion
   }
}


module.exports = {getUsers, getUserByID, addUser,  deleteUsersByID, updateUserByUsuario}
>>>>>>> fa65de0 (backendB-14)
