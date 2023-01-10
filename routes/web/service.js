const express = require(`express`)
const { serviceroute } = require(`../../controllers/web/sevice`)
const router = express.Router();
router.get(`/`, serviceroute)
module.exports = router