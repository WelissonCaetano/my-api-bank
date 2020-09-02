"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _accontsModels = _interopRequireDefault(require("./accontsModels.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var db = {}; // db.url = 'mongodb://localhost:27017/AcconstDataBase';

exports.db = db;
db.url = 'mongodb+srv://root:root@cluster0.kr0op.mongodb.net/AcconstDataBase?retryWrites=true&w=majority';
db.mongoose = _mongoose["default"];
db.acconts = (0, _accontsModels["default"])(_mongoose["default"]);