/*
  Integration Testing
  This files test the end-points in the server.
*/

const { TestWatcher } = require("jest");
const fetch = require("node-fetch");
const server = require("../index");
const base = `http://localhost:${server.address().port}/api/rover`;

describe("POST /api/rover/connect", () => {
  it("Connecting to the new Rover", async function () {
    const body = {
      x: 1,
      y: 1,
      dir: "EAST",
      stops: [[6, 5]],
    };

    const res = await fetch(`${base}/connect`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    expect(res).toEqual({ msg: "Rover has been created successfully" });
  });
});

describe("GET /api/rover/position", () => {
  it("Get the current rover position", async function () {
    const res = await fetch(`${base}/position`).then((res) => res.json());

    expect(res).toEqual({ "rover-current-position": "(1, 1) EAST" });
  });
});

describe("POST /api/rover/move", () => {
  it("Sending movement commands to the rover 1", async function () {
    const res = await fetch(`${base}/move`, {
      method: "POST",
      body: JSON.stringify({ command: "FFFRFFLBBLF" }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    expect(res).toEqual({ "new-rover-position": "(2, 2) NORTH" });
  });

  it("Sending movement commands to the rover 2", async function () {
    const res = await fetch(`${base}/move`, {
      method: "POST",
      body: JSON.stringify({ command: "BBBLBBLBBLFF" }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    expect(res).toEqual({ "new-rover-position": "(6, 3) EAST" });
  });

  it("Sending movement commands to the rover 3 'Invalid position'", async function () {
    const res = await fetch(`${base}/move`, {
      method: "POST",
      body: JSON.stringify({ command: "RFF" }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    expect(res).toEqual({ "new-rover-position": "(6, 4) SOUTH STOPPED" });
  });
});

afterAll(() => {
  server.close();
});
