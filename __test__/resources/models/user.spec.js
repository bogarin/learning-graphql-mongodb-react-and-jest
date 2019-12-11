import mongoose from "mongoose";
import testMongo from "./../../../src/services/mongo";
import UserModel from "./../../../src/resources/models/user";
const User=UserModel({ mongoose }).userModel();
const testConecction = testMongo({ mongoose });
const userData = {
  name: "TekLoon",
  gender: "Male",
  dob: new Date(),
  loginUsing: "Facebook"
};
describe("Name of the group", () => {
  beforeAll(async () => {
    await testConecction.connection();
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
