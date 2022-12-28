"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  "use strict";

  var e = {
      5746: function _(e, t, a) {
        var r = a(144),
          n = function n() {
            var e = this,
              t = e._self._c;
            return t("router-view");
          },
          o = [],
          i = a(757),
          s = a(6190),
          l = a(4324),
          u = function u() {
            var e = this,
              t = e._self._c;
            return t(i.Z, {
              attrs: {
                value: e.route,
                dark: "",
                shift: "",
                app: ""
              }
            }, e._l(e.BottomRoute, function (_ref, o) {
              var a = _ref.label,
                r = _ref.icon,
                n = _ref.name;
              return t(s.Z, {
                key: o,
                attrs: {
                  to: {
                    name: n
                  }
                }
              }, [t("span", [e._v(e._s(a))]), t(l.Z, [e._v(e._s(r))])], 1);
            }), 1);
          },
          c = [],
          d = JSON.parse('[{"label":"Inicio","icon":"mdi-home","name":"home"},{"label":"Dicionário","icon":"mdi-book-open-variant","name":"dicionario"},{"label":"Biblioteca","icon":"mdi-multimedia","name":"biblioteca"},{"label":"Aulas","icon":"mdi-google-classroom","name":"aulas"}]'),
          m = {
            name: "App",
            data: function data() {
              return {
                BottomRoute: d,
                route: 0,
                absolute: !0,
                grow: !0,
                horizontal: !0
              };
            }
          },
          p = m,
          h = a(1001),
          f = (0, h.Z)(p, u, c, !1, null, "2d9500b8", null),
          v = f.exports,
          g = {
            name: "App",
            components: {
              BottomNav: v
            },
            data: function data() {
              return {};
            }
          },
          b = g,
          Z = (0, h.Z)(b, n, o, !1, null, null, null),
          w = Z.exports,
          y = a(5205);
        (0, y.z)("/service-worker.js", {
          ready: function ready() {
            console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB");
          },
          registered: function registered() {
            console.log("Service worker has been registered.");
          },
          cached: function cached() {
            console.log("Content has been cached for offline use.");
          },
          updatefound: function updatefound() {
            console.log("New content is downloading.");
          },
          updated: function updated() {
            console.log("New content is available; please refresh.");
          },
          offline: function offline() {
            console.log("No internet connection found. App is running in offline mode.");
          },
          error: function error(e) {
            console.error("Error during service worker registration:", e);
          }
        });
        var _ = a(8345),
          k = a(998),
          x = a(8492),
          C = a(3059),
          $ = a(3687),
          A = function A() {
            var e = this,
              t = e._self._c;
            return t(k.Z, {
              attrs: {
                app: ""
              }
            }, [t(x.Z, {
              attrs: {
                app: "",
                color: "primary",
                dark: "",
                dense: ""
              }
            }, [t("div", {
              staticClass: "d-flex align-center text-h5"
            }, [e._v(" Bibloteca Bantu ")]), t($.Z), e.isUserLoggedIn() ? t(s.Z, {
              attrs: {
                icon: ""
              },
              on: {
                click: e.logOut
              }
            }, [t(l.Z, [e._v("mdi-logout ")])], 1) : t(s.Z, {
              attrs: {
                to: {
                  name: "entrada"
                },
                icon: ""
              }
            }, [t(l.Z, [e._v(" mdi-login ")])], 1), t(s.Z, {
              attrs: {
                to: {
                  name: "perfil"
                },
                icon: ""
              }
            }, [t(l.Z, [e._v("mdi-account ")])], 1)], 1), t(C.Z, [t("router-view")], 1), t("BottomNav")], 1);
          },
          O = [];
        a(7658);
        var T = "AuthTokenClient";
        function P(e, t, a) {
          var r;
          if (a) {
            var n = new Date();
            n.setTime(n.getTime() + 24 * a * 60 * 60 * 1e3), r = "; expires=" + n.toGMTString();
          } else r = "";
          document.cookie = e + "=" + t + r + "; path=/";
        }
        function I(e) {
          if (document.cookie.length > 0) {
            var t = document.cookie.indexOf(e + "=");
            if (-1 != t) {
              t = t + e.length + 1;
              var a = document.cookie.indexOf(";", t);
              return -1 == a && (a = document.cookie.length), unescape(document.cookie.substring(t, a));
            }
          }
          return "";
        }
        function D(e, t, a) {
          I(e) && (document.cookie = e + "=" + (t ? ";path=" + t : "") + (a ? ";domain=" + a : "") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT");
        }
        function M() {
          return Boolean(I(T));
        }
        var j = {
            name: "App",
            components: {
              BottomNav: v
            },
            methods: {
              isUserLoggedIn: M,
              logOut: function logOut() {
                D(T, "/"), this.$router.push({
                  name: "entrada"
                });
              }
            },
            data: function data() {
              return {};
            }
          },
          q = j,
          S = (0, h.Z)(q, A, O, !1, null, null, null),
          R = S.exports,
          N = a(266),
          L = a(2118),
          B = a(1713),
          E = function E() {
            var e = this,
              t = e._self._c;
            return t(L.Z, [t(B.Z, {
              attrs: {
                "g-5": ""
              }
            }, [t(N.Z, {
              attrs: {
                cols: "12",
                sm: "12"
              }
            }, [t("div", {
              staticClass: "ma-4 text-center"
            }, [t("p", {
              staticClass: "text-h6"
            }, [t(l.Z, [e._v("mdi-calendar")]), e._v(" " + e._s(e.calendario_em_pt) + " ")], 1), t("p", {
              staticClass: "font-weight-medium"
            }, [e._v(" " + e._s(e.dica) + " ")])])]), t(N.Z, {
              attrs: {
                cols: "12",
                sm: "12"
              }
            }, [t("h4", [e._v(" Inovações")])]), t(N.Z, {
              attrs: {
                cols: "12",
                sm: "12"
              }
            }, [t("h4", [e._v("Lançamentos")])]), t(N.Z, {
              attrs: {
                cols: "12",
                sm: "12"
              }
            }, [t("h4", [e._v("Link úteis")])])], 1)], 1);
          },
          z = [],
          U = a(629),
          G = {
            name: "Home",
            components: {},
            data: function data() {
              return {
                width: "400",
                height: "150"
              };
            },
            computed: _objectSpread({}, (0, U.Se)({
              calendario_em_pt: "home/calendarioEmPortugues",
              dica: "home/dicaDoDia"
            })),
            methods: _objectSpread({}, (0, U.nv)({
              data: "home/getDateFromServer"
            })),
            beforeMount: function beforeMount() {
              var _this = this;
              return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _this.data();
                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }))();
            }
          },
          F = G,
          J = (0, h.Z)(F, E, z, !1, null, null, null),
          V = J.exports,
          W = a(9582),
          H = a(4886),
          K = a(5125),
          Q = a(381),
          X = a(2648),
          Y = function Y() {
            var e = this,
              t = e._self._c;
            return t(K.Z, {
              ref: "form",
              attrs: {
                "lazy-validation": ""
              },
              on: {
                submit: function submit(t) {
                  return t.preventDefault(), e.procedimento.apply(null, arguments);
                }
              },
              model: {
                value: e.valid,
                callback: function callback(t) {
                  e.valid = t;
                },
                expression: "valid"
              }
            }, [t(W.Z, {
              attrs: {
                outlined: ""
              }
            }, [t(H.ZB, [t(B.Z, {
              attrs: {
                "g-5": ""
              }
            }, [t(N.Z, {
              attrs: {
                cols: "12",
                sm: "6"
              }
            }, [t(Q.Z, {
              attrs: {
                outlined: "",
                required: "",
                disabled: e.loading,
                loading: e.loading,
                "menu-props": "auto",
                "single-line": "",
                rules: [function (e) {
                  return !!e || "informe o idioma";
                }],
                items: e.linguas,
                "item-text": "nome",
                "item-value": "lingua",
                label: "Traduzir de"
              },
              model: {
                value: e.de.lingua,
                callback: function callback(t) {
                  e.$set(e.de, "lingua", t);
                },
                expression: "de.lingua"
              }
            }), t(X.Z, {
              attrs: {
                disabled: e.loading,
                loading: e.loading,
                rules: [function (e) {
                  return !!e || "informe a palavra";
                }],
                required: "",
                outlined: "",
                placeholder: "Digite a palavra",
                counter: "",
                autoGrow: !0,
                clearable: ""
              },
              on: {
                input: function input(t) {
                  e.para.palavra = "escrevendo...";
                },
                focus: function focus(t) {
                  e.para.palavra = "...";
                },
                blur: function blur(t) {
                  e.para.palavra = "";
                },
                change: function change(t) {
                  return e.de.palavra = t;
                }
              }
            })], 1), t(N.Z, {
              attrs: {
                cols: "12",
                sm: "6"
              }
            }, [t(Q.Z, {
              attrs: {
                outlined: "",
                required: "",
                disabled: e.loading,
                loading: e.loading,
                "menu-props": "auto",
                "single-line": "",
                rules: [function (e) {
                  return !!e || "informe a idioma";
                }],
                items: e.linguas,
                "item-text": "nome",
                "item-value": "lingua",
                label: "Traduzir para"
              },
              model: {
                value: e.para.lingua,
                callback: function callback(t) {
                  e.$set(e.para, "lingua", t);
                },
                expression: "para.lingua"
              }
            }), t(X.Z, {
              attrs: {
                disabled: e.loading,
                loading: e.loading,
                outlined: "",
                placeholder: "tradução",
                readonly: "",
                autoGrow: !0
              },
              model: {
                value: e.para.palavra,
                callback: function callback(t) {
                  e.$set(e.para, "palavra", t);
                },
                expression: "para.palavra"
              }
            })], 1)], 1)], 1), t(H.h7, [t(s.Z, {
              attrs: {
                disabled: e.loading,
                loading: e.loading,
                type: "submit",
                color: "success"
              }
            }, [e._v("Traduzir")]), t($.Z), t(s.Z, {
              staticClass: "white--text",
              attrs: {
                disabled: e.loading,
                loading: e.loading,
                color: "red"
              },
              on: {
                click: function click(t) {
                  return e.$refs.form.reset();
                }
              }
            }, [e._v(" " + e._s("Limpar") + " ")])], 1)], 1)], 1);
          },
          ee = [],
          te = {
            data: function data() {
              return {
                valid: !0
              };
            },
            watch: {
              "para.lingua": {
                handler: function handler(e, t) {
                  this.para.palavra && this.procedimento();
                },
                immediate: !1
              },
              "de.palavra": {
                handler: function handler(e, t) {},
                immediate: !1
              }
            },
            computed: _objectSpread({
              de: {
                get: function get() {
                  return this.$store.state.dicionario.primario;
                },
                set: function set(e) {
                  this.$store.state.dicionario.primario = e;
                }
              },
              para: {
                get: function get() {
                  return this.$store.state.dicionario.secondario;
                },
                set: function set(e) {
                  this.$store.state.dicionario.secondario = e;
                }
              }
            }, (0, U.Se)({
              disableLang: "dicionario/disabilitarLinguaSelec",
              linguas: "dicionario/linguas",
              loading: "dicionario/l"
            })),
            methods: _objectSpread({
              procedimento: function procedimento() {
                var _this2 = this;
                return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                  var _e2;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return _this2.$refs.form.validate();
                      case 3:
                        _e2 = _context2.sent;
                        if (_e2) {
                          _context2.next = 6;
                          break;
                        }
                        throw "preencha campo em falta";
                      case 6:
                        _context2.next = 8;
                        return _this2.translate();
                      case 8:
                        _context2.next = 13;
                        break;
                      case 10:
                        _context2.prev = 10;
                        _context2.t0 = _context2["catch"](0);
                        _this2.para.palavra = _context2.t0;
                      case 13:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2, null, [[0, 10]]);
                }))();
              }
            }, (0, U.nv)({
              translate: "dicionario/traduzir"
            })),
            mounted: function mounted() {},
            beforeDestroy: function beforeDestroy() {
              this.$refs.form.reset();
            }
          },
          ae = te,
          re = (0, h.Z)(ae, Y, ee, !1, null, null, null),
          ne = re.exports,
          oe = a(3423),
          ie = a(5495),
          se = a(4525),
          le = a(6098),
          ue = function ue() {
            var e = this,
              t = e._self._c;
            return t(L.Z, [t("div", {}, [t(W.Z, {
              staticClass: "mx-auto ma-auto text-center elevation-0",
              attrs: {
                "max-width": "434",
                tile: ""
              }
            }, [t(ie.Z, {
              attrs: {
                height: "100%",
                src: "https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
              }
            }, [t(B.Z, {
              staticClass: "fill-height",
              attrs: {
                align: "end"
              }
            }, [t(N.Z, {
              staticClass: "pa-0",
              attrs: {
                cols: "12"
              }
            }, [t(oe.Z, {
              staticClass: "profile",
              attrs: {
                color: "grey",
                size: "164",
                tile: ""
              }
            }, [t(ie.Z, {
              attrs: {
                src: a(413)
              }
            })], 1)], 1), t(N.Z, {
              staticClass: "py-0"
            }, [t(se.Z, {
              attrs: {
                color: "rgba(0, 0, 0, .4)"
              }
            }, [t(le.km, [t(le.V9, {
              staticClass: "text-h5"
            }, [e._v(" " + e._s(e.usuario.nome) + " ")]), t(le.oZ, [e._v(" " + e._s(e.usuario.email) + " ")])], 1)], 1)], 1)], 1)], 1)], 1)], 1)]);
          },
          ce = [],
          de = {
            data: function data() {
              return {};
            },
            methods: _objectSpread({}, (0, U.nv)({
              get: "usuario/getUsuarioData"
            })),
            computed: _objectSpread({}, (0, U.Se)({
              usuario: "usuario/usuario"
            })),
            beforeMount: function beforeMount() {
              var _this3 = this;
              return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return _this3.get();
                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              }))();
            }
          },
          me = de,
          pe = (0, h.Z)(me, ue, ce, !1, null, null, null),
          he = pe.exports,
          fe = function fe() {
            var e = this,
              t = e._self._c;
            return t(L.Z, [t("h1", [e._v("Aula")]), e._l(e.linguagem, function (_ref2, n) {
              var a = _ref2.nome,
                r = _ref2.id;
              return t("div", {
                key: n
              }, [t("router-link", {
                staticClass: "text-decoration-none",
                attrs: {
                  to: "#"
                }
              }, [e._v(" " + e._s(r) + " - " + e._s(a) + " ")])], 1);
            })], 2);
          },
          ve = [],
          ge = JSON.parse('[{"id":1,"nome":"português","lingua":"portugues"},{"id":2,"nome":"chokwe","lingua":"chokwe"},{"id":3,"nome":"umbundu","lingua":"umbundu"}]'),
          be = {
            data: function data() {
              return {
                linguagem: ge
              };
            }
          },
          Ze = be,
          we = (0, h.Z)(Ze, fe, ve, !1, null, null, null),
          ye = we.exports,
          _e = a(626),
          ke = a(4468),
          xe = function xe() {
            var e = this,
              t = e._self._c;
            return t("div", [t(ke.Z, {
              attrs: {
                centered: ""
              },
              model: {
                value: e.tab,
                callback: function callback(t) {
                  e.tab = t;
                },
                expression: "tab"
              }
            }, e._l(e.tabs, function (_ref3, n) {
              var a = _ref3.name,
                r = _ref3.label;
              return t(_e.Z, {
                key: r + " " + n,
                attrs: {
                  to: {
                    name: a
                  }
                }
              }, [e._v(" " + e._s(r) + " ")]);
            }), 1), t(L.Z, [t("router-view")], 1)], 1);
          },
          Ce = [],
          $e = {
            data: function data() {
              return {
                tab: null,
                tabs: [{
                  label: "Livros",
                  name: "livros"
                }, {
                  label: "Videos",
                  name: "videos"
                }, {
                  label: "Audios",
                  name: "audios"
                }, {
                  label: "Descarregados",
                  name: "descarregados"
                }]
              };
            }
          },
          Ae = $e,
          Oe = (0, h.Z)(Ae, xe, Ce, !1, null, null, null),
          Te = Oe.exports,
          Pe = a(8271),
          Ie = function Ie() {
            var e = this,
              t = e._self._c;
            return t(k.Z, [t(C.Z, {
              staticClass: "d-flex align-center justify-center"
            }, [t("router-view")], 1), t(Pe.Z, {
              attrs: {
                dark: "",
                dense: "",
                padless: "",
                app: ""
              }
            }, [t(W.Z, {
              staticClass: "flex",
              attrs: {
                flat: "",
                tile: ""
              }
            }, [t(H.ZB, {
              staticClass: "py-0 white--text text-center"
            }, [t("strong", [e._v("Todos os direitos reservado")])])], 1)], 1)], 1);
          },
          De = [],
          Me = {},
          je = (0, h.Z)(Me, Ie, De, !1, null, null, null),
          qe = je.exports,
          Se = a(7808),
          Re = function Re() {
            var _attrs;
            var e = this,
              t = e._self._c;
            return t("div", {
              staticClass: "d-flex justify-center"
            }, [t("form", {
              attrs: {
                enctype: "multipart/form-data"
              },
              on: {
                submit: function submit(t) {
                  return t.preventDefault(), e.verificar.apply(null, arguments);
                }
              }
            }, [t(W.Z, {
              staticClass: "elevation-0 mb-10 pa-4",
              attrs: {
                "max-width": "350"
              }
            }, [e.$vuetify.theme.dark ? t(ie.Z, {
              staticClass: "ma-auto",
              attrs: {
                src: a(9069),
                width: "200"
              }
            }) : t(ie.Z, {
              staticClass: "ma-auto",
              attrs: {
                src: a(6252),
                width: "200"
              }
            }), t("div", {
              staticClass: "text-h4 text-center"
            }, [e._v(" Entrar ")]), t(H.ZB, [t(B.Z, {
              attrs: {
                "no-gutters": ""
              }
            }, [t(N.Z, {
              attrs: {
                cols: "12",
                sm: "12"
              }
            }, [t(Se.Z, {
              attrs: {
                type: "text",
                required: "",
                rules: e.nomeRegra,
                label: "usuário",
                "prepend-icon": "mdi-account",
                hint: "Informe o usuário"
              },
              model: {
                value: e.$store.state.auth.usuario.nome,
                callback: function callback(t) {
                  e.$set(e.$store.state.auth.usuario, "nome", t);
                },
                expression: "$store.state.auth.usuario.nome"
              }
            })], 1), t(N.Z, {
              attrs: {
                cols: "12",
                sm: "12"
              }
            }, [t(Se.Z, {
              attrs: (_attrs = {
                required: "",
                type: "password",
                rules: e.passwordRegra,
                "append-icon": e.show1 ? "mdi-eye" : "mdi-eye-off"
              }, _defineProperty(_attrs, "type", e.show1 ? "text" : "password"), _defineProperty(_attrs, "label", "Palavra-passe"), _defineProperty(_attrs, "prepend-icon", "mdi-lock"), _defineProperty(_attrs, "hint", "Informe a Palavra-passe"), _attrs),
              on: {
                "click:append": function clickAppend(t) {
                  e.show1 = !e.show1;
                }
              },
              model: {
                value: e.$store.state.auth.usuario.senha,
                callback: function callback(t) {
                  e.$set(e.$store.state.auth.usuario, "senha", t);
                },
                expression: "$store.state.auth.usuario.senha"
              }
            })], 1)], 1)], 1), t(H.h7, [t($.Z), t(s.Z, {
              attrs: {
                color: "primary",
                tile: "",
                type: "submit"
              }
            }, [e._v(" entrar ")]), t($.Z)], 1), t("div", {
              staticClass: "text-center mt-3"
            }, [t("router-link", {
              staticClass: "text-decoration-none",
              attrs: {
                to: ""
              }
            }, [e._v(" Esqueceu a palavra-passe ")])], 1)], 1), t("div", {
              staticClass: "text-center"
            }, [e._v(" Ainda não tens conta? "), t("router-link", {
              staticClass: "text-decoration-none",
              attrs: {
                to: {
                  name: "registrar"
                }
              }
            }, [e._v(" crie uma ")])], 1)], 1)]);
          },
          Ne = [],
          Le = a(9669),
          Be = a.n(Le);
        var Ee = "http://192.168.2.2:3030/api",
          ze = Be().create({
            baseURL: Ee,
            headers: {
              "User-token": I(T) || !1
            }
          });
        r.ZP.prototype.$http = ze;
        var Ue = ze,
          Ge = {
            data: function data() {
              return {
                loading: !1,
                show1: !1,
                valid: !0,
                nomeRegra: [function (e) {
                  return !!e || "Informe o nome de usuário!";
                }],
                passwordRegra: [function (e) {
                  return !!e || "Informe a palavra-passe do usuário!";
                }]
              };
            },
            methods: _objectSpread(_objectSpread({}, (0, U.nv)({
              autenticar: "auth/autenticarClient"
            })), {}, {
              verificar: function verificar() {
                var _this4 = this;
                return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.prev = 0;
                        _context4.next = 3;
                        return _this4.autenticar();
                      case 3:
                        _this4.$router.push({
                          name: "home"
                        });
                        _context4.next = 9;
                        break;
                      case 6:
                        _context4.prev = 6;
                        _context4.t0 = _context4["catch"](0);
                        alert(_context4.t0);
                      case 9:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4, null, [[0, 6]]);
                }))();
              }
            }),
            mounted: function mounted() {}
          },
          Fe = Ge,
          Je = (0, h.Z)(Fe, Re, Ne, !1, null, "85019d06", null),
          Ve = Je.exports,
          We = function We() {
            var _attrs2, _attrs3;
            var e = this,
              t = e._self._c;
            return t("div", {
              staticClass: "d-flex justify-center"
            }, [t("form", {
              attrs: {
                enctype: "text/plain"
              },
              on: {
                submit: function submit(t) {
                  return t.preventDefault(), e.registrar.apply(null, arguments);
                }
              }
            }, [t(W.Z, {
              staticClass: "elevation-0 mb-10 pa-4",
              attrs: {
                "max-width": "350"
              }
            }, [e.$vuetify.theme.dark ? t(ie.Z, {
              staticClass: "ma-auto",
              attrs: {
                src: a(9069),
                width: "200"
              }
            }) : t(ie.Z, {
              staticClass: "ma-auto",
              attrs: {
                src: a(6252),
                width: "200"
              }
            }), t("div", {
              staticClass: "text-h4 text-center"
            }, [e._v(" Criar Conta ")]), t(H.ZB, [t(B.Z, {
              attrs: {
                "no-gutters": ""
              }
            }, [t(N.Z, {
              attrs: {
                cols: "12",
                sm: "12"
              }
            }, [t(Se.Z, {
              attrs: {
                type: "text",
                label: "Nome completo",
                required: "",
                "prepend-icon": "mdi-account"
              },
              model: {
                value: e.$store.state.auth.inscrever.nome,
                callback: function callback(t) {
                  e.$set(e.$store.state.auth.inscrever, "nome", t);
                },
                expression: "$store.state.auth.inscrever.nome"
              }
            })], 1), t(N.Z, {
              attrs: {
                cols: "12",
                sm: "12"
              }
            }, [t(Se.Z, {
              attrs: {
                type: "tel",
                required: "",
                label: "Telefone",
                "prepend-icon": "mdi-phone"
              },
              model: {
                value: e.$store.state.auth.inscrever.telefone,
                callback: function callback(t) {
                  e.$set(e.$store.state.auth.inscrever, "telefone", t);
                },
                expression: "$store.state.auth.inscrever.telefone"
              }
            })], 1), t(N.Z, {
              attrs: {
                cols: "12",
                sm: "12"
              }
            }, [t(Se.Z, {
              attrs: {
                type: "email",
                label: "E-mail",
                "prepend-icon": "mdi-email"
              },
              model: {
                value: e.$store.state.auth.inscrever.email,
                callback: function callback(t) {
                  e.$set(e.$store.state.auth.inscrever, "email", t);
                },
                expression: "$store.state.auth.inscrever.email"
              }
            })], 1), t(N.Z, {
              attrs: {
                cols: "12",
                sm: "12"
              }
            }, [t(Se.Z, {
              attrs: (_attrs2 = {
                type: "password",
                rules: e.passwordRegra,
                "append-icon": e.show1 ? "mdi-eye" : "mdi-eye-off"
              }, _defineProperty(_attrs2, "type", e.show1 ? "text" : "password"), _defineProperty(_attrs2, "label", "Palavra-passe"), _defineProperty(_attrs2, "prepend-icon", "mdi-lock"), _attrs2),
              on: {
                "click:append": function clickAppend(t) {
                  e.show1 = !e.show1;
                }
              },
              model: {
                value: e.$store.state.auth.inscrever.senha,
                callback: function callback(t) {
                  e.$set(e.$store.state.auth.inscrever, "senha", t);
                },
                expression: "$store.state.auth.inscrever.senha"
              }
            })], 1), t(N.Z, {
              attrs: {
                cols: "12",
                sm: "12"
              }
            }, [t(Se.Z, {
              attrs: (_attrs3 = {
                label: "Reeconfirmar palavra-passe",
                type: "password",
                rules: e.passwordRegra2,
                "append-icon": e.show2 ? "mdi-eye" : "mdi-eye-off"
              }, _defineProperty(_attrs3, "type", e.show2 ? "text" : "password"), _defineProperty(_attrs3, "prepend-icon", "mdi-lock"), _attrs3),
              on: {
                "click:append": function clickAppend(t) {
                  e.show2 = !e.show2;
                }
              }
            })], 1)], 1)], 1), t(H.h7, [t($.Z), t(s.Z, {
              attrs: {
                color: "primary",
                tile: "",
                type: "submit"
              }
            }, [e._v(" Inscrever-se ")]), t($.Z)], 1)], 1), t("div", {
              staticClass: "text-center mb-4"
            }, [e._v(" já tens uma conta? "), t("router-link", {
              staticClass: "text-decoration-none",
              attrs: {
                to: {
                  name: "entrada"
                }
              }
            }, [e._v(" entrar ")])], 1)], 1)]);
          },
          He = [],
          Ke = {
            data: function data() {
              var _this5 = this;
              return {
                loading: !1,
                show1: !1,
                show2: !1,
                valid: !0,
                nomeRegra: [function (e) {
                  return !!e || "Informe o nome de usuário!";
                }],
                passwordRegra: [function (e) {
                  return !!e || "Informe a palavra-passe do usuário!";
                }],
                passwordRegra2: [function (e) {
                  return !!e || "Informe a palavra-passe do usuário!";
                }, function (e) {
                  return _this5.senhaigual === e || "Informe a palavra-passe não consta acima";
                }]
              };
            },
            computed: {
              senhaigual: function senhaigual() {
                return this.$store.state.auth.inscrever.senha;
              }
            },
            methods: _objectSpread({
              registrar: function registrar() {
                var _this6 = this;
                return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.prev = 0;
                        _context5.next = 3;
                        return _this6.inscrever();
                      case 3:
                        alert("Inscrito com sucesso");
                        _context5.next = 9;
                        break;
                      case 6:
                        _context5.prev = 6;
                        _context5.t0 = _context5["catch"](0);
                        alert(_context5.t0);
                      case 9:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee5, null, [[0, 6]]);
                }))();
              }
            }, (0, U.nv)({
              inscrever: "auth/inscrever"
            })),
            mounted: function mounted() {}
          },
          Qe = Ke,
          Xe = (0, h.Z)(Qe, We, He, !1, null, null, null),
          Ye = Xe.exports;
        r.ZP.use(_.ZP);
        var et = [{
            path: "/autenticacao",
            redirect: {
              name: "entrada"
            },
            component: qe,
            children: [{
              path: "entrada",
              name: "entrada",
              component: Ve
            }, {
              path: "registrar",
              name: "registrar",
              component: Ye
            }]
          }, {
            path: "/",
            redirect: {
              name: "home"
            },
            component: R,
            meta: {
              requiresAuth: !1
            },
            children: [{
              path: "/home",
              name: "home",
              component: V
            }, {
              path: "/perfil",
              name: "perfil",
              meta: {
                requiresAuth: !0
              },
              component: he
            }, {
              path: "/dicionario",
              name: "dicionario",
              meta: {
                requiresAuth: !1
              },
              component: ne
            }, {
              path: "/biblioteca",
              name: "biblioteca",
              redirect: {
                name: "livros"
              },
              meta: {
                requiresAuth: !1
              },
              component: Te,
              children: [{
                path: "livros",
                name: "livros",
                meta: {
                  requiresAuth: !1
                },
                component: function component() {
                  return a.e(643).then(a.bind(a, 6643));
                }
              }, {
                path: "videos",
                name: "videos",
                meta: {
                  requiresAuth: !1
                },
                component: function component() {
                  return a.e(578).then(a.bind(a, 1578));
                }
              }, {
                path: "audios",
                name: "audios",
                meta: {
                  requiresAuth: !1
                },
                component: function component() {
                  return a.e(104).then(a.bind(a, 1104));
                }
              }, {
                path: "descarregados",
                name: "descarregados",
                meta: {
                  requiresAuth: !1
                },
                component: function component() {
                  return a.e(599).then(a.bind(a, 4599));
                }
              }]
            }, {
              path: "/aulas",
              name: "aulas",
              meta: {
                requiresAuth: !0
              },
              component: ye
            }, {
              path: "/nao-autorizado",
              name: "nao-autorizado",
              meta: {
                requiresAuth: !1
              },
              component: function component() {
                return a.e(157).then(a.bind(a, 5157));
              }
            }]
          }],
          tt = new _.ZP({
            mode: "history",
            base: "/",
            routes: et
          });
        tt.beforeEach(function (e, t, a) {
          var r = e.matched.some(function (e) {
            return e.meta.requiresAuth;
          });
          r && (M() ? a() : a({
            name: "nao-autorizado"
          })), a();
        });
        var at = tt,
          rt = {
            namespaced: !0,
            state: {
              linguas: ge,
              loading: !1,
              primario: {
                lingua: "",
                palavra: ""
              },
              secondario: {
                lingua: "",
                palavra: ""
              }
            },
            getters: {
              disabilitarLinguaSelec: function disabilitarLinguaSelec(_ref4) {
                var e = _ref4.linguas,
                  t = _ref4.primario;
                return e.indexOf(e.filter(function (e) {
                  return t.lingua === e.lingua;
                })[0]);
              },
              l: function l(_ref5) {
                var e = _ref5.loading;
                return e;
              },
              linguas: function linguas(_ref6) {
                var e = _ref6.linguas;
                return e;
              }
            },
            mutations: {
              COMMIT_LOADING: function COMMIT_LOADING(_ref7, t) {
                var e = _ref7.loading;
                t;
              },
              COMMIT_TRADUCAO: function COMMIT_TRADUCAO(_ref8, t) {
                var e = _ref8.secondario;
                e.palavra = t.significado;
              }
            },
            actions: {
              traduzir: function traduzir(_ref9) {
                return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                  var e, t, a;
                  return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                      case 0:
                        e = _ref9.getters, t = _ref9.state, a = _ref9.commit;
                        return _context7.abrupt("return", new Promise( /*#__PURE__*/function () {
                          var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e, r) {
                            var _r;
                            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                              while (1) switch (_context6.prev = _context6.next) {
                                case 0:
                                  _context6.prev = 0;
                                  a("COMMIT_LOADING", !0);
                                  _context6.next = 4;
                                  return Ue.get("/translate/universal", {
                                    params: {
                                      key: t.primario.lingua,
                                      palavra: t.primario.palavra,
                                      para: t.secondario.lingua
                                    }
                                  });
                                case 4:
                                  _r = _context6.sent;
                                  if (_r.data.response) {
                                    _context6.next = 7;
                                    break;
                                  }
                                  throw _r.data.msg;
                                case 7:
                                  a("COMMIT_TRADUCAO", _r.data.query), e({
                                    response: _r.data.response,
                                    msg: "ok"
                                  });
                                  _context6.next = 13;
                                  break;
                                case 10:
                                  _context6.prev = 10;
                                  _context6.t0 = _context6["catch"](0);
                                  r(_context6.t0);
                                case 13:
                                case "end":
                                  return _context6.stop();
                              }
                            }, _callee6, null, [[0, 10]]);
                          }));
                          return function (_x, _x2) {
                            return _ref10.apply(this, arguments);
                          };
                        }()));
                      case 2:
                      case "end":
                        return _context7.stop();
                    }
                  }, _callee7);
                }))();
              }
            }
          },
          nt = {
            namespaced: !0,
            state: {
              usuario: {
                nome: "",
                senha: ""
              },
              inscrever: {
                nome: "",
                senha: "",
                email: "",
                telefone: ""
              }
            },
            getters: {},
            mutations: {},
            actions: {
              inscrever: function inscrever(_ref11) {
                var e = _ref11.state,
                  t = _ref11.commit,
                  a = _ref11.dispatch;
                return new Promise( /*#__PURE__*/function () {
                  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(t, a) {
                    var _a, _r2;
                    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                      while (1) switch (_context8.prev = _context8.next) {
                        case 0:
                          _context8.prev = 0;
                          _a = e.inscrever;
                          _context8.next = 4;
                          return Ue.post("/usuario/inscrever", {}, {
                            params: _a
                          });
                        case 4:
                          _r2 = _context8.sent.status;
                          console.log(_r2), t(_r2);
                          _context8.next = 11;
                          break;
                        case 8:
                          _context8.prev = 8;
                          _context8.t0 = _context8["catch"](0);
                          a(_context8.t0);
                        case 11:
                        case "end":
                          return _context8.stop();
                      }
                    }, _callee8, null, [[0, 8]]);
                  }));
                  return function (_x3, _x4) {
                    return _ref12.apply(this, arguments);
                  };
                }());
              },
              autenticarClient: function autenticarClient(_ref13) {
                var e = _ref13.state,
                  t = _ref13.commit,
                  a = _ref13.dispatch;
                return new Promise( /*#__PURE__*/function () {
                  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(t, r) {
                    var _r3, _n;
                    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                      while (1) switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.prev = 0;
                          _r3 = e.usuario;
                          _context9.next = 4;
                          return Ue.get("/usuario/auth", {
                            params: _r3
                          });
                        case 4:
                          _n = _context9.sent.data.token;
                          console.log(_n);
                          _context9.next = 8;
                          return a("addClientCookie", _n);
                        case 8:
                          t(_n);
                          _context9.next = 14;
                          break;
                        case 11:
                          _context9.prev = 11;
                          _context9.t0 = _context9["catch"](0);
                          r(_context9.t0);
                        case 14:
                        case "end":
                          return _context9.stop();
                      }
                    }, _callee9, null, [[0, 11]]);
                  }));
                  return function (_x5, _x6) {
                    return _ref14.apply(this, arguments);
                  };
                }());
              },
              addClientCookie: function addClientCookie(_ref15, r) {
                var e = _ref15.state,
                  t = _ref15.commit,
                  a = _ref15.dispatch;
                return new Promise( /*#__PURE__*/function () {
                  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(e, t) {
                    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                      while (1) switch (_context10.prev = _context10.next) {
                        case 0:
                          try {
                            P(T, r, 1), e(r);
                          } catch (a) {
                            t(a);
                          }
                        case 1:
                        case "end":
                          return _context10.stop();
                      }
                    }, _callee10);
                  }));
                  return function (_x7, _x8) {
                    return _ref16.apply(this, arguments);
                  };
                }());
              }
            }
          },
          ot = {
            namespaced: !0,
            state: {
              calendar: new Date(),
              dica: "Não leve a vida tão a sério, afinal ninguém vai sair vivo dela"
            },
            getters: {
              dicaDoDia: function dicaDoDia(_ref17) {
                var e = _ref17.dica;
                return e;
              },
              calendarioEmPortugues: function calendarioEmPortugues(_ref18) {
                var e = _ref18.calendar;
                return new Date(e).toLocaleDateString("pt-br", {
                  dateStyle: "full"
                });
              }
            },
            mutations: {
              COMMIT_CALENDAR: function COMMIT_CALENDAR(_ref19, t) {
                var e = _ref19.calendar;
                t;
              }
            },
            actions: {
              getDateFromServer: function getDateFromServer(_ref20) {
                return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
                  var e;
                  return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                      case 0:
                        e = _ref20.commit;
                        new Promise( /*#__PURE__*/function () {
                          var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(t, a) {
                            var _a2;
                            return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                              while (1) switch (_context11.prev = _context11.next) {
                                case 0:
                                  _context11.prev = 0;
                                  _context11.next = 3;
                                  return Ue.get("/calendar");
                                case 3:
                                  _a2 = _context11.sent.data;
                                  e("COMMIT_CALENDAR", _a2), t(_a2);
                                  _context11.next = 10;
                                  break;
                                case 7:
                                  _context11.prev = 7;
                                  _context11.t0 = _context11["catch"](0);
                                  a(_context11.t0);
                                case 10:
                                case "end":
                                  return _context11.stop();
                              }
                            }, _callee11, null, [[0, 7]]);
                          }));
                          return function (_x9, _x10) {
                            return _ref21.apply(this, arguments);
                          };
                        }());
                      case 2:
                      case "end":
                        return _context12.stop();
                    }
                  }, _callee12);
                }))();
              }
            }
          },
          it = {
            namespaced: !0,
            state: {
              usuario: {}
            },
            getters: {
              usuario: function usuario(_ref22) {
                var e = _ref22.usuario;
                return e;
              }
            },
            mutations: {
              COMMIT_USUARIO: function COMMIT_USUARIO(e, t) {
                e.usuario = t;
              }
            },
            actions: {
              getUsuarioData: function getUsuarioData(_ref23) {
                var e = _ref23.getters,
                  t = _ref23.state,
                  a = _ref23.commit;
                return new Promise( /*#__PURE__*/function () {
                  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(e, t) {
                    var _t;
                    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                      while (1) switch (_context13.prev = _context13.next) {
                        case 0:
                          _context13.prev = 0;
                          _context13.next = 3;
                          return Ue.get("/usuario");
                        case 3:
                          _t = _context13.sent.data;
                          a("COMMIT_USUARIO", _t), e("ok");
                          _context13.next = 10;
                          break;
                        case 7:
                          _context13.prev = 7;
                          _context13.t0 = _context13["catch"](0);
                          t(_context13.t0);
                        case 10:
                        case "end":
                          return _context13.stop();
                      }
                    }, _callee13, null, [[0, 7]]);
                  }));
                  return function (_x11, _x12) {
                    return _ref24.apply(this, arguments);
                  };
                }());
              }
            }
          };
        r.ZP.use(U.ZP);
        var st = new U.ZP.Store({
            state: {},
            getters: {},
            mutations: {},
            actions: {},
            modules: {
              dicionario: rt,
              usuario: it,
              auth: nt,
              home: ot
            }
          }),
          lt = a(1705),
          ut = a(7258);
        r.ZP.use(lt.Z);
        var ct = new lt.Z({
          breakpoint: {
            scrollBarWidth: 16,
            thresholds: {
              xs: 600,
              sm: 960,
              md: 1280,
              lg: 1920
            }
          },
          lang: {
            current: "pt",
            locales: {
              pt: ut.Z
            }
          },
          theme: {
            dark: !1,
            "default": "light",
            disable: !1,
            options: {
              cspNonce: void 0,
              customProperties: void 0,
              minifyTheme: void 0,
              themeCache: void 0
            }
          }
        });
        r.ZP.config.productionTip = !1, new r.ZP({
          router: at,
          store: st,
          vuetify: ct,
          render: function render(e) {
            return e(w);
          }
        }).$mount("#app");
      },
      413: function _(e, t, a) {
        e.exports = a.p + "img/IMG-20221224-WA0003.d9fbd569.jpg";
      },
      9069: function _(e, t, a) {
        e.exports = a.p + "img/logo-dark.46120fe0.jpg";
      },
      6252: function _(e, t, a) {
        e.exports = a.p + "img/logo-light.f9a90d67.jpg";
      }
    },
    t = {};
  function a(r) {
    var n = t[r];
    if (void 0 !== n) return n.exports;
    var o = t[r] = {
      exports: {}
    };
    return e[r](o, o.exports, a), o.exports;
  }
  a.m = e, function () {
    var e = [];
    a.O = function (t, r, n, o) {
      if (!r) {
        var i = 1 / 0;
        for (c = 0; c < e.length; c++) {
          r = e[c][0], n = e[c][1], o = e[c][2];
          for (var s = !0, l = 0; l < r.length; l++) (!1 & o || i >= o) && Object.keys(a.O).every(function (e) {
            return a.O[e](r[l]);
          }) ? r.splice(l--, 1) : (s = !1, o < i && (i = o));
          if (s) {
            e.splice(c--, 1);
            var u = n();
            void 0 !== u && (t = u);
          }
        }
        return t;
      }
      o = o || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
      e[c] = [r, n, o];
    };
  }(), function () {
    a.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return a.d(t, {
        a: t
      }), t;
    };
  }(), function () {
    a.d = function (e, t) {
      for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      });
    };
  }(), function () {
    a.f = {}, a.e = function (e) {
      return Promise.all(Object.keys(a.f).reduce(function (t, r) {
        return a.f[r](e, t), t;
      }, []));
    };
  }(), function () {
    a.u = function (e) {
      return "js/" + e + "." + {
        104: "88d0b7e1",
        157: "eab3fd91",
        578: "264af3ae",
        599: "0b85f9f4",
        643: "248519fe"
      }[e] + ".js";
    };
  }(), function () {
    a.miniCssF = function (e) {};
  }(), function () {
    a.g = function () {
      if ("object" === (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis))) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === (typeof window === "undefined" ? "undefined" : _typeof(window))) return window;
      }
    }();
  }(), function () {
    a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    };
  }(), function () {
    var e = {},
      t = "biblioteca-bantu:";
    a.l = function (r, n, o, i) {
      if (e[r]) e[r].push(n);else {
        var s, l;
        if (void 0 !== o) for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
          var d = u[c];
          if (d.getAttribute("src") == r || d.getAttribute("data-webpack") == t + o) {
            s = d;
            break;
          }
        }
        s || (l = !0, s = document.createElement("script"), s.charset = "utf-8", s.timeout = 120, a.nc && s.setAttribute("nonce", a.nc), s.setAttribute("data-webpack", t + o), s.src = r), e[r] = [n];
        var m = function m(t, a) {
            s.onerror = s.onload = null, clearTimeout(p);
            var n = e[r];
            if (delete e[r], s.parentNode && s.parentNode.removeChild(s), n && n.forEach(function (e) {
              return e(a);
            }), t) return t(a);
          },
          p = setTimeout(m.bind(null, void 0, {
            type: "timeout",
            target: s
          }), 12e4);
        s.onerror = m.bind(null, s.onerror), s.onload = m.bind(null, s.onload), l && document.head.appendChild(s);
      }
    };
  }(), function () {
    a.r = function (e) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    };
  }(), function () {
    a.p = "/";
  }(), function () {
    var e = {
      143: 0
    };
    a.f.j = function (t, r) {
      var n = a.o(e, t) ? e[t] : void 0;
      if (0 !== n) if (n) r.push(n[2]);else {
        var o = new Promise(function (a, r) {
          n = e[t] = [a, r];
        });
        r.push(n[2] = o);
        var i = a.p + a.u(t),
          s = new Error(),
          l = function l(r) {
            if (a.o(e, t) && (n = e[t], 0 !== n && (e[t] = void 0), n)) {
              var o = r && ("load" === r.type ? "missing" : r.type),
                i = r && r.target && r.target.src;
              s.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")", s.name = "ChunkLoadError", s.type = o, s.request = i, n[1](s);
            }
          };
        a.l(i, l, "chunk-" + t, t);
      }
    }, a.O.j = function (t) {
      return 0 === e[t];
    };
    var t = function t(_t2, r) {
        var n,
          o,
          i = r[0],
          s = r[1],
          l = r[2],
          u = 0;
        if (i.some(function (t) {
          return 0 !== e[t];
        })) {
          for (n in s) a.o(s, n) && (a.m[n] = s[n]);
          if (l) var c = l(a);
        }
        for (_t2 && _t2(r); u < i.length; u++) o = i[u], a.o(e, o) && e[o] && e[o][0](), e[o] = 0;
        return a.O(c);
      },
      r = self["webpackChunkbiblioteca_bantu"] = self["webpackChunkbiblioteca_bantu"] || [];
    r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r));
  }();
  var r = a.O(void 0, [998], function () {
    return a(5746);
  });
  r = a.O(r);
})();