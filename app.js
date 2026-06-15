import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import paymentRoutes from "./routes/payment.route.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/payment",paymentRoutes);

 app.listen(3000)
 console.log("server at link http://localhost:3000")