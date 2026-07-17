import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class CurrencyDisplayNames extends Object {
    static getInstance(paramarg0: ULocale): CurrencyDisplayNames;
    static getInstance(paramarg0: ULocale, paramarg1: boolean): CurrencyDisplayNames;
    static getInstance(paramarg0: Locale): CurrencyDisplayNames;
    static getInstance(paramarg0: Locale, paramarg1: boolean): CurrencyDisplayNames;
    static hasData(): boolean;
    constructor()
    getFormalSymbol(arg0: string): string;
    getName(arg0: string): string;
    getNarrowSymbol(arg0: string): string;
    getPluralName(arg0: string, arg1: string): string;
    getSymbol(arg0: string): string;
    getULocale(): ULocale;
    getVariantSymbol(arg0: string): string;
    nameMap(): JavaMap<string, string>;
    symbolMap(): JavaMap<string, string>;
}