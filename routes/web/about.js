const express = require(`express`)
const { aboutroute } = require(`../../controllers/web/about`)
const router = express.Router();
router.get(`/`, aboutroute)
module.exports = router