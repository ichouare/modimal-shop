"use client";
import SignInForm from "@/components/signInForm";
import SignUpForm from "@/components/SignUpForm";
import React, { useState } from "react";

export default function LoginForm() {
  const [alreadyHave, setAlreadyHave] = useState(false);
  return (
    <div className=" w-full h-full flex items-center justify-center">
      {alreadyHave ? (
        <SignUpForm setAlreadyHave={setAlreadyHave} />
      ) : (
        <SignInForm setAlreadyHave={setAlreadyHave} />
      )}
    </div>
  );
}
