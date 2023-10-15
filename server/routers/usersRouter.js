const express = require("express");
const { findUser } = require("../BLL/usersBLL");
const { getUsers } = require("../BLL/usersBLL");
const jwt = require("jsonwebtoken");

const router = express.Router();

const JWT_SECRET = "tal";

router.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await findUser({ username, password });
    if (!user) {
      return res.status(403).send({ message: "wrong credentials" });
    }
    const accessToken = jwt.sign({ username }, JWT_SECRET);
    res.send({ accessToken });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
