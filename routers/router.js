const express = require("express");
const router = express.Router();
const {
  createBootcamp,
  getBootcamp,
  deleteBootcamp,
  updateBootcamp,
} = require("../controllers/controller");
router.route("/").get(getBootcamp).post(createBootcamp);

router.route("/:id").put(updateBootcamp).delete(deleteBootcamp);

module.exports = router;
