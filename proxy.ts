import { auth0 } from "@/lib/auth0";
import axios from "axios";

export async function proxy(request: Request) {
  const url = request.url
  const cookiesCheck  = request.cookies.get('refreshToken')
  if(url?.includes("/register"))
      return Response.redirect(new URL('/', request.url));
  else if(url?.includes("/payment") && !cookiesCheck)
      return Response.redirect(new URL('/register', request.url));



  const response = await auth0.middleware(request);
  const session = await auth0.getSession();
   if (session?.user) {
    // Check if we already synced this user (avoid duplicate API calls)
      const userSyncCookie = request.cookies.get("user_synced");
      if (!userSyncCookie || userSyncCookie.value !== session.user.sub) {

      try {

        // Send user data to Express backend
        const res =  await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth0`,
          {
            firstName: session?.user?.given_name,
            secondName: session?.user?.family_name,
            email: session?.user?.email,
            avatar: session?.user?.picture
          },
          {
            timeout: 3000
          }
        );

        if(res?.status == 200){
          const cookies = res?.headers?.["set-cookie"];
          if (cookies) {
            cookies.forEach((item: string) => {
              const [name, token] = item.split("=");
              if (name === "accessToken") {
                response.cookies.set(name, token, {
                  maxAge: 15 * 60,
                  path: "/",
                  httpOnly: true,
                  sameSite: "lax",
                });
              } else {
                response.cookies.set(name, token, {
                  maxAge: 60 * 60 * 24,
                  path: "/",
                  httpOnly: true,
                  sameSite: "lax",
                });
              }
            });
          }
          response.cookies.set("user_synced", session.user.sub, {
              maxAge: 60 * 60 * 24, // 24 hours
              path: "/",
              httpOnly: true,
              sameSite: "lax",
    });
        }


        // Mark this user as synced

      } catch (error) {
        console.error("Failed to sync user in middleware:", error);
      }
    }
    }



  return response

}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};