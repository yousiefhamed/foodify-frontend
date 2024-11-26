import Image from "next/image";
import Link from "next/link";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import Heading from "./utils/Heading";

const FeaturedRestaurants = () => {
  const featuredRestaurants = [
    {
      name: "Santoor Restaurant",
      image: "/restaurants/rest1.jpg",
      city: "Melborn City",
      rating: 2.5,
    },
    {
      name: "Chimney Restaurant",
      image: "/restaurants/rest2.jpg",
      city: "Melborn City",
      rating: 4.5,
    },
    {
      name: "Sajna Restaurant",
      image: "/restaurants/rest3.jpg",
      city: "Melborn City",
      rating: 4.5,
    },
    {
      name: "Sushi Palace",
      image: "/restaurants/rest4.jpg",
      city: "Melborn City",
      rating: 4.5,
    },
  ];

  return (
    <section className="w-full mt-14">
      <Heading>Favourite Restaurants</Heading>
      <ul className="w-full grid [@media_(min-width:1920px)]:grid-cols-4 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between items-stretch gap-8">
        {featuredRestaurants.map((feature) => (
          <li key={feature.name} className="w-full max-w-[450px] mx-auto">
            <Link
              href={feature.name}
              className="w-full flex justify-evenly items-center relative"
            >
              <div className="w-28 aspect-[6/8] rounded-2xl overflow-hidden absolute -top-3 left-4">
                <Image
                  src={feature.image}
                  alt={feature.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full min-h-[9.333rem] flex flex-col justify-center items-start gap-1">
                <div className="w-full mt-auto pl-36 bg-white rounded-lg shadow-lg py-5 pr-5 flex flex-col gap-1">
                  <h3 className="w-full text-lg font-bold truncate">
                    {feature.name}
                  </h3>
                  <p className="w-full text-gray-500 font-semibold truncate">
                    {feature.city}
                  </p>
                  <p className="w-full text-lg font-semibold">
                    {feature.rating}{" "}
                    {Array.from({ length: 5 }).map((_, index) =>
                      index + 1 <= feature.rating ? (
                        <IoIosStar
                          key={index}
                          className={
                            "inline-block -mt-1 fill-orange-500 mr-[2px]"
                          }
                        />
                      ) : index + 1 - feature.rating < 1 ? (
                        <IoIosStarHalf
                          key={index}
                          className={
                            "inline-block -mt-1 fill-orange-500 mr-[2px]"
                          }
                        />
                      ) : (
                        <IoIosStarOutline
                          key={index}
                          className={
                            "inline-block -mt-1 fill-orange-500 mr-[2px]"
                          }
                        />
                      )
                    )}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturedRestaurants;
