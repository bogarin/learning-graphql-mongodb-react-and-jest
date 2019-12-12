"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const aplicacion = (0, _express.default)();

var _default = () => ({
  use: async (url, endpoint) => {
    aplicacion.use(url, endpoint);
  },
  listen: portNode => {
    aplicacion.listen(portNode, () => console.log(`conexion http://localhost:${portNode}`));
  }
});

exports.default = _default;
//# sourceMappingURL=express.js.map