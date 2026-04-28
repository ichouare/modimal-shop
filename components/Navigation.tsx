"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Handbag, Heart, Menu, Search, User } from 'lucide-react'
import HoverIem from './hoverIem'
import { hoverContentData, navLinks } from '@/store/data'
import SearchInput from '@/SearchInput'



// Hover content data structure


function Navigation() {




  const [navContent, setNavContent] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  return (
    <div className="relative w-full h-[60px] flex items-center justify-center bg-white ">
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
        <ul onMouseLeave={() => setNavContent(false)}  className="lg:flex items-center justify-center  h-full gap-[40px] w-[648px] hidden">

        {
          navLinks?.map((item, index) => <li key={index} className="bodyLG text-gray-700 cursor-pointer" onMouseEnter={() => {setNavContent(true); setSelectedIndex(index)}} >{item}</li>)
        }

        {navContent && selectedIndex !== null && <div className="absolute shadow-2xl top-full left-0 z-50 right-0 h-[500px] animate-in  flex items-center justify-center bg-white">
            <HoverIem index={selectedIndex} content={hoverContentData[selectedIndex]} />
        </div>}
        </ul>

      <ul className="gap-[10px]  " >
        {/* search button */}
        <Button variant="link"
         onMouseEnter={() => {setIsSearchOpen(true)}}
        onClick={(e) => {
          e.stopPropagation();
          setIsSearchOpen(prev => !prev)}
        }


          size="icon-lg" className="cursor-pointer hidden lg:block">
            <Search   className="text-gray-800"/>
            { isSearchOpen &&  <SearchInput setIsSearchOpen={setIsSearchOpen} /> }
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
