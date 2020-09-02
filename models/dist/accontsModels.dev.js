"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// import mongoose from "mongoose";
var _default = function _default(mongoose) {
  var accontsSchema = mongoose.Schema({
    agencia: {
      type: Number,
      require: true
    },
    conta: {
      type: Number,
      require: true
    },
    name: {
      type: String,
      require: true
    },
    balance: {
      type: Number,
      require: true,
      min: 0
    }
  }); // const accontsModel = mongoose.model('acconsts', accontsSchema, 'acconsts');

  var accontsModel = mongoose.model('acconst', accontsSchema);
  return accontsModel;
}; // export {accontsModel}


exports["default"] = _default;