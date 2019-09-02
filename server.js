const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: "Welcome to the contact keeper API"
  });
});

// set routes
app.use("/api/v1/users", require("./routes/api/v1/users"));
app.use("/api/v1/auth", require("./routes/api/v1/auth"));
app.use("/api/v1/contacts", require("./routes/api/v1/contacts"));

// set port
const PORT = process.env.PORT || 3000

// listen at the declared port
app.listen(PORT, () => {
  console.log("App started at port " + PORT);
})