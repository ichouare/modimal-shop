import instanceAPI from "@/axios/instance"
import { useQuery } from "@tanstack/react-query"

type TPayload = {
  title: string | null,
  limit?: number,
  page?: number

}

async function FetchProducts(payload : TPayload){
  try{

    const res = await instanceAPI.get("/product", {
      params: {
        ...payload
      }
    })
    console.log("resuct of getting product", res)
    return res.data

  }catch(err)
  {
    throw new Error("errro", error.message)
  }
}


export const useGetProducts = (payload: TPayload) => {
  return useQuery({
    queryKey: ["products", payload?.title],
    queryFn: () => FetchProducts(payload),
    staleTime: 24 * 60 * 60 * 60,
  })
}