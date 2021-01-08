"use strict";
//maintain "client" and "ObjetId"
exports.__esModule = true;
var mongodb = require("mongodb");
var mernClient = mongodb.MongoClient;
var ObjectId = mongodb.ObjectId;
var obj = {
    "mernClient": mernClient,
    "ObjectId": ObjectId
};
exports["default"] = obj;
