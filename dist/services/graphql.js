"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressGraphql = _interopRequireDefault(require("express-graphql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (schema, graphiql) => ({
  endPointGraphQl: () => {
    return (0, _expressGraphql.default)({
      schema,
      graphiql: graphiql
    });
  }
});

exports.default = _default;
//# sourceMappingURL=graphql.js.map