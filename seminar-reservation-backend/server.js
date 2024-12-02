import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import seminarRoutes from "./routes/seminarRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import sendEmail from "./utils/email.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/seminars", seminarRoutes);
app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;
// sendEmail(
//     process.env.EMAIL_USER,
//     "Nodemailer test",
//     "This is a test email",
//     "<h1>This is a test email</h1>",
// ); //plain text password requires disablingg secure login
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
