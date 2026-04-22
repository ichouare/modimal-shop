
"use Client"


import { LoginSchema, TLoginSchema } from '@/types/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {Input} from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { SignUpSchema, TSignUpSchema } from '@/types/SignUpSchema'
import { useLogin } from '@/hooks/useLogin'
import CostumizeDialog from './costumizeDialog'
import { redirect } from 'next/navigation'
import MediaAuth from './mediaAuth'


type Tprops = {
  setAlreadyHave : (str: boolean) => void
}
function SignUpForm({
setAlreadyHave
}: Tprops) {

    const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({ resolver:  zodResolver(SignUpSchema), })

  const {mutate} = useLogin()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    try {
      const validate_Data = SignUpSchema.parse(data)
      mutate(validate_Data, {
        onSuccess: () => {
          console.log("Login success")
          reset()
          redirect("/")
        },
        onError: (error) => {
          console.error("Login error:", error.message)
        }
      })
    }catch(error)
    {
      console.error("Form validation error:", error)
    }
  })



  const [isopen, setIsopen] = useState(false)




  return (

    <section className="flex flex-col items-center gap-[30px]">
        <h3 className="text-gray-800">Log in</h3>
      <form onSubmit={onSubmit} className="h-full flex flex-col items-center  justify-center gap-[10px] w-[400px] bg-white">
      <div className="w-full flex flex-col items-center  gap-[4px]">
          <Input  className="border-gray-600 w-[392px]" type="email"  {...register("email")} placeholder="Enter Email"/>
          {errors?.email && <p className="bodyXS text-error w-full text-start">* {errors.email.message}</p>}
      </div>
       <div className="w-full flex flex-col items-center  gap-[4px]">
          <Input  className="border-gray-600 w-[392px]" type="password"  {...register("password")} placeholder="Password"/>
          {errors?.password && <p className="bodyXS text-error w-full text-start">* {errors.password.message}</p>}
      </div>
      <div className="w-full flex items-center justify-around  ">
          <Link href="#" className=" text-primary bodySM  w-full">Forgot your password?</Link>

      </div>
      <Button type="submit" variant="default" size="lg" disabled={isSubmitting} className="w-full rounded-none h-[40px] cursor-pointer buttonSM disabled:opacity-50 disabled:cursor-not-allowed">{isSubmitting ? "Logging in..." : "Log in"}</Button>
      </form>
      <div className="w-full flex flex-col items-center justify-center  gap-[20px] px-10">
        <p className="text-base text-black">or</p>
        <MediaAuth />
        <p className=" w-[400px] text-center text-black bodySM">New to modimal?  <span className="text-primary cursor-pointer" onClick={() => setAlreadyHave(false)}> create an account </span>    </p>
      </div>


      {/* success Dialog  */}
      <CostumizeDialog title='welcome to modimal' open={isopen} setIsOpen={setIsopen}>
        <div className="flex-1 h-full  flex flex-col items-center justify-center gap-[40px]">
        <span className="bodyLG"><i>Elegance in simplicity, Earth’s harmony</i></span>
        <h4 className="text-black">is it your first experience on modimal?</h4>
        <Button variant="default" className="buttonLG">create your own style</Button>
        </div>


      </CostumizeDialog>
    </section>
  )
}

export default SignUpForm