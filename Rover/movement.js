/**
 *         N
 *
 *     W   *   E
 *
 *         S
 **/

const rotationMap = {
  NL: "WEST",
  WL: "SOUTH",
  SL: "EAST",
  EL: "NORTH",
  NR: "EAST",
  WR: "NORTH",
  SR: "WEST",
  ER: "SOUTH",
};

/*it seems redundant to test this file since Im testing the Rover class*/

function _isXAxis(dir) {
  return dir === "EAST" || dir === "WEST" ? true : false;
}

function _changePos(axis, isForward, dir) {
  const moveVlaue = dir === "NORTH" || dir === "WEST" ? -1 : 1;
  return isForward ? axis + moveVlaue : axis - moveVlaue;
}

function _isCrashing(newX, newY, obsticles) {
  for (let pos of obsticles) {
    if (pos[0] === newX && pos[1] === newY) return true;
  }

  return false;
}

function _move(x, y, dir, obsticles, isForward) {
  let newX, newY;

  if (_isXAxis(dir)) {
    newX = _changePos(x, isForward, dir);
    newY = y;
  } else {
    newX = x;
    newY = _changePos(y, isForward, dir);
  }

  return _isCrashing(newX, newY, obsticles) ? [x, y, "stopped"] : [newX, newY];
}

function rotateLeft(dir) {
  return rotationMap[`${dir[0]}L`];
}

function rorateRight(dir) {
  return rotationMap[`${dir[0]}R`];
}

function moveForward(x, y, dir, obsticles) {
  return _move(x, y, dir, obsticles, true);
}

function moveBackward(x, y, dir, obsticles) {
  return _move(x, y, dir, obsticles, false);
}

module.exports = {
  L: rotateLeft,
  R: rorateRight,
  F: moveForward,
  B: moveBackward,
};
