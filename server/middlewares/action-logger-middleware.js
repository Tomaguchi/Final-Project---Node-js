const { log } = require("console");
const fs = require("fs");
const path = require("path");

const logPath = path.join(__dirname, "./action-logs.json");
const logs = JSON.parse(fs.readFileSync(logPath, "utf-8"));

const saveLog = () => fs.writeFileSync(logPath, JSON.stringify(logs, null, 2));

const actionLogger = (req, res, next) => {
  const user = res.locals.token;
  const userId = user._id.toString();
  const today = new Date().toISOString().slice(0, 10);
  const userLogs = logs.actions.filter((log) => log.id === userId && log.date === today);

  if (userLogs.length === 0) {
    logs.actions.push({
      id: userId,
      date: today,
      maxActions: user.numOfActions,
      actionAllowed: user.numOfActions - 1,
    });
    saveLog();
    return next();
  } else if (userLogs.at(-1).actionAllowed === 0) {
    res.status(403).send("Max actions exceeded");
  } else {
    logs.actions.push({
      id: userId,
      maxActions: user.numOfActions,
      date: today,
      actionAllowed: userLogs.at(-1).actionAllowed - 1,
    });
    saveLog();
    return next();
  }
};

module.exports = { actionLogger };
