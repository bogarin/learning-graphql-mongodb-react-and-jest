import mongoose from "mongoose";
import testMongo from "./../../../src/services/mongo";
import UserModel from "./../../../src/resources/models/user";
import config from "./../../../src/config";

const User = UserModel({ mongoose }).userModel();
const testConecction = testMongo();
const userData = {
  name: "TekLoon",
  gender: "Male",
  dob: new Date(),
  loginUsing: "Facebook"
};
describe("Name of the group", () => {
  beforeAll(async () => {
    testConecction.connection(
      config.urlMongo,
      config.dbMongo,
      config.userMongo,
      config.pwdMongo
    );
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("create & save user successfully", async () => {
    const validUser = new User(userData);
    const savedUser = await validUser.save();
    // Object Id should be defined when successfully saved to MongoDB.
    expect(savedUser._id).toBeDefined();
    expect(savedUser.name).toBe(userData.name);
    expect(savedUser.gender).toBe(userData.gender);
    expect(savedUser.dob).toBe(userData.dob);
    expect(savedUser.loginUsing).toBe(userData.loginUsing);
  });
});
