import { auth } from "./auth";

import NextAuth from "next-auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth
  console.log("ROUTE:", req.nextUrl.pathname);
  console.log("IS LOGGED IN:", isLoggedIn);
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
