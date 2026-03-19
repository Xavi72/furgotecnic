/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

export default function HomepageHero({ dict }: { dict: any }) {
  const [currentSlide, setCurrentSlide] = useState<"slide_1" | "slide_2">(
    "slide_1",
  );

  // change slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === "slide_1" ? "slide_2" : "slide_1"));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero" className="flex flex-col w-full h-auto relative">
      <div
        id="slide_1"
        className={`absolute top-0 flex flex-col w-full h-auto justify-center items-center relative ${currentSlide === "slide_1" ? "opacity-100 flex duration-200 transition-opacity" : "opacity-0 hidden duration-200 transition-opacity"} z-0`}
      >
        <div className="flex flex-col w-full h-[400px] lg:h-[600px] relative">
          <img
            src={dict.homepage.hero.slide_1.img}
            alt={dict.homepage.hero.slide_1.img_alt}
            className="flex w-full h-full min-h-[400px] object-cover object-top"
          />
          <div className="absolute bottom-0 left-0 right-0 flex flex-col w-full h-full min-h-[200px] justify-center items-center">
            <h1 className="text-2xl md:text-6xl font-bold text-white text-center">
              {dict.homepage.hero.slide_1.title[0]}
            </h1>
            <h1 className="text-2xl md:text-4xl font-bold text-white text-center ">
              {dict.homepage.hero.slide_1.title[1]}
            </h1>
          </div>
          <div className="absolute bottom-4 flex w-full h-auto justify-center gap-4 z-20">
            <div
              className={`${currentSlide === "slide_1" ? "bg-white" : "bg-gray-400"} w-2 h-2 rounded-full cursor-pointer active:scale-95`}
              onClick={() => setCurrentSlide("slide_1")}
            ></div>
            <div
              className={`${currentSlide === "slide_2" ? "bg-white" : "bg-gray-400"} w-2 h-2 rounded-full cursor-pointer active:scale-95`}
              onClick={() => setCurrentSlide("slide_2")}
            ></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1280px] h-auto p-4 gap-4 z-0">
          <div className="flex flex-col w-full h-36 bg-gray-900/10 rounded-sm overflow-hidden relative transition-transform duration-300 cursor-pointer active:scale-95">
            <div className="flex w-full h-full justify-center relative">
              <img
                src={dict.homepage.hero.slide_1.add_1.img}
                alt={dict.homepage.hero.slide_1.add_1.img_alt}
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute top-0 left-0 flex flex-col w-full h-full justify-center items-center px-4">
                <p className="flex w-auto px-2 items-center text-center text-base sm:text-xl text-black font-bold text-shadow-xs text-shadow-white/0 backdrop-blur-sm">
                  {dict.homepage.hero.slide_1.add_1.title}
                </p>
                <p className="flex w-auto items-center text-center text-xl sm:text-3xl text-primary font-black text-shadow-xs text-shadow-black/0 backdrop-blur-[2px] ">
                  {dict.homepage.hero.slide_1.add_1.price}
                </p>
                <p className="flex w-auto items-center text-center text-[10px] sm:text-xs text-white font-bold backdrop-blur-[6px] ">
                  {dict.homepage.hero.slide_1.add_1.price_comment}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-36 bg-gray-900/10 rounded-sm cursor-pointer active:scale-95">
            <div className="flex flex-row w-full h-full justify-around px-4 gap-4">
              <div className="flex flex-col w-auto min-w-[150px] shrink-0 h-auto justify-center ">
                <p className="flex w-auto text-center text-base sm:text-xl text-black font-bold text-shadow-xs text-shadow-white/0 backdrop-blur-sm">
                  {dict.homepage.hero.slide_1.add_2.title}
                </p>
                {dict.homepage.hero.slide_1.add_2.items.map(
                  (item: string, index: number) => (
                    <div
                      key={index}
                      className="flex flex-row w-auto h-auto ml-4 gap-2 items-center"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <p className="text-sm text-secondary">{item}</p>
                    </div>
                  ),
                )}
              </div>
              <div className="flex flex-col w-auto h-auto justify-center items-center px-4">
                <p className="flex w-auto items-center text-center text-xl sm:text-3xl md:text-2xl lg:text-3xl text-primary font-black text-shadow-xs text-shadow-black/0">
                  {dict.homepage.hero.slide_1.add_2.price}
                </p>
                <p className="flex w-auto text-center text-[10px] sm:text-xs text-black font-bold">
                  {dict.homepage.hero.slide_1.add_2.price_comment}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="slide_2"
        className={`absolute top-0 flex flex-col w-full h-auto justify-center items-center relative ${currentSlide === "slide_2" ? "opacity-100 flex duration-200 transition-opacity" : "opacity-0 hidden duration-200 transition-opacity"} z-0`}
      >
        <div className="flex flex-col w-full h-[400px] lg:h-[600px] relative">
          <img
            src={dict.homepage.hero.slide_2.img}
            alt={dict.homepage.hero.slide_2.img_alt}
            className="flex w-full h-full min-h-[400px] object-cover object-center grayscale"
          />
          <div className="absolute bottom-0 left-0 right-0 flex flex-col w-full h-full min-h-[200px] justify-center items-center">
            <h1 className="text-2xl md:text-6xl font-bold text-white text-center">
              {dict.homepage.hero.slide_2.title[0]}
            </h1>
            <h1 className="text-2xl md:text-4xl font-bold text-white text-center ">
              {dict.homepage.hero.slide_2.title[1]}
            </h1>
          </div>
          <div className="absolute bottom-4 flex w-full h-auto justify-center gap-4 z-20">
            <div
              className={`${currentSlide === "slide_1" ? "bg-white" : "bg-gray-400"} w-2 h-2 rounded-full cursor-pointer active:scale-95`}
              onClick={() => setCurrentSlide("slide_1")}
            ></div>
            <div
              className={`${currentSlide === "slide_2" ? "bg-white" : "bg-gray-400"} w-2 h-2 rounded-full cursor-pointer active:scale-95`}
              onClick={() => setCurrentSlide("slide_2")}
            ></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1280px] h-auto p-4 gap-4 z-0">
          <div className="flex flex-row w-full h-36 justify-between gap-4 rounded-sm overflow-hidden relative transition-transform duration-300 cursor-pointer active:scale-95">
            <div className="flex flex-col w-auto  h-auto pl-4 sm:pl-8 justify-center bg-gradient-to-r from-gray-900/10 to-transparent ">
              <p className="flex w-auto text-center text-base sm:text-xl text-black font-bold text-shadow-xs text-shadow-white/0 backdrop-blur-sm">
                {dict.homepage.hero.slide_2.add_1.title}
              </p>

              <p className="flex w-auto items-start text-left text-xl sm:text-3xl md:text-2xl lg:text-3xl text-primary font-black text-shadow-xs text-shadow-black/0">
                {dict.homepage.hero.slide_2.add_1.price}
              </p>
              <p className="flex w-auto text-left text-[10px] sm:text-xs text-black font-bold">
                {dict.homepage.hero.slide_2.add_1.price_comment}
              </p>
            </div>
            <div className="flex w-auto h-full justify-end relative pr-0 lg:pr-8 overflow-hidden">
              <img
                src={dict.homepage.hero.slide_2.add_1.img}
                alt={dict.homepage.hero.slide_2.add_1.img_alt}
                className="w-full h-full object-contain grayscale"
              />
            </div>
          </div>
          <div className="flex flex-col w-full h-36 bg-gray-900/10 rounded-sm cursor-pointer active:scale-95">
            <div className="flex flex-row w-full h-full justify-around px-4 gap-4">
              <div className="flex flex-col w-auto min-w-[150px] shrink-0 h-auto justify-center ">
                <p className="flex w-auto text-center text-base sm:text-xl text-black font-bold text-shadow-xs text-shadow-white/0 backdrop-blur-sm">
                  Kits para furgo compact
                </p>
                <div className="flex flex-row w-auto h-auto ml-4 gap-2 items-center">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="text-sm text-secondary">Cama desplegable</p>
                </div>
                <div className="flex flex-row w-auto h-auto ml-4 gap-2 items-center">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="text-sm text-secondary">Mesa abatible</p>
                </div>
                <div className="flex flex-row w-auto h-auto ml-4 gap-2 items-center">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="text-sm text-secondary">Cajones laterales</p>
                </div>
                <div className="flex flex-row w-auto h-auto ml-4 gap-2 items-center">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="text-sm text-secondary">Sin homologación</p>
                </div>
              </div>
              <div className="flex flex-col w-auto h-auto justify-center items-center px-4">
                <p className="flex w-auto items-center text-center text-xl sm:text-3xl md:text-2xl lg:text-3xl text-primary font-black text-shadow-xs text-shadow-black/0">
                  A partir de 749,00€
                </p>
                <p className="flex w-auto text-center text-[10px] sm:text-xs text-black font-bold">
                  IVA & montaje incluidos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
