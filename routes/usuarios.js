const {Router} = require("express")
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const {getUsers, getUserByID, deleteUserByID} = require("../controllers/usuarios")
=======
<<<<<<< HEAD
const {getUsers} = require("../controllers/usuarios")
const router = Router()

//http://localhost:4000/api/v1/users/

router.get("/", getUsers)
=======
const {getUsers, getUserByID} = require("../controllers/usuarios")
>>>>>>> a2c19e0350d734b9bbe2769acbd7b120647f9379
=======
const {getUsers, getUserByID, deleteUsersByID, addUser} = require("../controllers/usuarios")
>>>>>>> 6f792d8 (backendB-12)
=======
const {getUsers, getUserByID, deleteUsersByID, addUser} = require("../controllers/usuarios")
>>>>>>> d1eb93c (backendB-13)
=======
const {getUsers, getUserByID, deleteUsersByID, addUser, updateUserByUsuario} = require("../controllers/usuarios")
>>>>>>> fa65de0 (backendB-14)
=======
const {getUsers, getUserByID, deleteUsersByID, addUser, updateUserByUsuario} = require("../controllers/usuarios")
>>>>>>> 271b41f (backendB-15)
=======
const {getUsers, getUserByID, deleteUsersByID, addUser, updateUserByUsuario, signIn, contrasena} = require("../controllers/usuarios")
>>>>>>> 4e0720d (backendB-16)
const router = Router()

//http://localhost:4000/api/v1/usuarios/id

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6f792d8 (backendB-12)
=======
>>>>>>> d1eb93c (backendB-13)
=======
>>>>>>> fa65de0 (backendB-14)
=======
>>>>>>> 271b41f (backendB-15)
=======
>>>>>>> 4e0720d (backendB-16)
///GET///
router.get("/", getUsers)
router.get("/id/:id", getUserByID)

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
///DELETE///
router.delete("/id/:id", deleteUserByID)
=======
router.get("/", getUsers)
router.get("/id/:id", getUserByID)
>>>>>>> ed1118d (backendB-10)
>>>>>>> a2c19e0350d734b9bbe2769acbd7b120647f9379
=======
=======
>>>>>>> d1eb93c (backendB-13)
///POST///
router.post("/", addUser)

///DELETE///
router.delete("/id/:id", deleteUsersByID)
<<<<<<< HEAD
>>>>>>> 6f792d8 (backendB-12)
=======
>>>>>>> d1eb93c (backendB-13)
=======
=======
>>>>>>> 271b41f (backendB-15)
///POST///
router.post("/", addUser)
=======
///POST///
router.post("/", addUser)
router.post("/signin", signIn)
router.post("/contrasena", contrasena)
>>>>>>> 4e0720d (backendB-16)

///PUT///
router.put("/", updateUserByUsuario)

///DELETE///
router.delete("/id/:id", deleteUsersByID)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> fa65de0 (backendB-14)
=======
>>>>>>> 271b41f (backendB-15)
=======
>>>>>>> 4e0720d (backendB-16)

module.exports = router