"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _traducao = _interopRequireDefault(require("./traducao"));
var _services = _interopRequireDefault(require("./services"));
var _authentication = _interopRequireDefault(require("./authentication"));
var _usuario = _interopRequireDefault(require("./usuario"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = function _default(app) {
  (0, _traducao["default"])(app);
  (0, _services["default"])(app);
  (0, _usuario["default"])(app);
  (0, _authentication["default"])(app);
};
exports["default"] = _default;