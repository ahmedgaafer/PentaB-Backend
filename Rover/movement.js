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

function rotateLeft(dir) {
  return rotationMap[`${dir[0]}L`];
}

function rorateRight(dir) {
  return rotationMap[`${dir[0]}R`];
}

function moveForward(x, y, dir) {
  return _isXAxis(dir)
    ? [_changePos(x, true, dir), y]
    : [x, _changePos(y, true, dir)];
}

function moveBackward(x, y, dir) {
  return _isXAxis(dir)
    ? [_changePos(x, false, dir), y]
    : [x, _changePos(y, false, dir)];
}

module.exports = {
  L: rotateLeft,
  R: rorateRight,
  F: moveForward,
  B: moveBackward,
};
