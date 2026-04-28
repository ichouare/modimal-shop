import instanceAPI from "@/axios/instance"
import { useMutation } from "@tanstack/react-query"

type Tpayload = {
  [key: string] : string | null
}

async function getFillterProducts(payload: Tpayload)
{

  console.log(payload)
  try{
    const res = await instanceAPI.get("/filter", {
      params: payload,
    });
    return res

  }catch(err : any)
  {
    throw new Error(err?.response?.data?.message || err.message);
  }
}


const useFilterProduct = () => {
  return useMutation({
    mutationFn: getFillterProducts,
    onSuccess : (data) => {
      console.log("fillter product", data)
    },
    onError: (err) => {
      console.log("error messge", err)
    }
  })
}


export default useFilterProduct