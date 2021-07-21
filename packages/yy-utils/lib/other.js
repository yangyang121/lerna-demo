"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.y = exports.x = exports.C = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class C {
  constructor() {
    _defineProperty(this, "x", 10);

    _defineProperty(this, "getX", () => this.x);

    _defineProperty(this, "setX", newVal => {
      this.x = newVal;
    });
  }

}

exports.C = C;
let x = new C();
exports.x = x;

let y = _objectSpread({}, {
  some: "value"
});

exports.y = y;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vdGhlci50cyJdLCJuYW1lcyI6WyJDIiwieCIsIm5ld1ZhbCIsInkiLCJzb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsQ0FBTixDQUFRO0FBQUE7QUFBQSwrQkFDRCxFQURDOztBQUFBLGtDQUVOLE1BQU0sS0FBS0MsQ0FGTDs7QUFBQSxrQ0FHTEMsTUFBRCxJQUFvQjtBQUN6QixXQUFLRCxDQUFMLEdBQVNDLE1BQVQ7QUFDRCxLQUxZO0FBQUE7O0FBQUE7OztBQVFSLElBQUlELENBQUMsR0FBRyxJQUFJRCxDQUFKLEVBQVI7OztBQUNBLElBQUlHLENBQUMscUJBQVE7QUFBRUMsRUFBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBUixDQUFMIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEMge1xuICBwcml2YXRlIHggPSAxMFxuICBnZXRYID0gKCkgPT4gdGhpcy54XG4gIHNldFggPSAobmV3VmFsOiBudW1iZXIpID0+IHtcbiAgICB0aGlzLnggPSBuZXdWYWxcbiAgfVxufVxuXG5leHBvcnQgbGV0IHggPSBuZXcgQygpXG5leHBvcnQgbGV0IHkgPSB7IC4uLnsgc29tZTogXCJ2YWx1ZVwiIH0gfVxuIl19