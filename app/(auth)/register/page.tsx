
import Image from 'next/image'
import LoginForm from './loginForm'


function Login() {

  return (
    <section className="w-full h-[900px] flex items-center justify-center  overflow-x-hidden">
      <div className="container  flex flex-col gap-[10px] lg:flex-row items-center h-full bg-white py-[40px]">
        <div className="relative h-full w-full lg:w-[600px]">
          <Image src="/login-pic.png" alt="login" fill className="object-cover hidden lg:block"/>
           <Image src="/login-image-mobile.png" alt="login" fill className="object-cover block lg:hidden"/>
        </div>
        <div className="h-full flex-1 flex flex-col items-center ">
          <LoginForm />
        </div>
      </div>


    </section>
  )
}

export default Login
