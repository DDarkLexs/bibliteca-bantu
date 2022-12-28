"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _asciiColorLog = _interopRequireDefault(require("ascii-color-log"));
var _authenticacao = _interopRequireDefault(require("../../controllers/authenticacao"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var log = new _asciiColorLog["default"]();
var _default = function _default(app) {
  app.route('/api/usuario/auth').get(_authenticacao["default"].autenticarCliente, _authenticacao["default"].accessGranted);

  // app.route('/api/usuario/registrar')
  // .post(authObject.registrar)

  app.route('/api/usuario/inscrever').post(_authenticacao["default"].registrar);
};
exports["default"] = _default;