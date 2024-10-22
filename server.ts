import { Application } from "https://deno.land/x/oak@v17.1.0/mod.ts";
import { playerRouter } from "./src/routes/playerRoutes.ts";
import { serverRouter } from "./src/routes/serverRoutes.ts";
import { authMiddleware } from "./src/middlewares/authMiddleware.ts"; // Ensure this matches the file name

const app = new Application();

// Security Middleware
app.use(authMiddleware);

// Routes
app.use(playerRouter.routes());
app.use(serverRouter.routes());

console.log("Server running on http://localhost:8080");
await app.listen({ port: 8080 });
