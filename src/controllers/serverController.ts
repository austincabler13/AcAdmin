import { Context } from "https://deno.land/x/oak/mod.ts";
import * as serverService from "../services/serverService.ts";

export const getServerStatus = async (ctx: Context) => {
  const status = await serverService.getServerStatus();
  ctx.response.body = { status };
};
