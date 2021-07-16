const movement = require("./movement");

class Rover {
  constructor(x, y, dir, stops) {
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.stops = stops;
    this.isStopped = false;
  }

  _changePos(x, y) {
    this.x = x;
    this.y = y;
  }

  _changeDir(dir) {
    this.dir = dir;
  }

  getCurrentDir() {
    return `(${this.x}, ${this.y}) ${this.dir}${
      this.isStopped ? " STOPPED" : ""
    }`;
  }

  executeCommand(command) {
    this.isStopped = false;
    for (let entry of command) {
      const f = movement[entry];
      if (entry === "R" || entry === "L") this._changeDir(f(this.dir));
      else {
        const newPos = f(this.x, this.y, this.dir, this.stops);
        if (newPos.length === 2) this._changePos(...newPos);
        else {
          this.isStopped = true;
          break;
        }
      }
    }

    return this.getCurrentDir();
  }
}

module.exports = Rover;
