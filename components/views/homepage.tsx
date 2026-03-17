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
    <div className="flex flex-col min-h-screen items-center justify-center">
      {dict?.homepage.title}

      <h1 className="text-4xl font-bold">Furgotecnic</h1>
      <Icon className="w-12 h-12 text-black" />
    </div>
  );
}
