import express from "express";

const router = express.Router();

router.get("/api/data", async (req: any, res: any) => {
  res.send("hello world");
});

export { router as indexRouter };
