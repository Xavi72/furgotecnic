/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import BurgerIcon from "@/public/assets/icons/burger.svg";
import CloseIcon from "@/public/assets/icons/close.svg";
import ArrowDownIcon from "@/public/assets/icons/arrow-down.svg";
import { navigationLink } from "@/utils/webdatas";
import { usePathname } from "next/navigation";

type NavigationLink = (typeof navigationLink)[0];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [menuSelected, setMenuSelected] = useState("");
  const [dropdownData, setDropdownData] = useState<NavigationLink | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [initialDropdownData, setInitialDropdownData] =
    useState<NavigationLink | null>(null);
  const [initialMenuSelected, setInitialMenuSelected] = useState("");
  const [sublinkSelected, setSublinkSelected] = useState("");
  const [initialSubLinkSelected, setInitialSubLinkSelected] = useState("");

  const ref = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const lang = pathname.split("/")[1];

  useEffect(() => {
    const firstSegment = pathname.split("/")[1].toLowerCase();
    setMenuSelected(firstSegment);

    if (pathname.split("/")[2]) {
      const secondSegment: string = pathname.split("/")[2].toLowerCase();

      setSublinkSelected(secondSegment);
    }
    if (firstSegment === "magazine" || firstSegment === "contacto") {
      setIsDropdownOpen(false);
    }
    if (firstSegment !== "magazine" && firstSegment !== "contacto") {
      setIsDropdownOpen(true);
      setDropdownData(
        navigationLink.find((link) => link.slug === firstSegment) || null,
      );
      setInitialMenuSelected(firstSegment);
      setInitialDropdownData(
        navigationLink.find((link) => link.slug === firstSegment) || null,
      );
      if (pathname.split("/")[2]) {
        const secondSegment = pathname.split("/")[2].toLowerCase();
        setSublinkSelected(secondSegment);
        setInitialSubLinkSelected(secondSegment);
      }
    }
    if (menuSelected === "contacto") {
      setIsDropdownOpen(false);
    }
  }, [pathname]);

  const handleDropdown = (name: string) => {
    setMenuSelected(name);
    if (name === "magazine" || name === "contacto") {
      setIsDropdownOpen(false);
    }
    if (name !== "magazine" && name !== "contacto") {
      setIsDropdownOpen(true);
      setDropdownData(
        navigationLink.find((link) => link.slug === name) || null,
      );
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileDropdownOpen(!isMobileMenuOpen);
    /*     setMenuSelected("");
    setDropdownData(null); */
  };

  const handleMobileDropdown = (name: string) => {
    if (isMobileDropdownOpen && menuSelected === name) {
      setIsMobileDropdownOpen(false);
      return;
    }
    if (!isMobileDropdownOpen && menuSelected === name) {
      setIsMobileDropdownOpen(true);
    }
    if (setIsMobileDropdownOpen && menuSelected !== name) {
      setIsMobileDropdownOpen(true);
      setMenuSelected(name);
      setDropdownData(
        navigationLink.find((link) => link.slug === name) || null,
      );
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isMobileMenuOpen) {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  console.log("isDropdownOpen", isDropdownOpen);
  return (
    <div className="fixed flex flex-col w-full h-auto z-50 ">
      <div className="flex w-full h-auto min-h-12 bg-tertiary justify-center items-center">
        <div className="flex w-full h-full justify-between items-center px-[2%] py-2 gap-10">
          <div className="flex flex-wrap text-white text-xs text-pretty">
            Equipament per a furgonetes & muntatge d&apos;accessoris en Sabadell
          </div>
          <div className="flex items-center gap-8">
            <div className="text-white text-sm hover:text-primary cursor-pointer active:scale-95 transition-transform">
              Contacto
            </div>
            <div className="text-white text-xs mt-[1px]">ES | CAT</div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-auto py-3 bg-primary justify-center items-center px-[2%]">
        <div className="text-white text-xs md:text-sm font-normal text-center text-pretty">
          Promocions per obertura nou local del 1 al 30 de juny 2026:{" "}
          <span className="font-bold">
            fins a 20% DTO en muntatge d&apos;accessoris
          </span>
        </div>
      </div>
      <div
        className={`flex flex-row w-full px-[2%] h-[80px] justify-center border-b-[1px] border-gray-200/30 bg-tertiary z-40`}
      >
        <div
          className={`flex flex-row w-full h-full justify-between items-center transition-all duration-800`}
        >
          <div className="flex w-auto h-full ">
            <Link
              href={`/${lang}`}
              className="flex flex-row w-auto h-auto items-center"
            >
              <p className="text-xl font-black italic active:scale-95 transition-transform">
                <span className="text-primary">FURGO</span>
                <span className="text-white">TECNIC</span>
              </p>
            </Link>
          </div>

          <div className="flex md:hidden flex-row w-auto h-auto mt-1">
            {isMobileMenuOpen ? (
              <CloseIcon
                className={`w-6 sm:w-8 h-6 sm:h-8 mb-2 sm:mb-0 hover:text-gray-400 cursor-pointer text-white`}
                onClick={toggleMobileMenu}
              />
            ) : (
              <BurgerIcon
                className={`w-6 sm:w-8 h-6 sm:h-8 mb-2 sm:mb-0 hover:text-gray-400 cursor-pointer text-white`}
                onClick={toggleMobileMenu}
              />
            )}
          </div>

          <div className="hidden md:flex flex-row w-auto h-8 mt-0 gap-6 items-center">
            {navigationLink.map((link) => (
              <div key={link.slug}>
                <div
                  onMouseOver={() => {
                    setDropdownData(null);
                    setIsDropdownOpen(false);
                    if (link.subLinks) {
                      handleDropdown(link.slug);
                    }
                  }}
                  className={`text-[14px] font-normal transition-all duration-400 text-white  ${
                    menuSelected === link.slug && "underline"
                  } hover:underline decoration-[2px] decoration-primary underline-offset-8 hover:text-gray-400  whitespace-nowrap cursor-default
                  `}
                >
                  {link.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isDropdownOpen &&
        !isMobileMenuOpen &&
        menuSelected !== "Magazine" &&
        menuSelected !== "Contacto" && (
          <div
            ref={ref}
            className={`hidden md:flex flex-row w-full h-12 px-[2%] bg-tertiary z-50 items-center justify-end border-y-[1px] border-gray-500/10`}
            onMouseLeave={() => {
              setMenuSelected(initialMenuSelected);
              setDropdownData(initialDropdownData);
              setIsDropdownOpen(false);
            }}
          >
            <nav className="flex flex-row w-auto h-8">
              {dropdownData?.subLinks?.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseOver={() => {
                    setSublinkSelected(link.slug);
                  }}
                  onMouseLeave={() => {
                    setSublinkSelected(initialSubLinkSelected);
                  }}
                  className={`flex flex-row items-center`}
                >
                  <span
                    className={`text-[14px] text-white font-normal ${
                      sublinkSelected &&
                      sublinkSelected?.toLowerCase() === link.slug &&
                      "underline"
                    } hover:underline decoration-[2px] decoration-primary underline-offset-8 hover:text-gray-400 active:scale-95
                    `}
                  >
                    {link.name}
                  </span>
                  <div
                    className={`flex w-[2px] h-6 mx-2 lg:mx-4 ${
                      index === dropdownData?.subLinks?.length - 1
                        ? ""
                        : "bg-tertiary/50"
                    } rounded-xs`}
                  ></div>
                </Link>
              ))}
            </nav>
          </div>
        )}

      <div
        className={`flex md:hidden flex-col w-full items-end transition-[height] duration-500 bg-white fixed ${
          isMobileMenuOpen ? "h-[100dvh] mt-[184px] pb-12" : "h-0"
        }`}
      >
        {isMobileMenuOpen && (
          <div className="flex flex-col w-full h-full pt-4 pb-12 gap-2 sm:gap-6 overflow-scroll ">
            {navigationLink.map((link) => (
              <div
                key={link.name}
                className={`flex flex-col w-full h-auto py-2 border-b-[1px] border-gray-500/20`}
              >
                {link.subLinks.length > 0 && (
                  <div
                    className="flex flex-row w-full h-auto pl-4 sm:pl-8 pr-5 sm:pr-9 justify-between items-center cursor-pointer transition-all duration-300"
                    onClick={() => handleMobileDropdown(link.slug)}
                  >
                    <span className="flex pl-2 sm:pl-4 text-sm font-base transition-all duration-400 text-secondary hover:text-gray-400">
                      {link.name}
                    </span>
                    <ArrowDownIcon
                      className={`w-6 h-auto text-secondary ${
                        isMobileDropdownOpen && menuSelected === link.slug
                          ? "rotate-180 transition-all duration-300"
                          : ""
                      }`}
                    />
                  </div>
                )}
                <div className="flex w-full h-auto pl-4 sm:pl-8  justify-between items-center">
                  {link.subLinks.length === 0 && (
                    <Link
                      href={link.href}
                      className="flex pl-2 sm:pl-4 text-sm font-base transition-all duration-400 text-secondary hover:text-gray-400"
                      onClick={() => {
                        setIsMobileDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
                {isMobileDropdownOpen && menuSelected === link.slug && (
                  <div className="flex flex-col w-full h-auto mt-2 px-8 gap-2">
                    {link.subLinks?.map((subLink) => (
                      <Link
                        key={subLink.slug}
                        href={subLink.href}
                        className={`flex flex-col w-full h-auto py-2`}
                        onClick={() => {
                          setIsMobileDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <span
                          className={`flex pl-2 sm:pl-8 text-sm font-base transition-all duration-400 text-secondary hover:text-gray-400 ${
                            sublinkSelected === subLink.slug && "underline"
                          } hover:underline decoration-[2px] decoration-primary underline-offset-8 hover:text-gray-400`}
                        >
                          {subLink.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
