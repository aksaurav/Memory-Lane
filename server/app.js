import express from "express";
import cors from "cors";
import personRoutes from "./routes/personRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Mount routes;
app.use("/api/people", personRoutes);
app.use("/api/users", authRoutes);

export default app;
