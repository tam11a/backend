const express = require("express");
const router = express.Router();

// Get all users
router.get("/", require("./views/get-users"));
// Create a new user
router.post("/", require("./views/create-user"));
// Get a user by id
router.get("/:id", require("./views/get-a-user"));
// Update a user by id
router.patch("/:id", require("./views/update-user"));
// Delete a user by id
router.delete("/:id", require("./views/delete-user"));

module.exports = router;
