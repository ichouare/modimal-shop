import Image from "next/image";
import React from "react";

function Followus() {
  return (
    <section className=" w-full h-full flex flex-col gap-5">
      <h4>Follow us @modimal</h4>
      <section className="w-full h-[751px] grid grid-flow-col">
        <div className="w-full h-full relative">
          <Image
            src="/Followus/pic_1.png"
            alt="image"
            className="object-fill"
            fill
          />
        </div>
        <section className="grid grid-cols-2 grid-rows-2">
          <div className="w-full h-full relative">
            <Image
              src="/Followus/pic_5.png"
              alt="image"
              className="object-fill"
              fill
            />
          </div>
          <div className="w-full h-full relative">
            <Image
              src="/Followus/pic_3.png"
              alt="image"
              className="object-fill"
              fill
            />
          </div>
          <div className="w-full h-full relative">
            <Image
              src="/Followus/pic_1.png"
              alt="image"
              className="object-fill"
              fill
            />
          </div>
          <div className="w-full h-full relative">
            <Image
              src="/Followus/pic_2.png"
              alt="image"
              className="object-fill"
              fill
            />
          </div>
        </section>
      </section>
    </section>
  );
}

export default Followus;
