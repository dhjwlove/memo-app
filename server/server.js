var express = require("express");
var path = require("path");
var app = express();

app.get("/js/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "build", req.originalUrl));
});

app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "../", "build", "index.html"));
});

/**
 * 에러가 발생했을때 전송
 */
app.use((err, req, res, next) => {
  res.header("Content-Type", "application/json; charset=utf-8");
  res.status(err.status || 500);
  const errorResponse = JSON.stringify({
    error: err.message
  });
  res.end(errorResponse);
});

app.listen(4000, function() {
  console.log("app listening on port 4000!");
});
