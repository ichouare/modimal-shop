import { Search, X } from "lucide-react";

import { searchSchema, TSearchSchema } from "@/types/searchShema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "./components/ui/input";
import React from "react";
import { useGetProducts } from "./hooks/useGetProducts";

function SearchInput({
  setIsSearchOpen,
}: {
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<TSearchSchema>({ resolver: zodResolver(searchSchema) });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
    setIsSearchOpen(false);
    router.push(`/Product?title=${data.query}`);
  });
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="h-[80px] absolute shadow-2xl z-50 bg-white top-full px-10 py-4 left-0 right-0 border"
    >
      <form onSubmit={onSubmit}>
        <div className="w-full flex items-center border-b-1 border-gray-400">
          <Search className="text-gray-800" />
          <Input
            placeholder="Search"
            className="border-0 flex-1"
            type="text"
            {...register("query")}
          />
          {isValid ? (
            <span onClick={() => reset()}>
              <X fill="#FFEE11" />
            </span>
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default SearchInput;
