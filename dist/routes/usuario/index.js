"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _asciiColorLog = _interopRequireDefault(require("ascii-color-log"));
var _configs = require("../../configs");
var _usuario = require("../../controllers/usuario");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var log = new _asciiColorLog["default"]();
var _default = function _default(app) {
  app.route('/api/usuario').get(_configs.usuarioAutenticacao, _usuario.getUsuarioData);
};
exports["default"] = _default;