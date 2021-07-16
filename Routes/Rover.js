const Express = require("express");
const Router = Express.Router({ mergeParams: true });
const Rover = require("../handlers").Rover;

Router.route("/connect").post(Rover.connect);

Router.route("/position").get(Rover.getCurrentRoverPosition);

Router.route("/move").post(Rover.sendCommand);

module.exports = Router;
