"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
if (!self.define) {
  var e,
    i = {};
  var n = function n(_n, s) {
    return _n = new URL(_n + ".js", s).href, i[_n] || new Promise(function (i) {
      if ("document" in self) {
        var _e = document.createElement("script");
        _e.src = _n, _e.onload = i, document.head.appendChild(_e);
      } else e = _n, importScripts(_n), i();
    }).then(function () {
      var e = i[_n];
      if (!e) throw new Error("Module ".concat(_n, " didn\u2019t register its module"));
      return e;
    });
  };
  self.define = function (s, l) {
    var r = e || ("document" in self ? document.currentScript.src : "") || location.href;
    if (i[r]) return;
    var o = {};
    var u = function u(e) {
        return n(e, r);
      },
      t = {
        module: {
          uri: r
        },
        exports: o,
        require: u
      };
    i[r] = Promise.all(s.map(function (e) {
      return t[e] || u(e);
    })).then(function (e) {
      return l.apply(void 0, _toConsumableArray(e)), o;
    });
  };
}
define(["./workbox-79ffe3e0"], function (e) {
  "use strict";

  e.setCacheNameDetails({
    prefix: "biblioteca-bantu"
  }), self.addEventListener("message", function (e) {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }), e.precacheAndRoute([{
    url: "/css/app.94899b0c.css",
    revision: null
  }, {
    url: "/css/chunk-vendors.03e0626a.css",
    revision: null
  }, {
    url: "/fonts/materialdesignicons-webfont.27a0fd11.woff2",
    revision: null
  }, {
    url: "/fonts/materialdesignicons-webfont.2f788fed.woff",
    revision: null
  }, {
    url: "/fonts/materialdesignicons-webfont.325befe2.ttf",
    revision: null
  }, {
    url: "/fonts/materialdesignicons-webfont.7df0a622.eot",
    revision: null
  }, {
    url: "/img/IMG-20221224-WA0003.d9fbd569.jpg",
    revision: null
  }, {
    url: "/img/logo-dark.46120fe0.jpg",
    revision: null
  }, {
    url: "/img/logo-light.f9a90d67.jpg",
    revision: null
  }, {
    url: "/img/not-authorized-dark.81c781ab.svg",
    revision: null
  }, {
    url: "/index.html",
    revision: "32e5d5c832169813dbad550079308060"
  }, {
    url: "/js/104.88d0b7e1.js",
    revision: null
  }, {
    url: "/js/157.eab3fd91.js",
    revision: null
  }, {
    url: "/js/578.264af3ae.js",
    revision: null
  }, {
    url: "/js/599.0b85f9f4.js",
    revision: null
  }, {
    url: "/js/643.248519fe.js",
    revision: null
  }, {
    url: "/js/app.f4dc955c.js",
    revision: null
  }, {
    url: "/js/chunk-vendors.2308ea28.js",
    revision: null
  }, {
    url: "/manifest.json",
    revision: "953fc6035458d6725586fca1c07115fb"
  }, {
    url: "/robots.txt",
    revision: "b6216d61c03e6ce0c9aea6ca7808f7ca"
  }], {});
});