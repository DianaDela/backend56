const {Router} = require("express")
<<<<<<< HEAD
const {getUsers} = require("../controllers/usuarios")
const router = Router()

//http://localhost:4000/api/v1/users/

router.get("/", getUsers)
=======
const {getUsers, getUserByID} = require("../controllers/usuarios")
const router = Router()

//http://localhost:4000/api/v1/usuarios/id

router.get("/", getUsers)
router.get("/id/:id", getUserByID)
>>>>>>> ed1118d (backendB-10)

module.exports = router