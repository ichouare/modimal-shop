import Filter from "@/components/Filter";
import SearchProduct from "@/components/SearchProduct";

function Index() {
  return (
    <section className="w-full min-h-screen h-screen max-h-screen overflow-y-auto  noScrollbar flex items-start justify-center">
      <section className="container grid grid-cols-[392px_1fr] gap-x-10  min-h-full w-full">
        <div className="pt-[100px]">
          <Filter />
        </div>
        <SearchProduct />
      </section>
    </section>
  );
}

export default Index;
