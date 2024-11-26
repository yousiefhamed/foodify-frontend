import { FaRegTrashCan } from "react-icons/fa6";
import ColorfulContainer from "./utils/ColorfulContainer";
import Image from "next/image";

const Wishlist = () => {
  const bgColors = [
    "#FFB5C2",
    "#A09BFF",
    "#FAD2B8",
    "#A6D4FF",
    "#D7A9F1",
    "#68DC9A",
    "#FFB27F",
  ];

  return (
    <section className="w-full flex flex-col justify-center items-start gap-5 px-5 py-3">
      <h3 className="font-bold text-xl">Your Order</h3>
      <ul className="w-full flex flex-col justify-center items-center gap-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <li
            key={i}
            className="w-full grid grid-cols-[15%,20%,50%,15%] justify-between items-center content-center"
          >
            <ColorfulContainer
              bgColor={
                bgColors[Math.floor(Math.random() * bgColors.length - 1)]
              }
            >
              <Image
                src="/foodify.png"
                alt={`food icon`}
                width={300}
                height={300}
                className="w-full h-full object-contain scale-125"
              />
            </ColorfulContainer>
            <p className="text-sm font-bold text-center">
              X {Math.floor(Math.random() * 20)}
            </p>
            <div className="w-full">
              <p className="w-full text-[#A1A5B4] font-semibold truncate">
                Chicken beef with cheese
              </p>
              <p className="font-semibold">$20.00</p>
            </div>
            <button className="w-full flex justify-center items-center pl-1">
              <FaRegTrashCan className="text-2xl hover:text-red-600 transition-colors duration-300" />
            </button>
          </li>
        ))}
      </ul>
      <hr className="w-full h-[1px] bg-gray-100 border-b-4 border-dashed" />
      <div className="w-full flex justify-between items-center">
        <p className="font-bold">Total Amount</p>
        <p className="font-bold">$20.00</p>
      </div>
      <button className="w-full h-12 bg-[#FF6380] text-white rounded-lg font-bold text-lg hover:bg-[#FF6380]/80 transition-colors duration-300 mb-10">
        Checkout
      </button>
    </section>
  );
};

export default Wishlist;
