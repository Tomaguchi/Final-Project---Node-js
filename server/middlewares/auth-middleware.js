const jwt = require("jsonwebtoken");
const { findUser } = require("../BLL/usersBLL");

function getToken(req) {
  const tokenHeader = req.headers.authorization;
  if (tokenHeader) {
    const token = tokenHeader.split(" ")[1];
    return token;
  }
}

// middleware to check if the user is logged in
const requireAuth = (req, res, next) => {
  const token = getToken(req);
  if (token) {
    jwt.verify(token, "tal", async (err, decodedToken) => {
      if (err) {
        res.status(403).send("Token invalid");
      } else {
        const user = await findUser({ username: decodedToken.username });
        res.locals.token = user; //accessToken is here
        next();
      }
    });
  } else {
    res.status(401).send("Please login");
  }
};

module.exports = { requireAuth, getToken };
