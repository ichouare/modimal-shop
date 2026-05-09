import Image from "next/image";
import Link from "next/link";

type TImage = {
  url: string;
  title?: string;
};

type THoverContent = {
  cardChoose: {
    [key: string]: string[];
  };
  images: TImage[];
};

type TProps = {
  index: number;
  content: THoverContent;
};

function HoverIem({ content }: TProps) {
  return (
    <div className="container grid grid-flow-col h-full bg-white py-8">
      <div className="flex flex-col gap-7">
        <ul className="flex items-center justify-between">
          {Object.keys(content.cardChoose).map((item) => (
            <li className="bodyLG capitalize w-1/3" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          {Object.values(content.cardChoose).map((item, itemIndex) => {
            return (
              <ul
                className="flex-col! items-start justify-start gap-[20px] h-full w-1/3  "
                key={itemIndex}
              >
                {item.map((subItem, idx) => (
                  <Link key={idx} href={`/${subItem}`}>
                    <li className="bodyLG text-gray-700">{subItem}</li>
                  </Link>
                ))}
              </ul>
            );
          })}
        </div>
      </div>
      <div className="grid grid-flow-col gap-6  ">
        {content.images.map((item, imgIndex) => {
          return (
            <div className=" flex flex-col w-full h-full  gap-6" key={imgIndex}>
              <div className="w-full h-full relative">
                <Image
                  src={item.url as string}
                  alt={item.title || "image"}
                  className=" object-cover"
                  fill
                />
              </div>
              <p className="bodyLG   text-black">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HoverIem;
