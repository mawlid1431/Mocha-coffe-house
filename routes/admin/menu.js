



const express = require(`express`)
const { menuController,updateHamse ,addMenucontroller, upadatemenucontroller, addmenuform, deletecofeeController, updatedformdata }
    = require(`../../controllers/admin/menu`)
const isUserAllowed = require(`../../middlewares/isUserAllowed`)
const router = express.Router()

router.get(`/menu`, isUserAllowed, menuController,)
router.get(`/menu/addMenu`, isUserAllowed, addMenucontroller)


router.post(`/menu`, isUserAllowed, addmenuform)


router.get(`/menu/update-menu/:id`, isUserAllowed, upadatemenucontroller)
// router.delete(`/:id`, isUserAllowed, deleteidcon)
router.put(`/:id`, updatedformdata)
router.put(`/:id`, updateHamse)

router.delete("/:id", isUserAllowed, deletecofeeController);

module.exports = router
