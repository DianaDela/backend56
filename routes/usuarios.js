const {Router} = require("express")
const {getUsers, getUserByID, deleteUserByID} = require("../controllers/usuarios")
const router = Router()

//http://localhost:4000/api/v1/usuarios/id

///GET///
router.get("/", getUsers)
router.get("/id/:id", getUserByID)

///DELETE///
router.delete("/id/:id", deleteUserByID)

module.exports = router