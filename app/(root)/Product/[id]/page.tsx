"use client";

import { Circle, Heart, Van } from "lucide-react";
import { useParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

function DetailProduct() {
  const searchParams = useParams();
  console.log(searchParams);
  const image = [
    "/products/Product_1.png",
    "/products/product_2.png",
    "/products/Product_3.png",
    "/products/Product_3.png",
  ];
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <section className="min-h-screen h-auto w-full flex flex-col items-center justify-start ">
      <section className="h-full container">
        <div className="grid grid-cols-2   gap-8">
          <div className="w-full h-[512px] grid grid-cols-[150px_1fr] ">
            <div className=" flex flex-col items-start  overflow-x-hidden overflow-y-scroll">
              {image.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt="product"
                  className={cn(
                    "cursor-pointer opacity-40",
                    index === imageIndex && "opacity-100",
                  )}
                  width={150}
                  height={160}
                  onClick={() => setImageIndex(index)}
                />
              ))}
            </div>
            <div className=" relative">
              <Image
                src={image[imageIndex]}
                alt="product"
                className="w-full h-full object-cover"
                fill
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-10">
            <h3 className="text-gray-800 font-semibold">Wrap Top</h3>
            <p className="bodyLG text-black">
              Versatile and universally flattering, our wrap blouse can be tied,
              draped, snapped and wrapped multiple ways.
            </p>
            <div className="flex flex-col gap-3">
              <p className="buttonLG">Colors</p>
              <div>
                <Circle fill="red" className="border-0 " />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="self-end buttonLG">Size Guide</p>
              <div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Button
                variant="default"
                className="min-w-full bg-primary-600 h-10"
              >
                Add To Card
              </Button>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Van className="text-gray-500" />
                <p className="buttonSM text-gray-500">Easy Return</p>
              </div>
              <div className="flex items-center gap-4">
                <Heart className="text-gray-500" />
                <p className="buttonSM text-gray-500">Add To Wish List</p>
              </div>
            </div>
          </div>

          <div className="w-full h-[512px] bg-transparent"></div>
          <div className="w-full h-fit  p-[16px] flex flex-col gap-6 bg-primary-25">
            <div className="border-b py-4 border-black">
              <p className="bodyXL">Skill</p>
            </div>
            <p className="bodyLG">
              This material is our signature high-stretch fabric that drapes
              like silk and is soft to the touch. Silk is OEKO-TEX® certified
              and made in Italy in a mill 100% powered by renewable energy
              (solar and biomass)
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default DetailProduct;
