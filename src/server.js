import services from "./services";
import config from "./config";
const mongodb = async () => {
  await services
    .mongo()
    .connection(
      config.urlMongo,
      config.dbMongo,
      config.userMongo,
      config.pwdMongo
    );
};
const graphql = services.graphql();
const express = services.express();
mongodb();
express.use("/graphql", graphql.endPointGraphQl());
express.listen(config.portNode);
