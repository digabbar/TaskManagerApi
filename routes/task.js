const express = require("express");
const router = express.Router();

const {
  allTasks,
  addTask,
  taskDetails,
  editTask,
  deleteTask,
} = require("../controller/task");

router.route("/").get(allTasks).post(addTask);
router.route("/:id").get(taskDetails).patch(editTask).delete(deleteTask);

module.exports = router;
