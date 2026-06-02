import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocaleUtility extends Object {
    static fallback(paramarg0: Locale): Locale;
    static getLocaleFromName(paramarg0: string): Locale;
    static isFallbackOf(paramarg0: string, paramarg1: string): boolean;
    static isFallbackOf(paramarg0: Locale, paramarg1: Locale): boolean;
    constructor()
}