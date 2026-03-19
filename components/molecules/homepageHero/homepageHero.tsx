/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

export default function HomepageHero({ dict }: { dict: any }) {
  const [currentSlide, setCurrentSlide] = useState<"slide_1" | "slide_2">(
    "slide_1",
  );

  // change slide every 2 seconds
  /*   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === "slide_1" ? "slide_2" : "slide_1"));
    }, 6000);
    return () => clearInterval(interval);
  }, []); */

  return (
    <div id="hero" className="flex flex-col w-full h-auto relative">
      <div
        id="slide_1"
        className={`absolute top-0 flex flex-col w-full h-auto justify-center items-center relative ${currentSlide === "slide_1" ? "opacity-100 flex duration-200 transition-opacity" : "opacity-0 hidden duration-200 transition-opacity"} z-0`}
      >
        <div className="flex flex-col w-full h-[400px] lg:h-[600px] relative">
          <img
            src="/assets/images/interior_wood_large.webp"
            alt="Hero image Furgotecnic"
            className="flex w-full h-full min-h-[400px] object-cover object-top"
          />
          <div className="absolute bottom-0 left-0 right-0 flex flex-col w-full h-full min-h-[200px] justify-center items-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white text-center">
              Soluciones profesionales para
            </h1>
            <h1 className="text-2xl md:text-4xl font-bold text-white text-center ">
              vehículos de profesionales
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
                src="/assets/images/ufo_2.png"
                alt="UFO"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute top-0 left-0 flex flex-col w-full h-full justify-center items-center px-4">
                <p className="flex w-auto px-2 items-center text-center text-base sm:text-xl text-black font-bold text-shadow-xs text-shadow-white/0 backdrop-blur-sm">
                  Protección antirrobo
                </p>
                <p className="flex w-auto items-center text-center text-xl sm:text-3xl text-primary font-black text-shadow-xs text-shadow-black/0 backdrop-blur-[2px] ">
                  A partir de 249,00€
                </p>
                <p className="flex w-auto items-center text-center text-[10px] sm:text-xs text-white font-bold backdrop-blur-[6px] ">
                  + IVA - montaje incluido
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-36 bg-gray-900/10 rounded-sm cursor-pointer active:scale-95">
            <div className="flex flex-row w-full h-full justify-around px-4 gap-4">
              <div className="flex flex-col w-auto min-w-[150px] shrink-0 h-auto justify-center ">
                <p className="flex w-auto text-center text-base sm:text-xl text-black font-bold text-shadow-xs text-shadow-white/0 backdrop-blur-sm">
                  Pack Mensajeria
                </p>
                <div className="flex flex-row w-auto h-auto ml-4 gap-2 items-center">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="text-sm text-secondary">Rotulación</p>
                </div>
                <div className="flex flex-row w-auto h-auto ml-4 gap-2 items-center">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="text-sm text-secondary">Protección interior</p>
                </div>
                <div className="flex flex-row w-auto h-auto ml-4 gap-2 items-center">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="text-sm text-secondary">Protección antirrobo</p>
                </div>
              </div>
              <div className="flex flex-col w-auto h-auto justify-center items-center px-4">
                <p className="flex w-auto items-center text-center text-xl sm:text-3xl md:text-2xl lg:text-3xl text-primary font-black text-shadow-xs text-shadow-black/0">
                  A partir de 599,00€
                </p>
                <p className="flex w-auto text-center text-[10px] sm:text-xs text-black font-bold">
                  + IVA - montaje incluido
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
            src="/assets/images/camper.webp"
            alt="Hero image camper Furgotecnic"
            className="flex w-full h-full min-h-[400px] object-cover object-center grayscale"
          />
          <div className="absolute bottom-0 left-0 right-0 flex flex-col w-full h-full min-h-[200px] justify-center items-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white text-center">
              Transformaciones para
            </h1>
            <h1 className="text-2xl md:text-4xl font-bold text-white text-center ">
              viajeros exigentes
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
                src="/assets/images/ufo_2.png"
                alt="UFO"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute top-0 left-0 flex flex-col w-full h-full justify-center items-center px-4">
                <p className="flex w-auto px-2 items-center text-center text-base sm:text-xl text-black font-bold text-shadow-xs text-shadow-white/0 backdrop-blur-sm">
                  Protección antirrobo
                </p>
                <p className="flex w-auto items-center text-center text-xl sm:text-3xl text-primary font-black text-shadow-xs text-shadow-black/0 backdrop-blur-[2px] ">
                  A partir de 249,00€
                </p>
                <p className="flex w-auto items-center text-center text-[10px] sm:text-xs text-white font-bold backdrop-blur-[6px] ">
                  + IVA - montaje incluido
                </p>
              </div>
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
                  <p className="text-sm text-secondary">Homologable</p>
                </div>
              </div>
              <div className="flex flex-col w-auto h-auto justify-center items-center px-4">
                <p className="flex w-auto items-center text-center text-xl sm:text-3xl md:text-2xl lg:text-3xl text-primary font-black text-shadow-xs text-shadow-black/0">
                  A partir de 649,00€
                </p>
                <p className="flex w-auto text-center text-[10px] sm:text-xs text-black font-bold">
                  + IVA - montaje incluido
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
