import { Router } from "https://deno.land/x/oak/mod.ts";
import { getServerStatus } from "../controllers/serverController.ts";

const serverRouter = new Router();

serverRouter.get("/server/status", getServerStatus);

export { serverRouter };
