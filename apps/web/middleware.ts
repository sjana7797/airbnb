import { authMiddleware } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

// Set the paths that don't require the user to be signed in
const publicPaths = ["/sign-in(.*)", "/sign-up(.*)", "/api(.*)"];

export default authMiddleware({
  publicRoutes: publicPaths,
  afterAuth(auth, req, evt) {
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      const signInUrl = new URL("/sign-in", req.url);
      signInUrl.searchParams.set("redirect_url", req.url);
      return NextResponse.redirect(signInUrl);
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/"],
};
