const {Router} = require("express")
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
const router = Router()

//http://localhost:4000/api/v1/usuarios/id

<<<<<<< HEAD
///GET///
router.get("/", getUsers)
router.get("/id/:id", getUserByID)

///DELETE///
router.delete("/id/:id", deleteUserByID)
=======
router.get("/", getUsers)
router.get("/id/:id", getUserByID)
>>>>>>> ed1118d (backendB-10)
>>>>>>> a2c19e0350d734b9bbe2769acbd7b120647f9379

module.exports = router