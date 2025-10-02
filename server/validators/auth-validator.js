const { z } = require("zod");

const loginSchema = z.object({
    email: z
        .string({ require_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be atleast 3 charachters" })
        .max(255, { message: "Email must not be more than 255 chars" }),
    password: z
        .string({ require_error: "Password is required" })
        .min(7, { message: "Password must be at least 7 charaters" })
        .max(1024, { message: "Password must not be more than 1024 characters" }),
})
    
// creating an object schema
const signupSchema = loginSchema.extend({
    username: z
        .string({ require_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be atleast 3 charachters" })
        .max(255, { message: "Name must not be more than 255 chars" }),

    phone: z
        .string({ require_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone must be at least of 10 characters" })
        .max(20, { message: "Phone must not be more than 20 characters" }),

});

module.exports = {signupSchema,loginSchema};