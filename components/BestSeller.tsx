import React from 'react'
import Product from './product'

function BestSeller() {
  return (
    <section className="flex flex-col gap-[20px]">
      <h4>Best Sellers</h4>
    <div className="w-full  flex items-center justify-center gap-[30px] ">

      <Product title="Tailored stretch" colors={["#000", "#7DC3EB", "#748C70"]}  description="Turn it up pants" price="180" image="/products/product_2.png" />
            <Product title="Tailored stretch" colors={["#000", "#7DC3EB", "#748C70"]}  description="Turn it up pants" price="180" image="/products/Product_1.png" />

      <Product title="Tailored stretch" colors={["#000", "#7DC3EB", "#748C70"]}  description="Turn it up pants" price="180" image="/products/Product_3.png" />
    </div>
    </section>
  )
}

export default BestSeller
