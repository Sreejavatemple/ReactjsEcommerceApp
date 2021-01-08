"use strict";
exports.__esModule = true;
//import modules
var express = require("express");
var cors = require("cors");
var bodyparser = require("body-parser");
var config_1 = require("./config/config");
var db_connection_1 = require("./db_config/db_connection");
//create the rest object
var app = express();
//where "app" object, used to develop the rest services, GET,POST,PUT,DELETE,.....
//enable the cors policy
app.use(cors());
//set the json as MIME Type
app.use(bodyparser.json());
//parse the json
app.use(bodyparser.urlencoded({ extended: false }));
//create the get request
app.get("/api/products", function (req, res) {
    db_connection_1["default"]().then(function (conn) {
        var db = conn.db("mern");
        db.collection("products").find().toArray(function (err, array) {
            if (err)
                throw err;
            else {
                res.send(array);
            }
        });
    });
});
//get the product based on id
app.get("/api/products/:id", function (req, res) {
    db_connection_1["default"]().then(function (conn) {
        var db = conn.db("mern");
        try {
            db.collection("products").find({ "_id": new config_1["default"].ObjectId(req.params.id) }).toArray(function (err, array) {
                if (err)
                    throw err;
                else {
                    if (array.length > 0) {
                        res.send(array[0]);
                    }
                    else {
                        res.send({ message: "product not available" });
                    }
                }
            });
        }
        catch (error) {
            res.send({ message: "invalid key" });
        }
    });
});
//port
var port = process.env.PORT || 8088;
app.listen(port, function () {
    console.log("server started successfully !!!");
});
