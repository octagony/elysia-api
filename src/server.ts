import cors from "@elysiajs/cors";
import { Elysia } from "elysia";
import { routes } from "./routes";

// App Init
const app = new Elysia();

//Use CORS
app.use(cors());

app.use(routes);

export default app;
