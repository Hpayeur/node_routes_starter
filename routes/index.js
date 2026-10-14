const routes = require("express").Router();
const myController = require("../controllers");

routes.get("/", myController.awesomeFunction);
routes.get("/ttech", myController.getAllStudents);
// Student routes
routes.use("/students", require("./students"));
routes.use("/classes", require("./classes"));

// auth routes
routes.use("/auth", require("./auth"));

module.exports = routes;
