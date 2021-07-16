# PentaB-Backend

A back end for the rover mission task

# Table of content

- [PentaB-Backend](#pentab-backend)
- [Table of content](#table-of-content)
  - [Getting Started](#getting-started)
  - [Built-in Commands](#built-in-commands)
  - [APIs](#apis)
    - [Connecting to the rover](#connecting-to-the-rover)
    - [Getting current rover position](#getting-current-rover-position)
    - [Sending command to the rover](#sending-command-to-the-rover)
  - [Improvements](#improvements)

## Getting Started

1. open CMD and go to the project directory by typing

```
  > cd "ProjectPath"/PentaB-Backend
```

2. let's install all of our depencencies type in the CMD

```js
  > npm install
```

3. You are all set to use the program

## Built-in Commands

1. run program in development mode

```
npm run dev
```

2. run program in production mode

> Might not work if not in production env because of env values.

```
npm run start
```

3. Test the program

> All Tests made with [Jest](https://jestjs.io/docs/getting-started)

```
npm run test
```

## APIs

### Connecting to the rover

> POST /api/rover/connect

example request and response body

```json
// request

{
  "x" : 1,
  "y" : 1,
  "dir": "EAST",
  "stops": [[6, 5]]
}


// response 201

{
  "msg": "Rover has been created successfully"
}

```

### Getting current rover position

> GET /api/rover/position

```json
// request "empty body"

{}

//response 200

{
    "rover-current-position": "(1, 1) EAST"
}

```

### Sending command to the rover

> POST /api/rover/move

```json
// request

{
    "command" : "FFF"
}

// response 200

{
    "new-rover-position": "(4, 1) EAST"
}

```

## Improvements

- the connect function could have a url param to connect to a spesefic rover for example

> /api/rover/:rover_id/connect

and we can achive controlling more that one rover by that

the other apis would have the same url param in order for this to function.

- This is a bit hard but the rovers could create a scan of the land by creating a shared dis/connected graph which can make the program scale to do other functions.
