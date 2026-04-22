import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'


type Tprops = {
  image: string,
  title: string,
  className?: string,
}
const Collestion = ({image, title, className}: Tprops) => {
  return  <div className={cn("w-full h-full relative", className)}>
        <Image src={image} alt="image" fill className="object-cover w-full h-full" />
        <Button className="bg-white text-black absolute bottom-4 left-4 max-w-[100px] " >
          {title}
        </Button>
    </div>

}


function Collections() {
  return (
    <div className="w-full min-h-[1419px] h-[1419px]  flex flex-col gap-[20px]  ">
      <h4>Collection</h4>
      <section className="w-full h-full grid gap-y-10 gap-x-6  grid-cols-2 grid-rows-3">
          <Collestion image="/collections/pic2.png" title="Boluses"  />
          <Collestion image="/collections/pic1.png" title="Boluses"  className="row-span-2" />
          <Collestion image="/collections/pic3.png" title="Boluses"    className="row-span-2"/>
           <Collestion image="/collections/pic4.png" title="Boluses" />

      </section>
    </div>
  )
}

export default Collections
