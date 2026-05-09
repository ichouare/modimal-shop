"use client";
import { motion } from "motion/react";
import React from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

type Tprops = {
  setIsCheckCard: React.Dispatch<React.SetStateAction<boolean>>;
};
function Card({ setIsCheckCard }: Tprops) {
  const router = useRouter();
  return (
    <motion.section
      initial={{
        y: 5,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.2,
        ease: "linear",
      }}
      className="absolute shadow top-[100%] transition  px-4 py-6 w-[392px] h-[660px]  bg-white flex flex-col items-center gap-10 "
    >
      <Button
        className="self-end"
        variant="ghost"
        size="icon"
        onClick={(e) => {
          e.stopPropagation();
          setIsCheckCard(false);
        }}
      >
        <X className="size-6 text-black" />
      </Button>
      <div className="flex-1 w-[232px]  flex flex-col items-center justify-center gap-20">
        <div className=" w-full  flex flex-col items-center gap-5">
          <h6 className="text-black">Your shopping bag is empty</h6>
          <p className="bodySM w-full text-wrap">
            discover modimal and add products to your Bag
          </p>
        </div>
        <div className="w-full flex flex-col items-center gap-4">
          <Button
            onClick={() => router.push("/Collection")}
            className=" w-full lg:w-full border-0"
            variant="default"
          >
            Collection
          </Button>
          <Button className=" w-full lg:w-full border-0" variant="default">
            New In
          </Button>
          <Button className=" w-full lg:w-full border-0" variant="default">
            Best Sellers
          </Button>
        </div>
      </div>
    </motion.section>
  );
}

export default Card;
