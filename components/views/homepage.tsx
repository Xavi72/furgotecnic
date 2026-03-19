/* eslint-disable @next/next/no-img-element */
import { getDictionary } from "@/app/[lang]/dictionaries";
import Icon from "@/public/assets/icons/globe.svg";
import HomepageHero from "@/components/molecules/homepageHero/homepageHero";

export default async function HomePage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dict: any = await getDictionary(lang);

  return (
    <div className="flex flex-col w-full h-auto items-center ">
      <div className="w-full h-auto min-[560px] max-h-[760px] mt-[172px] overflow-hidden">
        <HomepageHero dict={dict} />
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1280px] h-auto p-4 gap-4">
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
      </div> */}
      {/*  <div
        id="preparation"
        className="grid grid-cols-1 md:grid-cols-2 flex flex-col w-full max-w-[1280px] h-auto p-4 gap-4"
      >
        {dict.homepage.preparation.items.map(
          (item: { title: string; content?: string[] }, index: number) => (
            <div
              key={index}
              className="flex flex-row w-full h-auto justify-center px-4 py-6 bg-tertiary rounded-sm gap-2"
            >
              <div
                key={index}
                className="flex flex-col w-1/2 h-full justify-center bg-tertiary rounded-sm gap-3"
              >
                <h2 className="text-base md:text-lg font-normal text-white ">
                  {item.title}
                </h2>
                <div className="flex flex-row w-auto h-auto ml-2 gap-2 items-center active:scale-95 transition-transform  cursor-pointer">
                  <p className="text-sm text-white  underline underline-offset-4 decoration-primary">
                    Ver más
                  </p>
                  <p className="text-base text-primary">{`-->`}</p>
                </div>
              </div>
              <div className="flex flex-col w-1/2 min-w-[200px] h-full justify-center bg-tertiary rounded-sm gap-2">
                {item?.content?.map((content: string, index: number) => (
                  <div
                    key={index}
                    className="flex flex-row w-auto h-auto gap-2 items-center"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <p className="text-sm text-white">{content}</p>
                  </div>
                ))}
              </div>
            </div>
          ),
        )}
      </div> */}
      <div id="services" className="flex flex-col w-full w-[1280px] h-auto">
        <div className="w-full h-[1000px] "></div>
      </div>
    </div>
  );
}
