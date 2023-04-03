import dotenv from "dotenv";
import http from "http";

import app from "./app";

// load .env variables
dotenv.config();

const APP_NAME = process.env.APP_NAME || "server";
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`🚀 [${APP_NAME}]: server listening on port ${PORT}`);
});
