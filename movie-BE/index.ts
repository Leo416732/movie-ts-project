import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import movie_router from "./controller/MovieRouter";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(cors());
app.use(movie_router);

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
