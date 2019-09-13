const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/v1/users", require("./routes/api/v1/users"));
app.use("/api/v1/auth", require("./routes/api/v1/auth"));
app.use("/api/v1/contacts", require("./routes/api/v1/contacts"));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

// Set port
const PORT = process.env.PORT || 5000;
// Listen to the port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));