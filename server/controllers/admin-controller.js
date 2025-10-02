const User = require("../models/user-model.js")
const Contact = require("../models/contact-model.js")


// ----------------------
// * Get All User Login
// ---------------------- 
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 });
        if (!users || users.length === 0) {
            res.status(404).json({ message: "No Users Found!!!" })
        }
        res.status(200).json(users)
    } catch (error) {
        next(error);

    }
}


// ----------------------
// * Singer User Logic
// ---------------------- 

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id }, { password: 0 });
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

// ----------------------
// * User Delete Logic
// ---------------------- 

const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id })
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}

// ----------------------
// * User Update Logic
// ---------------------- 

const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const updateUserData = req.body;

        const updateUser = await User.updateOne(
            { _id: id },
            { $set: updateUserData }
        );

        return res.status(200).json(updateUser);
    } catch (error) {
        console.error("Update Error:", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

// ----------------------
// * Get All contact Login
// ---------------------- 

const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        console.log(contacts)
        if (!contacts || contacts.length === 0) {
            res.status(404).json({ message: "No Contact Found!!!" });
        }
        res.status(200).json(contacts);
    } catch (error) {
        next(error)
    }
}


// ----------------------
// * Delete single contact Login
// ---------------------- 
const deleteContactById = async (req, res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({ _id: id })
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}


module.exports = {
    getAllUsers,
    getAllContacts,
    deleteUserById,
    getUserById,
    updateUserById,
    deleteContactById
};