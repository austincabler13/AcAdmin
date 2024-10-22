import { Router } from "https://deno.land/x/oak/mod.ts";
import { kickPlayer, banPlayer } from "../controllers/playerController.ts";

const playerRouter = new Router();

playerRouter.post("/players/kick/:id", kickPlayer);
playerRouter.post("/players/ban/:id", banPlayer);

export { playerRouter };
