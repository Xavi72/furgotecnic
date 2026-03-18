/* eslint-disable @next/next/no-img-element */
import { getDictionary } from "@/app/[lang]/dictionaries";
import Icon from "@/public/assets/icons/globe.svg";

export default async function HomePage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dict: any = await getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen items-center ">
      <div
        id="hero"
        className="flex flex-col w-full w-[1280px] h-auto mt-[170px]"
      >
        <div className="flex w-full h-auto min-h-[400px] bg-black/5 justify-center items-center relative">
          <img
            src="/assets/images/interior_wood_large.webp"
            alt="Hero image Furgotecnic"
            className="flex w-full h-full min-h-[400px] object-cover object-top"
          />
          <div className="absolute bottom-0 left-0 right-0 flex flex-col w-full h-full min-h-[200px] justify-center items-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              Soluciones eficientes para
            </h1>
            <h1 className="text-2xl md:text-4xl font-bold text-white text-center">
              vehículos de profesionales
            </h1>
          </div>
        </div>
      </div>
      <div
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
      </div>
      <div id="services" className="flex flex-col w-full w-[1280px] h-auto">
        <div className="w-full h-[1000px] "></div>
      </div>
    </div>
  );
}
