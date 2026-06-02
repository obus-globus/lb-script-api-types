import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class CurrencyDisplayNames extends Object {
    static getInstance(paramlocale: Locale): CurrencyDisplayNames;
    static getInstance(paramlocale: Locale, paramnoSubstitute: boolean): CurrencyDisplayNames;
    static getInstance(paramlocale: ULocale): CurrencyDisplayNames;
    static getInstance(paramlocale: ULocale, paramnoSubstitute: boolean): CurrencyDisplayNames;
    static hasData(): boolean;
    constructor()
    getFormalSymbol(isoCode: string): string;
    getName(isoCode: string): string;
    getNarrowSymbol(isoCode: string): string;
    getPluralName(isoCode: string, pluralKey: string): string;
    getSymbol(isoCode: string): string;
    getULocale(): ULocale;
    getVariantSymbol(isoCode: string): string;
    nameMap(): { [key: string]: string };
    symbolMap(): { [key: string]: string };
}