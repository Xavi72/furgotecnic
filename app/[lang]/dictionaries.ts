import 'server-only'
 
const dictionaries = {
  es: () => import('@/dictionaries/es.json').then((module) => module.default),
  cat: () => import('@/dictionaries/cat.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: string) => {
  if (locale === "es") {
    return await dictionaries.es();
  } else if (locale === "cat") {
    return await dictionaries.cat();
  }
  return {};
};