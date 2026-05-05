import Product from "@/components/product";
import React from "react";

function Favorit() {
  const len = 1;
  return (
    <section className="w-full min-h-screen h-screen flex flex-col items-center justify-between ">
      <div className="container h-full  p-4 flex flex-col items-center gap-6">
        <h5 className="text-black">My Wish List</h5>
        <p className="bodyMD text-black"> {len} items </p>
        <div className=" w-full flex-1">
          <Product
            title="Tailored stretch"
            colors={["#000", "#7DC3EB", "#748C70"]}
            description="Turn it up pants"
            price="180"
            image="/products/Product_3.png"
          />
        </div>
      </div>
    </section>
  );
}

export default Favorit;
