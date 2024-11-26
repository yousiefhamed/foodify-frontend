import Ads from "@/components/Ads";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import ProfileInfo from "@/components/ProfileInfo";
import Wishlist from "@/components/Wishlist";

export default function Home() {
  return (
    <div className="w-full h-svh grid md:grid-cols-[100px,auto,350px] grid-cols-1 md:grid-rows-1 grid-rows-[80px,auto]">
      <div className="w-full md:h-svh h-20 md:overflow-auto no-scrollbar">
        <Navbar />
      </div>
      <main className="w-full h-svh overflow-auto no-scrollbar bg-[#f5f5ff] rounded-l-3xl py-5 px-5 flex flex-col justify-start items-center gap-5">
        <Header />
        <Ads />
        <Categories />
        <FeaturedProducts />
        <FeaturedRestaurants />
      </main>
      <div className="w-full h-svh overflow-auto no-scrollbar">
        <ProfileInfo />
        <Wishlist />
      </div>
    </div>
  );
}
