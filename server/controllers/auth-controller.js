const User = require("../models/user-model")
const bcrypt = require("bcryptjs")


// ----------------------
// * Home Page Login
// ---------------------- 
const home = async (req, res) => {
    try {
        res.status(200).json({ message: "Welcome to Home page using router" })
    }
    catch (error) {
        res.status(200).json({ message: "Internal server error" })
    }
}


// ----------------------
// * User Regestration Login
// ---------------------- 
const register = async (req, res) => {
    try {
        console.log(req.body)
        const { username, email, phone, password } = req.body;
        const userExists = await User.findOne({ email: email })
        if (userExists) {
            return res.status(400).json({ message: "email is already exists" })
        }

        const userCreated = await User.create({ username, email, phone, password })
        res.status(201).json({
            msg: "Regestration successfully",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        })
    }
    catch (error) {
        // res.status(200).json({ message: "Internal server error" })
        next(error)
    }
}


// ----------------------
// * User Login Login
// ---------------------- 
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExists = await User.findOne({ email: email })
        if (!userExists) {
            return res.status(400).json({ msg: "Invalid Creadantials" })
        }
        // const user = await bcrypt.compare(password, userExists.password)
        const user = await userExists.comparePasswrd(password)  
        if (user) {
            res.status(200).json({
                msg: "Login successfully",
                token: await userExists.generateToken(),
                userId: userExists._id.toString(),
            })  
        } else {
            res.status(401).json({ msg: "Invalid email or password" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}

// ----------------------
// * To send user data - User Login
// ---------------------- 

const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({ userData})
    } catch (error) {
        console.log(`Error from the user route ${error}`)
    }
}


module.exports = {
    home,
    register,
    login,
    user
};