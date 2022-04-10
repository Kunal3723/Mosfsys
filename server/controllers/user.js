import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel.js";


export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await UserModel.findOne({ email });

        if (!existingUser) { return res.status(404).json({ message: "User does not exist" }) }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) { return res.status(400).json({ message: "Invalid credentials" }) }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1hr" });

        res.status(200).send({ token });




    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const signup = async (req, res) => {
    const { firstName, lastName, password, email, username } = req.body;

    try {
        const existingUser = await UserModel.findOne({ email });
        const existingUser2 = await UserModel.findOne({ username });

        if (existingUser) { return res.status(404).json({ message: "User already exist" }) }
        if (existingUser2) { return res.status(404).json({ message: "User already exist" }) }


        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await UserModel.create({ email, password: hashedPassword, username, firstName, lastName });

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1hr" });

        res.status(200).send({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getInfo = async (req, res) => {

    try {
        if (!(req.userId)) {

            return res.status(404).json({ message: "Unauthorized access" })
        }

        const user = await UserModel.findById(req.userId);

        if (!user) {

            return res.status(404).json({ message: "User does not exist" })

        }
        const { firstName, email, lastName, username } = user;


        res.status(210).send({ firstName, lastName, username, email });




    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const updateInfo = async (req, res) => {
   
    try {
        if (!(req.userId)) {

            return res.status(404).json({ message: "Unauthorized access" })
        }

        const user = await UserModel.findById(req.userId);

        if (!user) {

            return res.status(404).json({ message: "User does not exist" })

        }
        const { firstName, lastName, username } = req.body;
        const updated =await UserModel.findByIdAndUpdate(req.userId,{firstName,lastName,username},{ new: true })


        res.status(210).send(updated);




    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}