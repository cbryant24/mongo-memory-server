import express from "express";
import "express-async-errors";
import { json } from "body-parser";

import { indexRouter } from "./routes";

const app = express();

app.set("trust proxy", true);
app.use(json());

app.use(indexRouter);

export { app };
