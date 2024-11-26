import Link from "next/link";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";

const FeaturedProducts = () => {
  const colors = ["#ffffff", "#FFDDDD"];

  const featuredProducts = [
    {
      name: "Pizza",
      image: "/foodify.png",
      price: 100,
      rating: 4.5,
    },
    {
      name: "Burger beef burger",
      image: "/foodify.png",
      price: 100,
      rating: 4.5,
    },
    {
      name: "Sandwich",
      image: "/foodify.png",
      price: 100,
      rating: 4.5,
    },
    {
      name: "Spaguetti",
      image: "/foodify.png",
      price: 100,
      rating: 4.5,
    },
  ];

  return (
    <section className="w-full mt-14">
      <ul className="w-full grid xl:grid-cols-4 sm:grid-cols-2 justify-between items-stretch gap-8">
        {featuredProducts.map((feature, index) => (
          <li key={feature.name} className="w-full">
            <Link
              href={feature.name}
              className="w-full h-full flex flex-col justify-center items-center"
            >
              <div className="w-32 h-32 object-contain rounded-full translate-y-1/2 -mt-[4.5rem] bg-white shadow-[0_0_5px_#00000044]">
                <div className="w-full h-full p-3">
                  <div className="w-full h-full bg-white rounded-full shadow-[0_5px_5px_#e8e8e8] border-b-[6px] border-[#d3d3d3aa] rotate-[22deg]">
                    <Image
                      src={feature.image}
                      alt={feature.name}
                      fill
                      className="w-full h-full object-contain scale-105"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: index % 2 === 0 ? colors[0] : colors[1],
                }}
                className="w-full h-[calc(100%-4rem)] pt-20 rounded-2xl text-center font-semibold px-5 pb-3 shadow-lg"
              >
                <p className="text-xl font-bold mb-1 text-black">
                  {feature.name}
                </p>
                <p className="text-base text-gray-600 flex justify-center items-center gap-5">
                  <span className="align-middle">
                    <IoIosStar className="text-orange-500 inline-flex justify-center items-center -mt-1" />{" "}
                    {feature.rating}
                  </span>
                  <span>${feature.price}</span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturedProducts;
