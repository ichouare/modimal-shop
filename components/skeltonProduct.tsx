import React from "react";

function SkeltonProduct() {
  return (
    <div className="flex items-center justify-start">
      <div className="flex flex-col gap-4 w-[300px] h-[400px] animate-pulse  p-4 opacity-5">
        <div className=" flex-1 rounded bg-gray-300  "></div>
        <div className="flex flex-col gap-4">
          <div className="w-[100px] h-[5px] bg-gray-300"></div>
          <div className="w-[100px] h-[5px] bg-gray-300"></div>
          <div className="w-[50px] h-[5px] bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}

export default SkeltonProduct;
