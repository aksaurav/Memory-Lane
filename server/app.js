import express from "express";
import cors from "cors";
import personRoutes from "./routes/personRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Mount routes;
app.use("/api/people", personRoutes);

export default app;
