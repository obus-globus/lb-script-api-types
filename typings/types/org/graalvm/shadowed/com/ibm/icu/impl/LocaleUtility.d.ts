import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class LocaleUtility extends Object {
    static fallback(paramloc: Locale): Locale;
    static getLocaleFromName(paramname: string): Locale;
    static isFallbackOf(paramparent: string, paramchild: string): boolean;
    static isFallbackOf(paramparent: Locale, paramchild: Locale): boolean;
    constructor()
}