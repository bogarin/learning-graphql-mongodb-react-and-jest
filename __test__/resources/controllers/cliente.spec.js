import mongoose from "mongoose";
import testMongo from "./../../../src/services/mongo";
import services from "./../../../src/services";
import ctlClientes from "../../../src/resources/controllers/Clientes";
import config from "./../../../src/config";
const testConecction = testMongo();
const Clientes = ctlClientes();
describe("Name of the group", () => {
  beforeAll(async () => {
    testConecction.connection(
      config.urlMongo,
      config.dbMongo,
      config.userMongo,
      config.pwdMongo
    );
  });

  it("should ", () => {
    console.log(Clientes.getClientes());
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});
