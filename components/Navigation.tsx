import Image from 'next/image'
import React, { useMemo } from 'react'
import { Button } from './ui/button'
import { Handbag, Heart, Menu, Search, User } from 'lucide-react'

function Navigation() {
  const navlinks = useMemo(() => {
   return  ["Collection", "New In", "Modiweek", "Plus Size", "Sustainability"]
  }, [])
  return (
    <div className="w-full h-[60px] flex items-center justify-center bg-white ">
    <nav className="h-full flex items-center  justify-between  container " >

       <ul className="gap-[0px] lg:hidden " >
         <Button variant="link" size="lg" className="cursor-pointer size-8 ">
            <Menu />
         </Button>
        <Button variant="link" size="icon-lg" className="cursor-pointer ">
            <Search   className="text-gray-800"/>
        </Button>
      </ul>
      <Image src="/Logo.png" alt=""  width={200} height={100} />

        <ul className="lg:flex items-center justify-center  h-full gap-[40px] w-[648px] hidden">

        {
          navlinks.map((item, index) => <li key={index} className="bodyLG text-gray-700 cursor-pointer">{item}</li>)
        }
        </ul>
      <ul className="gap-[10px]  " >
        <Button variant="link" size="icon-lg" className="cursor-pointer hidden lg:block">
            <Search   className="text-gray-800"/>
        </Button>

        <Button variant="link" size="icon-lg" className="cursor-pointer hidden lg:block">
            <User  className="text-gray-800" />
        </Button>
        <Button variant="link" size="icon-lg" className="cursor-pointer ">
            <Heart  className="text-gray-800" />
        </Button>

        <Button variant="link" size="icon-lg" className="cursor-pointer" >
            <Handbag  className="text-gray-800" />
        </Button>
      </ul>
    </nav>
     </div>
  )
}

export default Navigation
