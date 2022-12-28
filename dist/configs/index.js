"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gerarSimboloDeAcesso = gerarSimboloDeAcesso;
exports.usuarioAutenticacao = usuarioAutenticacao;
var _md = _interopRequireDefault(require("md5"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var secretKey = (0, _md["default"])("bibliotecaBantu");
function gerarSimboloDeAcesso(usuario) {
  var simbolo = _jsonwebtoken["default"].sign(usuario, secretKey, {
    expiresIn: "1800s"
  });
  return simbolo;
}
function usuarioAutenticacao(req, res, next) {
  try {
    var auth = req.headers["user-token"];
    var token = auth;
    if (token == "false") throw {
      err: err,
      errorCode: 401
    };
    _jsonwebtoken["default"].verify(token, secretKey, function (err, user) {
      if (err) throw {
        err: err,
        errorCode: 403
      };
      req.usuario = user;
      next();
    });
  } catch (_ref) {
    var _err = _ref.err;
    var errorCode = _ref.errorCode;
    console.log(_err);
    return res.sendStatus(errorCode);
  }
}