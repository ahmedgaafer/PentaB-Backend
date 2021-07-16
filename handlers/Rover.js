const Rover = require("../Rover/");

async function connect(req, res, next) {
  try {
    const { x, y, dir, stops } = req.body;
    if (!x || !y || !dir || !Array.isArray(stops))
      throw new Error("Missing request data ");

    global.R = new Rover(x, y, dir, stops);

    return res.status(201).json({ msg: "Rover has been created successfully" });
  } catch (error) {
    return next({
      status: 400,
      message: error.message,
    });
  }
}

async function getCurrentRoverPosition(req, res, next) {
  try {
    return res
      .status(200)
      .json({ "rover-current-position": global.R.getCurrentDir() });
  } catch (error) {
    return next({
      status: 400,
      message: error.message,
    });
  }
}

async function sendCommand(req, res, next) {
  try {
    const { command } = req.body;
    return res
      .status(200)
      .json({ "new-rover-position": global.R.executeCommand(command) });
  } catch (error) {
    return next({
      status: 400,
      message: error.message,
    });
  }
}

module.exports = {
  connect,
  getCurrentRoverPosition,
  sendCommand,
};
