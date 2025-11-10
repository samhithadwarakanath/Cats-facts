import express from "express";
import cors from "cors";
import { router as catRoutes } from "./routes/cats";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/cats", catRoutes);

app.listen(3000, () => console.log("API running on http://localhost:3000"));
