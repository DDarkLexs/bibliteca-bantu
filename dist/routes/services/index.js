"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _asciiColorLog = _interopRequireDefault(require("ascii-color-log"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var log = new _asciiColorLog["default"]();
var _default = function _default(app) {
  app.route('/api/calendar').get(function (req, res, next) {
    var calendar = new Date();
    res.json(calendar);
  });
};
exports["default"] = _default;