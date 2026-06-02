import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class LocaleIDs extends Object {
    static getCurrentCountryID(paramoldID: string): string;
    static getCurrentLanguageID(paramoldID: string): string;
    static getISO3Country(paramcountry: string): string;
    static getISO3Language(paramlanguage: string): string;
    static getISOCountries(): (Object | null)[];
    static getISOLanguages(): (Object | null)[];
    static threeToTwoLetterLanguage(paramlang: string): string;
    static threeToTwoLetterRegion(paramregion: string): string;
    constructor()
}