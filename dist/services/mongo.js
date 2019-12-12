"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const connectionAth = mongoose => (dbURL, db, user, pwd) => {
  mongoose.connect(`mongodb:${dbURL}${db}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    user: user,
    pass: pwd
  }).then(() => {
    console.log("connection...");
  }, err => {
    console.log(`Fallo de conexion: ${err}`);
  });
};

const connectionFree = mongoose => (dbURL, db) => {
  mongoose.connect(`mongodb:${dbURL}${db}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }).then(() => {
    console.log("connection...");
  }, err => {
    console.log(`Fallo de conexion: ${err}`);
  });
};

var _default = ({
  mongoose
}) => ({
  connection: (dbURL, db, user, pwd) => {
    const conAuntenticacion = connectionAth(mongoose);
    const sinAuntenticacion = connectionFree(mongoose);

    if (user !== undefined) {
      conAuntenticacion(dbURL, db, user, pwd);
    }

    sinAuntenticacion(dbURL, db);
  }
});

exports.default = _default;
//# sourceMappingURL=mongo.js.map