import express from "express";
import cors from "cors";
import { icebreakerRoutes } from "./RoutesControllersModels/routes/icebreakerRoutes.js";
import { topicsRoutes } from "./RoutesControllersModels/routes/topicsRoutes.js";

export const app = express();

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.use(express.static("public"));
app.use(express.static("images"));
app.use(express.static("scripts"));

// For the icebreaker and topics connections
app.use("/icebreaker", icebreakerRoutes);
app.use("/questions", topicsRoutes);
