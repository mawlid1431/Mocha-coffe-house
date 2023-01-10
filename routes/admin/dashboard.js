const express = require("express");
const {
  dashboardPageController,
} = require("../../controllers/admin/dashboard");

const router = express.Router();
const isUserAllowed = require(`../../middlewares/isUserAllowed`)



router.get("/", isUserAllowed, dashboardPageController);
// router.get("/", isUserAllowed, dashboardPageController);

module.exports = router;
