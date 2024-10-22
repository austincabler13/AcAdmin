import { Context } from "https://deno.land/x/oak@v17.1.0/mod.ts";

export const authMiddleware = async (ctx: Context, next: () => Promise<unknown>) => {
  const token = ctx.request.headers.get("Authorization");

  if (token === "your-secure-token") {
    await next();
  } else {
    ctx.response.status = 401;
    ctx.response.body = { error: "Unauthorized" };
  }
};
