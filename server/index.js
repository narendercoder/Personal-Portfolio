require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const contactRoutes = require("./routes/contactRoutes");
const { CLIENT_ACCESS_URL } = require("../server/config/keys");

const corsOptions = {
  origin: CLIENT_ACCESS_URL,
  methods: ['GET', 'PUT', 'POST']
};

// Enable CORS for specified origins and methods
app.use(cors(corsOptions));

// Parse incoming JSON data
app.use(express.json());

// Use the contactRoutes for handling contact form submissions
app.use("/contact", contactRoutes);


// Basic route for testing server
app.get("/", (req, res) => {
  res.send("hello world");
});

// Start the Express server and listen on port 4000
app.listen(4000, () => {
  console.log(`server is running at port 4000`);
});
