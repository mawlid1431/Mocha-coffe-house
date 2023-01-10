



const express = require(`express`)
const { listOfusercon, addUsercontroller, adduserform,
    deleteidcon, updateUser, updateduserscontrollers }
    = require(`../../controllers/admin/users`)
const isUserAllowed = require(`../../middlewares/isUserAllowed`)
const router = express.Router()

router.get(`/`, isUserAllowed, listOfusercon)

router.get(`/addUser`, isUserAllowed, addUsercontroller)

router.post(`/`, isUserAllowed, adduserform)
router.get(`/update-user/:id`, isUserAllowed, updateUser)
router.delete(`/:id`, isUserAllowed, deleteidcon)
router.put(`/:id`, updateduserscontrollers)

module.exports = router