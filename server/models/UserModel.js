import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    username: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    })


const UserModel = mongoose.model("UserModel", userSchema);

export default UserModel;

//firstName, lastName, password, username , email