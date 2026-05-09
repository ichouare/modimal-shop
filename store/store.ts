import { TCard, TProduct } from '@/types/CardSchema'

import {TUser}  from "@/types/userSchema"
import { create } from 'zustand'
import { devtools, persist } from "zustand/middleware"



enum Operation  {
  DECREASE,
  INCREASE
}

type TUserStore = {
  user : TUser | null,
  userCard: TProduct[] | [],
  setProduct: (data: TProduct) => void,
  UpdateProductItem: (id: string, opr: Operation) => void,
  removeProduct : (id: string) => void ,
  clearCard: () =>   void,
  numberofProduct : () => void,

}

const useUserStore = create<TUserStore>()(devtools(persist((set, get) => ({
  user: null,
  userCard: [],
  setProduct: (newProduct) => set((state) => ({userCard: [...state.userCard,newProduct ]})),
  UpdateProductItem: (id, opr) =>
  set((state) => ({
    userCard: state.userCard.map((pt) =>
      pt.id === id
        ? {
            ...pt,
            quantity:
              opr === Operation.INCREASE
                ? pt.quantity + 1
                : Math.max(1, pt.quantity - 1),
          }
        : pt
    ),
  })),
  removeProduct: (id) => set(state => ({
    userCard: state.userCard.filter((pt: TProduct) => pt.id !== id)
  })),
  clearCard: () => set(() => ({userCard : []})),
  numberofProduct: () => {
    return get().userCard.length
  }

}),
{
  name: "card store"
}),
 {
  enable: true,
  name: "cart store"
}))