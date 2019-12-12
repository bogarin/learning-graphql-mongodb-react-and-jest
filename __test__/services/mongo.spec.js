import testMongo from "./../../src/services/mongo";
import config from "./../../src/config";
describe("Name of the group", () => {
  it("should ",() => {
    const testConecction = testMongo();
      testConecction.connection(
        config.urlMongo,
        config.dbMongo,
        config.userMongo,
        config.pwdMongo
      )
  });
});
