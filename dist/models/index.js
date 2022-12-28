"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var knex = require('knex')({
  client: 'mysql',
  connection: {
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'biblioteca_bantu'
  }
});
var _default = knex;
exports["default"] = _default;