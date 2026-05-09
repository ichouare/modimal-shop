"use client";
import { useGetProducts } from "@/hooks/useGetProducts";
import Product from "./product";
import SkeltonProduct from "./skeltonProduct";
import { Button } from "./ui/button";

function BestSeller() {
  const { data, isLoading, isError, error, refetch } = useGetProducts();
  console.log("-------->", data);
  if (isLoading)
    return (
      <section className="flex flex-col gap-[20px]">
        <h4>Best Sellers</h4>
        <div className="w-full  flex items-center justify-start gap-[30px] ">
          <SkeltonProduct />
          <SkeltonProduct />
        </div>
      </section>
    );
  if (isError) {
    return (
      <section className="flex min-h-[400px] flex-col gap-[20px]">
        <h4>Best Sellers</h4>
        <div className="w-full   flex-1 flex flex-col  items-center justify-center gap-[30px] ">
          <p className="text-error bodyLG">Ops somithing Error</p>
          <Button className="w-[200px]">Try Again</Button>
        </div>
      </section>
    );
  }
  return (
    <section className="flex flex-col gap-[20px]">
      <h4>Best Sellers</h4>
      <div className="w-full  flex items-center justify-center gap-[30px] ">
        {data.data.items.map((item: any, _: number) => (
          <Product
            key={_}
            title={item?.title}
            variants={item.images}
            currency={item.currency}
            description={item?.description}
            price={item?.price}
            image={item.images[0].thumbnail}
          />
        ))}
      </div>
    </section>
  );
}

export default BestSeller;
