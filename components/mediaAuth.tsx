// "use server"
"use client";
import Image from "next/image";
import Link from "next/link";

import { useUser } from "@auth0/nextjs-auth0";

function MediaAuth() {
  const { user, isLoading } = useUser();

  if (isLoading) return <p>Loading...</p>;

  if (user) {
    console.log(user, "-------------<>>>");
  }
  // return user ? (
  //   <div>
  //     <p>Welcome, {user.name}</p>
  //     <a href="/auth/logout">Logout</a>
  //   </div>
  // ) : (
  //   <a href="/auth/login">Login</a>
  // );
  return (
    <div className="flex flex-items gap-[20px]">
      <Link href="/auth/login?connection=google-oauth2">
        <Image src="/google.png" alt="facebook" width={35} height={35} />
      </Link>
      <Link href="/auth/login?connection=google-oauth2">
        <Image src="/facebook.png" alt="facebook" width={35} height={35} />
      </Link>
    </div>
  );
}

export default MediaAuth;
