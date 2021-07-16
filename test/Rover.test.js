/*
  Unit Testing
  This files test the Rover functions in the server.
*/

const { TestWatcher } = require("jest");
const Rover = require("../Rover");

let r;
const x = 1;
const y = 1;
const dir = "EAST";
const stops = [[6, 5]];

test("Correct initialization", () => {
  r = new Rover(x, y, dir, stops);
  expect(r.x).toBe(x);
  expect(r.y).toBe(y);
  expect(r.dir).toBe(dir);
});

test("Location 'No Movement Executed'", () => {
  expect(r.getCurrentDir()).toBe(`(${x}, ${y}) ${dir}`);
});

test("Location 'Movement Executed'", () => {
  const command = "FFFRFFLBBLF";
  const result = "(2, 2) NORTH";

  r.executeCommand(command);
  expect(r.getCurrentDir()).toBe(result);
});

test("Location 'Movement Executed 2'", () => {
  const command = "BBBLBBLBBLFF";
  const result = "(6, 3) EAST";

  r.executeCommand(command);
  expect(r.getCurrentDir()).toBe(result);
});

test("Location 'Rover Should stop'", () => {
  const command = "RFF";
  const result = "(6, 4) SOUTH STOPPED";

  r.executeCommand(command);
  expect(r.getCurrentDir()).toBe(result);
});
