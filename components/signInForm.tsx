"use client"
import { LoginSchema, TLoginSchema } from '@/types/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {Input} from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import { useSignIn } from '@/hooks/useSignIn'
import CostumizeDialog from './costumizeDialog'
import MediaAuth from './mediaAuth'


type Tprops = {
  setAlreadyHave : (str: boolean) => void
}
function SignInForm({
  setAlreadyHave
}: Tprops) {

  const [isopen, setIsopen] = useState(false)


  const {mutate} = useSignIn()

    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TLoginSchema>({ resolver:  zodResolver(LoginSchema), })




  const onSubmit = handleSubmit((data) => {
    try{
      const valide_data = LoginSchema.parse(data)
      // setIsopen(true)
      mutate(valide_data, {
        onSuccess: () => {
          setIsopen(true)
          reset()
        },
        onError: (error) => {
          console.log("here", error)
        }
      })

    }catch(err)
    {
      console.log("error", err)
    }
  })

  return (

    <section className="flex flex-col items-center gap-[30px]">
        <h3 className="text-gray-800">Create Account</h3>
      <form onSubmit={onSubmit} className="h-full flex flex-col items-center  justify-center gap-[10px] w-[400px] bg-white">
      <div className="w-full flex flex-col items-center  gap-[4px]">
          <Input  className="border-gray-600 w-[392px]" type="text"  {...register("firstName")} placeholder="Your first Name"/>
          {errors?.firstName && <p className="bodyXS text-error w-full text-start">* {errors.firstName.message}</p>}
      </div>
       <div className="w-full flex flex-col items-center  gap-[4px]">
          <Input  className="border-gray-600 w-[392px]" type="text"  {...register("secondName")} placeholder="Your Second Name"/>
          {errors?.secondName && <p className="bodyXS text-error w-full text-start">* {errors.secondName.message}</p>}
      </div>
       <div className="w-full flex flex-col items-center  gap-[4px]">
          <Input  className="border-gray-600 w-[392px]" type="email"  {...register("email")} placeholder="Your Email"/>
          {errors?.email && <p className="bodyXS text-error w-full text-start">* {errors.email.message}</p>}
      </div>
      <div className="w-full flex flex-col items-center  gap-[4px]">
          <Input  className="border-gray-600 w-[392px]" type="password"  {...register("password")} placeholder="Your Email"/>
          {errors?.password && <p className="bodyXS text-error w-full text-start">* {errors.password.message}</p>}
      </div>
      <Button type="submit" variant="default" size="lg" className="w-full rounded-none h-[40px] cursor-pointer buttonSM bg-black">Register Now</Button>
      <div className="w-full flex items-center justify-around  ">
          <p className=" text-black bodySM text-center">Already have an account?</p>
          <p className=" text-primary cursor-pointer buttonSM" onClick={() => setAlreadyHave(true)}>Log in</p>
      </div>
      </form>
      <div className="w-full flex flex-col items-center justify-center  gap-[20px] px-10">
        <p className="text-base text-black">or</p>
        <MediaAuth />
        <p className=" w-[400px] text-center text-black bodySM">by clicking register now’’you agree to <Link href="#" className="text-primary"> terms& conditions </Link>  and <Link href="#" className="text-primary"> privacy policy </Link>.  </p>
      </div>


        {/* success Dialog  */}
      <CostumizeDialog title='verify your email address' open={isopen} setIsOpen={setIsopen}>
        <div className="flex-1 h-full  flex flex-col items-center justify-center gap-[40px]">
        <span className="bodyLG">We’ve sent an email to nina@gmail.com to verify your email address and activate your account. the link in the email will expire in 24 hours.</span>
        <span className="text-black bodyLG"> <span className="text-primary cursor-pointer   font-bold">Click here</span> if you did not receive an email or would like to change the email address you registered with</span>

        </div>


      </CostumizeDialog>
    </section>
  )
}

export default SignInForm