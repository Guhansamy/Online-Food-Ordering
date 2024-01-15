const userscontroller = require("../controller/userscontroller")

module.exports = (app) => {
    app.post ("/api/register/",userscontroller.register);
    app.post("/api/login/",userscontroller.login);
}