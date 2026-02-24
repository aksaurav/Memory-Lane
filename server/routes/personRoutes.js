import express from "express";
import { addPerson, getAllPeople } from "../controllers/personController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Protect will run before the controller function
router.post("/", protect, addPerson);
router.post("/", protect, getAllPeople);

export default router;
