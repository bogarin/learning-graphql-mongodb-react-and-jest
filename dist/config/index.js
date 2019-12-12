"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var _default = {
  type: process.env.NODE_TYPE || "dev",
  portNode: process.env.PORT || 3088,
  urlMongo: process.env.MONGO_URL || "//localhost:1717",
  dbMongo: process.env.MONGO_DB || "/clientes",
  userMongo: process.env.MONGO_USER || "root",
  pwdMongo: process.env.MONGO_PWD || "example"
};
exports.default = _default;
//# sourceMappingURL=index.js.map