import instanceAPI from "@/axios/instance";
import { TLoginSchema } from "@/types/loginSchema";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";





async function userSignIn(payload: TLoginSchema){
    try {
    const data = await instanceAPI.post("/register", payload)
    return data?.response
  }catch(error :unknown )
  {
    throw new Error(error?.message || "somthing wrong !!")
  }
}



export const useSignIn = () => {

  return  useMutation({
    mutationFn: userSignIn,
    onSuccess: (data) => {
      console.log("Login success:", data);
    },
    onError: (error: Error) => {
      console.error("Login error:", error.message);
    },

})}