const express = require("express");
const path = require("path");
const homeRoute = require("./routes/homeRoutes");
const ejs = require("ejs");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

//라우트 설정 
app.use("/", homeRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

