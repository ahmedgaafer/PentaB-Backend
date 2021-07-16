const Express = require("express");
const app = Express();
const PORT = process.env.PORT || 8080;

const Routes = require("./Routes");
const ErrorHandler = require("./handlers").Error;

/*Configs*/
app.use(Express.json());

/*Routes & Error handler*/
app.use("/api", Routes);
app.use(ErrorHandler);

/*Server Start*/
app.listen(PORT, () => {
  console.log(
    `Server started in ${
      process.env.NODE_ENV || "Production"
    } mode. \nPORT: ${PORT}`
  );
});
