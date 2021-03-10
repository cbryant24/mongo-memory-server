import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  app.listen(4000, () => console.log("Listening on 3000!!"));
};

start();
