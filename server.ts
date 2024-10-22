import { Application } from "https://deno.land/x/oak/mod.ts";
import { playerRouter } from "./src/routes/playerRoutes.ts";
import { serverRouter } from "./src/routes/serverRoutes.ts";
import { authMiddleware } from "./src/middlewares/authMiddleware.ts";  // Correct case

const app = new Application();

// Security Middleware (example)
app.use(authMiddleware);

// Routes
app.use(playerRouter.routes());
app.use(serverRouter.routes());

console.log("Server running on http://localhost:8080");
await app.listen({ port: 8080 });
