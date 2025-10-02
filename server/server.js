require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express();
const authRoute = require("./router/auth-router.js")
const contactRoute = require("./router/contact-router.js")
const serviceRoute = require("./router/service-router.js")
const adminRoute = require("./router/admin-router.js")
const connectDb = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");
const PORT = 8000;

// let's handling cors policy
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}
app.use(cors(corsOptions))
app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

// Let's define admin route
app.use("/api/admin", adminRoute);
app.use(errorMiddleware);

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server runs at port ${PORT}`)
    })
})