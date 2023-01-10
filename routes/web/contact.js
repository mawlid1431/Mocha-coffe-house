const express = require(`express`)
const { contactroute } = require(`../../controllers/web/contacts`)
const router = express.Router();
router.get(`/`, contactroute)
module.exports = router