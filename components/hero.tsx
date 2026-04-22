import { Button } from "./ui/button"


function Hero() {
  return (
  <section className="hero  h-[551px]    lg:min-h-[600px]  lg:h-[600px] w-full  border   text-primary " >
    <div className="container mx-auto   w-full h-full flex flex-col justify-end py-10 gap-10   ">
        <h3 className="w-[250px] lg:w-[350px] text-black leading-10">Elegance in simplicity, Earth’s harmony</h3>
        <Button className="bg-white max-w-[184px] h-[40px] text-black">New In</Button>
    </div>
  </section>
  )
}

export default Hero