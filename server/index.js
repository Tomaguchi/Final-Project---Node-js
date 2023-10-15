const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");

const employeesRouter = require("./routers/employeesRouter");
const departmentsRouter = require("./routers/departmentsRouter");
const shiftsRouter = require("./routers/shiftsRouter");
const usersRouter = require("./routers/usersRouter");
const { requireAuth } = require("./middlewares/auth-middleware");
const { actionLogger } = require("./middlewares/action-logger-middleware");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);

app.use("/employees", [requireAuth, actionLogger], employeesRouter);
app.use("/departments", [requireAuth, actionLogger], departmentsRouter);
app.use("/shifts", [requireAuth, actionLogger], shiftsRouter);

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
