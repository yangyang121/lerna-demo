"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function add() {
  let a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  let b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return a * 2 + b * 3;
}

var _default = add;
exports.default = _default;