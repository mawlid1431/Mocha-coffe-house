

const express = require(`express`)
const { odersController, odervbbn } = require(`../../controllers/admin/orders`)
const isUserAllowed = require(`../../middlewares/isUserAllowed`)
const router = express.Router()

router.get(`/orders/`, isUserAllowed, odersController)
// router.get(`/updateMenu/:id`, isUserAllowed, addfoodcontroller)
// router.get(`/addUser`, isUserAllowed, addUsercontroller)

router.post(`/orders`, odervbbn)

// router.delete(`/:id`, isUserAllowed, deleteidcon)
// router.put(`/:id`, updateduserscontrollers)

module.exports = router