import express from "express";
import chalk from "./chalk"
const aplicacion = express();
export default () => ({
  use: async (url, endpoint) => {
    aplicacion.use(url, endpoint);
  },
  listen: portNode => {
    aplicacion.listen(portNode, () =>
      console.log(chalk.connected(`conexion a la aplicacion: http://localhost:${portNode}`))
    );
  }
});
