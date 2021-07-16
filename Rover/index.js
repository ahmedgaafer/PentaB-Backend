const movement = require("./movement");

class Rover {
  constructor(x, y, dir) {
    this.x = x;
    this.y = y;
    this.dir = dir;
  }

  _changePos(x, y) {
    this.x = x;
    this.y = y;
  }

  _changeDir(dir) {
    this.dir = dir;
  }

  getCurrentDir() {
    return `(${this.x}, ${this.y}) ${this.dir}`;
  }

  executeCommand(command) {
    for (let entry of command) {
      const f = movement[entry];
      if (entry === "R" || entry === "L") this._changeDir(f(this.dir));
      else this._changePos(...f(this.x, this.y, this.dir));
    }

    return this.getCurrentDir();
  }
}

module.exports = Rover;
