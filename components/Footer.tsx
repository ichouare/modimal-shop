import React, { useMemo } from 'react'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'

function Footer() {
  const aboutList = useMemo(() => {
    return ["Collection", "Sustainability", "Privacy Policy", "Support System" , "Terms & Condition" , "Copyright Notice"]
  } , [])

    const SupportList = useMemo(() => {
    return ["Orders & Shipping", "Returns & Refunds", "FAQs", "Contact Us"]
  } , [])


    const JoinList = useMemo(() => {
    return ["Modimal Club", "Careers", "Visit Us"]
  } , [])




  return (
    <footer className="w-full  h-auto  flex  bg-gray-700">
      <div className="w-full   flex flex-nowrap  container mx-auto">

      <section className="h-full    py-10">
      <div className="flex items-start justify-between  gap-[20px] lg:gap-[200px]  flex-wrap">


        <div className="lg:w-1/3 flex flex-col gap-[30px]  ">
          <h5 className="text-white">Join our club, get 15% off for your Birthday</h5>
          <form className="flex flex-col gap-[10px]">
          <Input type='email' />
          <div className="flex items-baseline gap-[10px]">
            <Checkbox />
            <p className="text-white overlineSM">By Submittng your email, you agree to receive advertising emails from Modimal.</p>
          </div>
          </form>
        </div>

        <div className="flex-1 flex items-start gap-y-[20px]  lg:gap-[100px] flex-wrap lg:flex-nowrap ">


         <div className="w-1/2 lg:w-1/3 flex flex-col gap-[30px] ">
          <h5 className="text-white">About Modimal</h5>
          <ul className="flex flex-col gap-[15px] items-start">
            {
              aboutList.map((item, index) => <li key={index} className="text-white bodyLG">{item}</li>)
            }
          </ul>
        </div>

        <div className="w-1/2 lg:w-1/3 flex flex-col gap-[30px]">
          <h5 className="text-white">Help & Support</h5>
          <ul className="flex flex-col gap-[15px] items-start">
            {
              SupportList.map((item, index) => <li key={index} className="text-white bodyLG">{item}</li>)
            }
          </ul>
        </div>

        <div className="w-1/2 lg:w-1/3 flex flex-col gap-[30px]">
          <h5 className="text-white">Join Up</h5>
          <ul className="flex flex-col gap-[15px] items-start">
            {
              JoinList.map((item, index) => <li key={index} className="text-white bodyLG">{item}</li>)
            }
          </ul>
        </div>
</div>
 </div>
      </section>

      </div>
    </footer>
  )
}

export default Footer
