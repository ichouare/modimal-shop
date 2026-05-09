"use client";
import Product from "@/components/product";
import { useGetProducts } from "@/hooks/useGetProducts";
import { useSearchParams } from "next/navigation";
import Error from "./Error";
function SearchProduct() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  console.log(title);
  const { data, isLoading, isError, error, refetch } = useGetProducts({
    title,
    limit: 5,
    page: 0,
  });

  if (isLoading)
    return (
      <div className=" flex-1 flex  items-center justify-center  ">
        <h3>laoding...</h3>
      </div>
    );
  if (isError) return <Error refetch={() => refetch()} />;
  if (!data.data.total)
    return (
      <div className=" flex-1 flex  items-center justify-center  ">
        <h6>No products found with this title</h6>
      </div>
    );
  return (
    <div className="bg-sucess  grid grid-cols-2  gap-6 gap-y-8 py-8 ">
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
  );
}

export default SearchProduct;
