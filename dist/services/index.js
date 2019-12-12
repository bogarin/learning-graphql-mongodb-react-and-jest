"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("./express"));

var _mongo = _interopRequireDefault(require("./mongo"));

var _graphql = _interopRequireDefault(require("./graphql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  express: _express.default,
  mongo: _mongo.default,
  graphql: _graphql.default
};
exports.default = _default;
//# sourceMappingURL=index.js.map