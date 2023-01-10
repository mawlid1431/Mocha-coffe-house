const express = require(`express`)
const { homeroute } = require(`../../controllers/web/home`)
const router = express.Router();
router.get(`/`, homeroute)


module.exports = router