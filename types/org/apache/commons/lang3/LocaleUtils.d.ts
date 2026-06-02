import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocaleUtils extends Object {
    static availableLocaleList(): Locale[];
    static availableLocaleSet(): Locale[];
    static countriesByLanguage(paramarg0: string): Locale[];
    static isAvailableLocale(paramarg0: Locale): boolean;
    static isLanguageUndetermined(paramarg0: Locale): boolean;
    static languagesByCountry(paramarg0: string): Locale[];
    static localeLookupList(paramarg0: Locale): Locale[];
    static localeLookupList(paramarg0: Locale, paramarg1: Locale): Locale[];
    static toLocale(paramarg0: string): Locale;
    static toLocale(paramarg0: Locale): Locale;
    constructor()
}