const express = require("express");
const port = process.env.PORT || 5000;
const usersRoute = require("./routes/v1/users.route");
const app = express();
app.use(express.json());

app.use("/users", usersRoute);
/**
 *
 *
 *
 */
app.get("/", (req, res) => {
  res.send("This server is running Now");
});
app.all("*", (req, res) => {
  res.send("No route found");
});
app.listen(port, () => {
  console.log("This server running :", port);
});
