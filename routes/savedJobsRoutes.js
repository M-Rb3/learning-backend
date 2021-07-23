const express = require("express");


// NEW CONTROLLERS
const SavedJobs = require("../controllers/v1/saved_jobs");

// MIDDLEWARE
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.get("/", SavedJobs.getAllSavedJobs);

router.get("/:id", SavedJobs.getSavedJobs);

router.use(authMiddleware.protect);

router.post(
  "/",
  SavedJobs.createSavedJobs
);
router
  .route("/:id")
  .patch(SavedJobs.updateSavedJobs)
  .delete(SavedJobs.deleteSavedJobs);


module.exports = router;
