const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const teacherRoute = require("./routes/teacherRoute");
const connectDB = require("./config/connectDB");

const app = express();

dotenv.config();
connectDB();
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v3/teachers", teacherRoute);
app.get("/", (req, res) => {
  res.send("First teachers api");
});

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
