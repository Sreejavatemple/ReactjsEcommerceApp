"use strict";
//return connection objet
exports.__esModule = true;
var config_1 = require("../config/config");
var db_password = "admin";
var db_name = "mern";
var db_url = "mongodb+srv://root:root@cluster0.4kxqb.mongodb.net/mern?retryWrites=true&w=majority";
function getConnection() {
    try {
        return config_1["default"].mernClient.connect(db_url);
    }
    catch (error) {
        console.log("connection failed");
    }
}
exports["default"] = getConnection;
;
