"use client"
import React, {  useReducer } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { FilteringItem } from '@/store/data'
import { Checkbox } from './ui/checkbox'
import { Circle, X } from 'lucide-react'
import { Button } from './ui/button'
import useFilterProduct from '@/hooks/useFilterProducts'





const initialState = {
  sortBy: null,
  color: null,
  size: null,
  fabric: null
}

enum actionType  {
    CLEARFILTER,
    REMOVEITEM,
    ADDITEM,
}
const reducer = (state: typeof initialState,
    action: {
  type: actionType,
  value?: { [key: string]: string }
}
)  =>
{
  switch (action.type)  {
    case actionType.ADDITEM :
      {
        console.log(action.value)
        return {...state, ...action.value }
      }
    default :
      return initialState

  }

}
function Filter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {mutate} = useFilterProduct()

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <h3 className="text-black font-heading text">Filters</h3>
      {Object.values(state).filter(item => item !== null).length ?  <div className="w-full h-fit flex flex-col gap-4 ">
        {
          Object.entries(state).filter(([, item]) => item !== null).map(([key, item]) => <span   className="block w-[184px] bg-primary-50 h-[40px]  flex items-center justify-between px-4 " key={key}>
            <p className="bodyLG text-black">
              {item}
            </p>
            <Button onClick={() => dispatch({ type: actionType.ADDITEM, value: { [key]: null } })} size="icon" variant="ghost" className="cursor-pointer">
            <X  className="text-black size-6"/>
            </Button>
            </span>)
          }
        <div className="grid grid-cols-2 grid-flow-col gap-2">
            <Button variant="default" className="max-w-full h-[40px] bg-white text-black border border-black" onClick={
              () => dispatch({
                type: actionType.CLEARFILTER,
              })
            }>
              Clear All Filters
            </Button>
            <Button onClick={() => {
              mutate(state)
            }} className="max-w-full h-[40px] border border-primary">
              applied filters
            </Button>
        </div>

      </div>: null}
      <Accordion className="flex flex-col gap-4" defaultValue={["item-1"]}>
      {
         FilteringItem?.map((item, _) =>
        {
          return (
          <AccordionItem key={_} value={"item-" + _}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-5 my-4">
           {
            item.items.map((val, idx) => {
              if(item.type === "color")
                return <div key={idx} className="flex items-center gap-[15px]">
                  <Checkbox checked={state[item.type] == val.value} onCheckedChange={() => {
                    console.log("here", val.value);
                    dispatch({ type: actionType.ADDITEM, value: { [item.type]: val.value } })
                  }} className="size-4.5" value={val.value} id={item.type} />
                  <Circle fill={val.value}  />
                  <span className="bodyMD">{val.label}</span>
                </div>
              return <div  key={idx} className="flex items-center gap-[15px]">
                  <Checkbox  checked={state[item.type]  == val.value} onCheckedChange={() => {
                    console.log("here", val.value);
                    dispatch({ type: actionType.ADDITEM, value: { [item.type]: val.value } })
                  }} className="size-4.5" value={val.value} id={item.type} />
                  <span className="bodyMD">{val.label}</span>
                </div>
            })
           }
          </AccordionContent>
        </AccordionItem>
        )
        })
      }
      </Accordion>
    </div>
  )
}

export default Filter