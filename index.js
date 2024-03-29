const express = require("express");
const connectDB = require("./Config/bd");
const morgan = require('morgan');
const dotenv = require("dotenv").config();
const cors = require("cors");
const authRoutes = require("./Routes/AutRouteurs");
const cookiesParser = require("cookie-parser");

connectDB();
const app = express();
app.use(morgan('dev'));
app.listen(4000,()=>{
    console.log("Server started on port 4000")
})
app.use(cors({
    origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // autoriser l'envoi des cookies
  optionsSuccessStatus: 204,
  allowedHeaders: 'Content-Type,Authorization',
}));
// bodyParser middleware
app.use(express.json());
app.use(cookiesParser());

// routes
app.use("/", authRoutes);
