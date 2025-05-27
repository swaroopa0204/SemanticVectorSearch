// src/routes/qaRoutes.ts
import express from "express";
import { handleQA } from "../controllers/qaController";

const router = express.Router();

router.post("/qa", handleQA);

export default router;
