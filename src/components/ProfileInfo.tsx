import Image from "next/image";

const ProfileInfo = () => {
  return (
    <div className="w-full h-20 flex items-center justify-start gap-3 px-5 border-b border-gray-100 rounded-3xl">
      <Image
        src="/profile.jpg"
        alt="Profile"
        width={200}
        height={200}
        className="w-12 h-1w-12 rounded-full object-cover bg-white flex items-center justify-center border-2 border-[#261d56]"
      />
      <h1 className="text-lg font-bold truncate">
        Youssef Hamed Helmy Hussain
      </h1>
    </div>
  );
};

export default ProfileInfo;
