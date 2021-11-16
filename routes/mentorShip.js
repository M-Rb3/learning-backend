const express = require("express");

// NEW CONTROLLERS
const mentorship = require("../controllers/v1/mentorship");

// MIDDLEWARE
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.use(authMiddleware.protect);

router.post("/", mentorship.createMentorship);
router.get("/", mentorship.getAllMentorship);
router.get("/:id", mentorship.getMentorship);
router
  .route("/:id")
  .patch(mentorship.updateMentorship)
  .delete(mentorship.deleteMentorship);

router.use(authMiddleware.restrictTo("admin"));

module.exports = router;
