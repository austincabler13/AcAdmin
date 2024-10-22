import { Context } from "https://deno.land/x/oak/mod.ts";

const authMiddleware = async (ctx: Context, next: () => Promise<unknown>) => {
  const token = ctx.request.headers.get("Authorization");

  if (token === "your-secure-token") {
    await next();
  } else {
    ctx.response.status = 401;
    ctx.response.body = { error: "Unauthorized" };
  }
};

export default authMiddleware;  // Export as default
