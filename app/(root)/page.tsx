"use client";
import BestSeller from "@/components/BestSeller";
import Collections from "@/components/Collections";
import Followus from "@/components/Followus";
import Hero from "@/components/hero";
import Sustainability from "@/components/Sustainability";

function LandingPage() {
  return (
    <section className="w-full min-h-screen h-auto flex flex-col  gap-15 items-center justify-center  ">
      <Hero />
      <section className="container h-auto  flex flex-col gap-15 ">
        <BestSeller />
        <Collections />
      </section>
      <Sustainability />
      <section className="container h-auto  flex flex-col gap-15 ">
        <Followus />
      </section>
    </section>
  );
}

export default LandingPage;
