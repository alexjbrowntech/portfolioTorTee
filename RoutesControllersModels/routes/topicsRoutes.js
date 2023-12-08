import express from "express";
import * as topics from "../controllers/topicsController.js";

export const topicsRoutes = express.Router();

topicsRoutes.get("/:id", topics.getTopic);
