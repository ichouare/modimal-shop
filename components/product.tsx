import { Circle, Heart } from 'lucide-react'
import Image from 'next/image'


type Tprops = {
  title: string,
  description: string,
  price: string,
  image: string,
  colors: string[]

}

function Product({image, title, description, colors, price}: Tprops) {
  return (
    <article className="w-[152px] md:w-[450px]  flex flex-col gap-[10px]  ">
      <div className="w-full h-[213px] lg:h-[436px] relative ">
        <Image src={image} alt="prodcut" className="w-full h-full object-cover" fill  />
        <Heart className="absolute right-6 top-4 text-black" fill="#FFF"  />
      </div>
      <div className="text-black flex ">
          <div className="w-full flex flex-col  gap-[10px]">
        <h6>{title}</h6>
        <div className="flex items-center justify-between">
        <p className="">{description}</p>
          <h6>{price}$</h6>
          </div>
        <ul className="flex items-center justify-start gap-[10px]">
          {
            colors?.map((item, index) => <Circle key={index}  fill={`${item}`} className="border-0 " />)
          }
        </ul>
          </div>
      </div>
    </article>
  )
}

export default Product
