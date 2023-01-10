const express = require(`express`)
const { menuroute, menu } = require(`../../controllers/web/menu`)
const router = express.Router();
router.get(`/`, menuroute)
router.get(`/detailpage`, menu)
module.exports = router