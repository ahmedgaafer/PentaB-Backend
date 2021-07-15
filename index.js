const Express = require("express");
const app = Express();
const PORT = process.env.PORT || 8080;

/*Server Start*/
app.listen(PORT, () => {
  console.log(
    `Server started in ${
      process.env.NODE_ENV || "Production"
    } mode. \nPORT: ${PORT}`
  );
});
