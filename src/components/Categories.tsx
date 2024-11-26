import Link from "next/link";
import ColorfulContainer from "./utils/ColorfulContainer";
import { IoFastFoodOutline } from "react-icons/io5";
import { CiPizza } from "react-icons/ci";
import { PiHamburgerBold } from "react-icons/pi";
import { GiRoastChicken, GiSandwich } from "react-icons/gi";
import { LiaVolleyballBallSolid } from "react-icons/lia";
import { TbFish } from "react-icons/tb";
import { MdOutlineOutdoorGrill } from "react-icons/md";
import { BiSushi } from "react-icons/bi";
import Heading from "./utils/Heading";

const Categories = () => {
  const categories = [
    {
      name: "All",
      color: "#FF6380",
      icon: <IoFastFoodOutline className="text-white text-3xl font-bold" />,
    },
    {
      name: "Pizza",
      color: "#50AAFF",
      icon: <CiPizza className="text-white text-3xl font-bold" />,
    },
    {
      name: "Burger",
      color: "#CC77FF",
      icon: <PiHamburgerBold className="text-white text-3xl font-bold" />,
    },
    {
      name: "Sandwich",
      color: "#3EC278",
      icon: <GiSandwich className="text-white text-3xl font-bold" />,
    },
    {
      name: "Spaguetti",
      color: "#FF944F",
      icon: (
        <LiaVolleyballBallSolid className="text-white text-3xl font-bold" />
      ),
    },
    {
      name: "Tuna fish",
      color: "#6A64D4",
      icon: <TbFish className="text-white text-3xl font-bold" />,
    },
    {
      name: "Grill",
      color: "#00B3EB",
      icon: <MdOutlineOutdoorGrill className="text-white text-3xl font-bold" />,
    },
    {
      name: "Sushi",
      color: "#41DFBE",
      icon: <BiSushi className="text-white text-3xl font-bold" />,
    },
    {
      name: "Chicken",
      color: "#FF95A8",
      icon: <GiRoastChicken className="text-white text-3xl font-bold" />,
    },
  ];

  return (
    <section className="w-full h-auto">
      <Heading>Fovourite Food Category</Heading>
      <ul className="w-full flex flex-wrap justify-evenly items-center gap-5 gap-y-12">
        {categories.map((category) => (
          <li key={category.name} className="w-20">
            <Link
              href={
                category.name === "All"
                  ? "/products"
                  : "products?category=" +
                    category.name.toLowerCase().replace(" ", "_")
              }
              className="w-full flex flex-col justify-center items-center gap-2 scale-110"
            >
              <ColorfulContainer bgColor={category.color}>
                {category.icon}
              </ColorfulContainer>
              <p className="font-semibold text-sm">{category.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
