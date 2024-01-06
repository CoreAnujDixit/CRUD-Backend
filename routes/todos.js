//uses controller
const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo.js");
const { getTodo } = require("../controllers/getTodo.js");

router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);

module.exports = router;

