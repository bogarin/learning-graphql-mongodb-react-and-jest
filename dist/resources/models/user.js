"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = ({
  mongoose
}) => ({
  userModel: () => {
    const userSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      gender: {
        type: String,
        required: true
      },
      dob: Date,
      loginUsing: String
    });
    return new mongoose.model("User", userSchema);
  }
});

exports.default = _default;
//# sourceMappingURL=user.js.map