"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _asciiColorLog = _interopRequireDefault(require("ascii-color-log"));
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _path = _interopRequireDefault(require("path"));
var _models = _interopRequireDefault(require("../../models"));
var _md = _interopRequireDefault(require("md5"));
var _data = require("../../../enviroment/data.json");
var _newData = require("../../../enviroment/newData.json");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var log = new _asciiColorLog["default"]();
var _default = {
  universal: function universal(req, res, next) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _req$query, key, palavra, para, query;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$query = req.query, key = _req$query.key, palavra = _req$query.palavra, para = _req$query.para;
            _context.next = 4;
            return _models["default"].raw("\n            SELECT\n            --portugues.palavra AS portugues, \n            -- umbundu.palavra AS umbundu,\n            -- chokwe.palavra AS chokwe,\n            ".concat(para, ".palavra AS significado,\n            ").concat(key, ".palavra AS ").concat(key, "\n            FROM traducao t\n            INNER JOIN portugues ON portugues.id_pt = t.id_pt\n            INNER JOIN umbundu ON umbundu.id_umbundu = t.id_umbundu\n            INNER JOIN chokwe ON chokwe.id_chokwe = t.id_chokwe\n            WHERE ").concat(key, ".palavra = \"").concat(palavra, "\";"));
          case 4:
            query = _context.sent[0][0];
            if (query) {
              _context.next = 7;
              break;
            }
            throw "N\xE3o existe este significado \"".concat(palavra, "\" na base de dados");
          case 7:
            // console.log(query)

            res.json({
              response: true,
              query: query
            });
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.sendStatus(400);

            // console.log(error)
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }))();
  },
  portugueseToChokwe: function portugueseToChokwe(req, res, next) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var translation;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _models["default"].raw("\n            SELECT \n            pt.palavra as portugues, \n            un.palavra as chokwe\n            FROM portugues pt\n            INNER join traducao t ON pt.id_pt = t.id_pt\n            INNER join chokwe un ON un.id_chokwe = t.id_chokwe\n            where pt.palavra = '".concat(req.query.palavra, "';\n            "));
          case 3:
            translation = _context2.sent[0][0];
            console.log(translation);
            res.json({
              response: true,
              translation: translation
            });
            _context2.next = 11;
            break;
          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            res.sendStatus(400);
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 8]]);
    }))();
  },
  insertportugueseTochokwe: function insertportugueseTochokwe(req, res, next) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _req$query2, portugues, chokwe, id_pt, id_chokwe, id_umbundu, id_traducao;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$query2 = req.query, portugues = _req$query2.portugues, chokwe = _req$query2.chokwe;
            _context3.next = 4;
            return (0, _models["default"])('portugues').insert({
              palavra: portugues,
              codigo: (0, _md["default"])(portugues)
            });
          case 4:
            id_pt = _context3.sent;
            _context3.next = 7;
            return (0, _models["default"])('chokwe').insert({
              palavra: chokwe,
              codigo: (0, _md["default"])(chokwe)
            });
          case 7:
            id_chokwe = _context3.sent;
            _context3.next = 10;
            return (0, _models["default"])('umbundu').insert({
              palavra: null,
              codigo: (0, _md["default"])('nulo')
            });
          case 10:
            id_umbundu = _context3.sent;
            _context3.next = 13;
            return (0, _models["default"])('traducao').insert({
              significado: '',
              descricao: '',
              id_pt: id_pt[0],
              id_umbundu: id_umbundu[0],
              id_chokwe: id_chokwe[0]
            });
          case 13:
            id_traducao = _context3.sent;
            res.json({
              response: true,
              query: {
                id_chokwe: id_chokwe,
                id_umbundu: id_umbundu,
                id_pt: id_pt
              }
            });
            _context3.next = 20;
            break;
          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](0);
            res.sendStatus(400);
          case 20:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 17]]);
    }))();
  },
  portugueseToUmbundu: function portugueseToUmbundu(req, res, next) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var translation;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _models["default"].raw("\n            SELECT \n            pt.palavra AS portugues, \n            un.palavra AS umbundu\n            FROM portugues pt\n            INNER join traducao t ON pt.id_pt = t.id_pt\n            INNER join umbundu un ON un.id_umbundu = t.id_umbundu\n            WHERE pt.palavra = '".concat(req.query.palavra, "';\n            "));
          case 3:
            translation = _context4.sent[0][0];
            console.log(translation);
            res.json({
              response: true,
              translation: translation
            });
            _context4.next = 11;
            break;
          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            res.sendStatus(400);
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 8]]);
    }))();
  },
  portugueseToUmbunduAndChokwe: function portugueseToUmbunduAndChokwe(req, res, next) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var translation;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _models["default"].raw("\n            SELECT \n            pt.palavra AS portugues, \n            un.palavra AS umbundu\n            FROM portugues pt\n            INNER join traducao t ON pt.id_pt = t.id_pt\n            INNER join umbundu un ON un.id_umbundu = t.id_umbundu\n            WHERE pt.palavra = '".concat(req.query.palavra, "';\n            "));
          case 3:
            translation = _context5.sent[0][0];
            console.log(translation);
            res.json({
              response: true,
              translation: translation
            });
            _context5.next = 11;
            break;
          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            res.sendStatus(400);
          case 11:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 8]]);
    }))();
  },
  insertportugueseToUmbundu: function insertportugueseToUmbundu(req, res, next) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var _req$query3, portugues, umbundu, id_pt, id_umbundu, id_chokwe, id_traducao;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _req$query3 = req.query, portugues = _req$query3.portugues, umbundu = _req$query3.umbundu;
            _context6.next = 4;
            return (0, _models["default"])('portugues').insert({
              palavra: portugues,
              codigo: (0, _md["default"])(portugues)
            });
          case 4:
            id_pt = _context6.sent;
            _context6.next = 7;
            return (0, _models["default"])('umbundu').insert({
              palavra: umbundu,
              codigo: (0, _md["default"])(umbundu)
            });
          case 7:
            id_umbundu = _context6.sent;
            _context6.next = 10;
            return (0, _models["default"])('chokwe').insert({
              palavra: null,
              codigo: (0, _md["default"])('nulo')
            });
          case 10:
            id_chokwe = _context6.sent;
            _context6.next = 13;
            return (0, _models["default"])('traducao').insert({
              significado: '',
              descricao: '',
              id_pt: id_pt[0],
              id_umbundu: id_umbundu[0],
              id_chokwe: id_chokwe[0]
            });
          case 13:
            id_traducao = _context6.sent;
            res.json({
              response: true,
              query: {
                id_chokwe: id_chokwe,
                id_umbundu: id_umbundu,
                id_pt: id_pt
              }
            });
            _context6.next = 20;
            break;
          case 17:
            _context6.prev = 17;
            _context6.t0 = _context6["catch"](0);
            res.sendStatus(400);
          case 20:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 17]]);
    }))();
  },
  insertAll: function insertAll(req, res, next) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var i, _ptAndchokweAndumbund, chokwe, portugues, umbundu, id_pt, id_chokwe, id_umbundu, id_traducao;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            i = 0;
          case 2:
            if (!(i < _newData.ptAndchokweAndumbundu.length)) {
              _context7.next = 20;
              break;
            }
            // teste
            _ptAndchokweAndumbund = _newData.ptAndchokweAndumbundu[i], chokwe = _ptAndchokweAndumbund.chokwe, portugues = _ptAndchokweAndumbund.portugues, umbundu = _ptAndchokweAndumbund.umbundu; // teste
            // const {  portugues , chokwe } = req.query
            _context7.next = 6;
            return (0, _models["default"])('portugues').insert({
              palavra: portugues,
              codigo: (0, _md["default"])(portugues)
            });
          case 6:
            id_pt = _context7.sent;
            _context7.next = 9;
            return (0, _models["default"])('chokwe').insert({
              palavra: chokwe,
              codigo: (0, _md["default"])(chokwe)
            });
          case 9:
            id_chokwe = _context7.sent;
            _context7.next = 12;
            return (0, _models["default"])('umbundu').insert({
              palavra: umbundu,
              codigo: (0, _md["default"])(umbundu)
            });
          case 12:
            id_umbundu = _context7.sent;
            _context7.next = 15;
            return (0, _models["default"])('traducao').insert({
              significado: '',
              descricao: '',
              id_pt: id_pt[0],
              id_umbundu: id_umbundu[0],
              id_chokwe: id_chokwe[0]
            });
          case 15:
            id_traducao = _context7.sent;
            console.log("".concat(id_traducao, " -> ").concat(portugues, " = ").concat(chokwe, " = ").concat(umbundu, " [sucesso]"));
          case 17:
            i++;
            _context7.next = 2;
            break;
          case 20:
            res.json({
              response: true /* query: {id_chokwe,id_umbundu,id_pt } */
            });
            _context7.next = 26;
            break;
          case 23:
            _context7.prev = 23;
            _context7.t0 = _context7["catch"](0);
            res.sendStatus(400);
          case 26:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 23]]);
    }))();
  }
};
exports["default"] = _default;