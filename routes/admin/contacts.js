const express = require(`express`)
const { contactcontroller, contactcontroller11 }
    = require(`../../controllers/admin/contacts`)
const isUserAllowed = require(`../../middlewares/isUserAllowed`)
const router = express.Router()

router.get(`/`, isUserAllowed, contactcontroller)
// router.get(`/updateMenu/:id`, isUserAllowed, addfoodcontroller)
// router.get(`/addUser`, isUserAllowed, addUsercontroller)

router.post(`/`,  contactcontroller11)
// router.delete(`/:id`, isUserAllowed, deleteidcon)
// router.put(`/:id`, updateduserscontrollers)

module.exports = router

