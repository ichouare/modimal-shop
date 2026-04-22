import { TLoginSchema } from "@/types/loginSchema";
import { TSignUpSchema } from "@/types/SignUpSchema";
import { useMutation } from "@tanstack/react-query";
import instanceAPI from "@/axios/instance";





async function userlogin(payload: TSignUpSchema){
    try {
      console.log(process.env.API_URL)
    const data = await instanceAPI.post("/auth", payload)
    return data?.response
  }catch(error :unknown )
  {
    throw new Error(error?.message || "somthing wrong !!")
  }
}



export const useLogin = () => {

  return  useMutation({
    mutationFn: userlogin,
    onSuccess: (data) => {
      console.log("Login success:", data);
    },
    onError: (error: Error) => {
      console.error("Login error:", error.message);
    },

})}