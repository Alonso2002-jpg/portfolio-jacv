import {languageList, ui} from "./ui.ts";

export const defaultLanguage = "es";
export function useTranslations(lang:keyof typeof ui){
    return function t(key:keyof typeof ui [typeof defaultLanguage]){
        return ui[lang][key] || ui[defaultLanguage][key];
    }
}