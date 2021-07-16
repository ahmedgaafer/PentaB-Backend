const Express = require("express");
const RoverRoutes = require("./Rover");

const Router = Express.Router();

Router.use("/rover", RoverRoutes);

module.exports = Router;
