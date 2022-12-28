"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _asciiColorLog = _interopRequireDefault(require("ascii-color-log"));
var _traducao = _interopRequireDefault(require("../../controllers/traducao"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var log = new _asciiColorLog["default"]();
var _default = function _default(app) {
  app.route('/api/translate/inserirTodo').post(function (req, res, next) {
    console.log('Inserindo de portugues para chokwe e umbuntu!');
    next();
  }, _traducao["default"].insertAll);
  app.route('/api/translate/universal').get(function (req, res, next) {
    //  console.log('universal para portugues, umbundu e chokwe')
    next();
  }, _traducao["default"].universal);
  app.route('/api/translate/portugueseToUmbunduAndChokwe').get(function (req, res, next) {
    console.log('portugues para umbundu e chokwe');
    next();
  }, _traducao["default"].portugueseToUmbunduAndChokwe);
  app.route('/api/translate/portugueseToUmbundu').get(function (req, res, next) {
    console.log('portugues para umbundu');
    next();
  }, _traducao["default"].portugueseToUmbundu).post(function (req, res, next) {
    console.log("inserir de portuguese para Umbundu");
    next();
  }, _traducao["default"].insertportugueseToUmbundu);
  app.route('/api/translate/portugueseToChokwe').get(function (req, res, next) {
    console.log('portugues para Chokwe');
    next();
  }, _traducao["default"].portugueseToChokwe).post(function (req, res, next) {
    console.log("inserir de portuguese para Chokwe");
    next();
  }, _traducao["default"].insertportugueseTochokwe);
};
exports["default"] = _default;