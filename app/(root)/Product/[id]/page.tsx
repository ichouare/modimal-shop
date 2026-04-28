'use client'

import { useParams } from "next/navigation"



function DetailProduct() {
   const searchParams = useParams()
   console.log(searchParams)
  return (
    <section className="min-h-screen h-screen w-full flex flex-col items-center justify-start ">
      <section className="bg-error h-full container">
        {searchParams?.id}
      </section>
    </section>
  )
}

export default DetailProduct
