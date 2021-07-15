const { TestWatcher } = require("jest");
const Rover = require("../Rover");

let r;
const x = 1;
const y = 1;
const dir = "EAST";
/*
test("", () => {

});
*/
test("Correct initialization", () => {
  r = new Rover(x, y, dir);
  expect(r.x).toBe(x);
  expect(r.y).toBe(y);
  expect(r.dir).toBe(dir);
});

test("Location 'No Movement Executed'", () => {
  expect(r.getCurrentDir()).toBe(`(${x}, ${y}) ${dir}`);
});

test("Location 'Movement Executed'", () => {
  let command = "FFFRFFLBBLF";
  let result = "(2, 2) NORTH";

  r.executeCommand(command);
  expect(r.getCurrentDir()).toBe(result);
});

test("Location 'Movement Executed 2'", () => {
  let command = "BBBLBBLBBLFF";
  let result = "(6, 3) EAST";

  r.executeCommand(command);
  expect(r.getCurrentDir()).toBe(result);
});
