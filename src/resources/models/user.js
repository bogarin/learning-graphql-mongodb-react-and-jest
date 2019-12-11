export default ({ mongoose }) => ({
  userModel: () => {
    const userSchema = new mongoose.Schema({
      name: { type: String, required: true },
      gender: { type: String, required: true },
      dob: Date,
      loginUsing: String
    });
    return new mongoose.model("User", userSchema);
  }
});
