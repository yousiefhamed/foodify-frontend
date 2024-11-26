"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const Ads = () => {
  const adsContainer = useRef<HTMLDivElement>(null);

  const ads = [
    "/ad-banners/ad1.jpg",
    "/ad-banners/ad2.jpg",
    "/ad-banners/ad3.jpg",
    "/ad-banners/ad4.jpg",
  ];

  useEffect(() => {
    const adsCount = 4;
    let currentAd = 0;

    if (adsContainer.current) {
      const interval = setInterval(() => {
        if (adsCount === currentAd + 1) {
          currentAd = 0;
          adsContainer.current?.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          currentAd++;
          adsContainer.current!.scrollTo({
            left:
              adsContainer.current!.scrollLeft +
              adsContainer.current!.offsetWidth,
            behavior: "smooth",
          });
        }
      }, 4000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section className="w-full aspect-[3]">
      <div className="w-full h-full rounded-2xl overflow-hidden relative">
        <div
          ref={adsContainer}
          className="w-full h-full flex justify-start items-center absolute top-0 left-0 overflow-scroll no-scrollbar"
        >
          {ads.map((ad) => (
            <div key={ad} className="w-full aspect-[3] grow-0 shrink-0">
              <Image
                src={ad}
                alt="Ads"
                width={1024}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ads;
