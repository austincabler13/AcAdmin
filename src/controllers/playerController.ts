import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import * as playerService from "../services/playerService.ts";

// Kick player controller
export const kickPlayer = async (ctx: RouterContext<"/players/kick/:id">) => {
  const playerId = ctx.params.id;  // Access the parameter safely
  if (playerId) {
    const result = await playerService.kickPlayer(playerId);
    ctx.response.body = { success: result };
  } else {
    ctx.response.status = 400;
    ctx.response.body = { error: "Player ID is missing." };
  }
};

// Ban player controller
export const banPlayer = async (ctx: RouterContext<"/players/ban/:id">) => {
  const playerId = ctx.params.id;  // Access the parameter safely
  if (playerId) {
    const result = await playerService.banPlayer(playerId);
    ctx.response.body = { success: result };
  } else {
    ctx.response.status = 400;
    ctx.response.body = { error: "Player ID is missing." };
  }
};
