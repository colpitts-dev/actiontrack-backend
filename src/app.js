import express, { json } from "express";

const app = express();

// Middleware
app.use(json());

// Routes
app.get("/", (req, res) => {
  return res.json({
    title: "action[track]",
    content: "goal tracking platform",
  });
});

export default app;
