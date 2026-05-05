import React from "react";
import { Button } from "./ui/button";

function Sustainability() {
  return (
    <section
      className="w-full Sustainability h-[526px] flex items- justify-center  p-5 py-10
    "
    >
      <div className="container h-full flex items-end justify-end  ">
        <div className="flex flex-col  gap-[11px] ">
          <p className="bodyXL w-[495px]">
            Stylish sustainability in clothing promotes eco-friendly choices for
            a greater future
          </p>
          <Button className="bg-white text-black self-end max-w-[120px]    mr-10 ">
            Sustainability
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Sustainability;
