import { createServer } from "./utils/server";
import dotenv from "dotenv";

dotenv.config();

const app = createServer();

app.listen(process.env.PORT, () => {
  console.log("Server's running");
});
