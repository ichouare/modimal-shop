import Filter from '@/components/Filter'
import Product from '@/components/product'
import React from 'react'

function page() {
  return (
    <section className="w-full min-h-screen h-screen max-h-screen overflow-y-auto  noScrollbar flex items-start justify-center">
      <section className="container grid grid-cols-[300px_1fr] gap-x-6  min-h-full w-full">
        <div className="pt-[200px]">
          <Filter />
        </div>
        <div className="bg-sucess  grid grid-cols-2  gap-4 gap-y-8 py-8  ">
          <Product title="Tailored stretch" colors={["#000", "#7DC3EB", "#748C70"]}  description="Turn it up pants" price="180" image="/products/Product_3.png" />
          <Product title="Tailored stretch" colors={["#000", "#7DC3EB", "#748C70"]}  description="Turn it up pants" price="180" image="/products/Product_3.png" />
          <Product title="Tailored stretch" colors={["#000", "#7DC3EB", "#748C70"]}  description="Turn it up pants" price="180" image="/products/Product_3.png" />

        </div>
      </section>

    </section >
  )
}

export default page
