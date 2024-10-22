import { RouterContext } from "https://deno.land/x/oak@v17.1.0/mod.ts";
import * as playerService from "../services/playerService.ts";

export const kickPlayer = async (ctx: RouterContext<string>) => {
  const playerId = ctx.params.id; // Get the player ID from the URL parameters
  try {
    const result = await playerService.kickPlayer(playerId); // Call the service to kick the player
    ctx.response.body = { success: result }; // Respond with success status
  } catch (error: unknown) { // Use unknown type for error
    ctx.response.status = 500; // Internal server error
    ctx.response.body = { error: "Failed to kick player", details: (error as Error).message }; // Cast to Error for message
  }
};

export const banPlayer = async (ctx: RouterContext<string>) => {
  const playerId = ctx.params.id; // Get the player ID from the URL parameters
  try {
    const result = await playerService.banPlayer(playerId); // Call the service to ban the player
    ctx.response.body = { success: result }; // Respond with success status
  } catch (error: unknown) { // Use unknown type for error
    ctx.response.status = 500; // Internal server error
    ctx.response.body = { error: "Failed to ban player", details: (error as Error).message }; // Cast to Error for message
  }
};
