import type { NumberFormat$NumberFormatFactory } from '../../../../com/ibm/icu/text/NumberFormat$NumberFormatFactory.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
export abstract class NumberFormat$SimpleNumberFormatFactory extends NumberFormat$NumberFormatFactory {
    static FORMAT_CURRENCY: number;
    static FORMAT_INTEGER: number;
    static FORMAT_NUMBER: number;
    static FORMAT_PERCENT: number;
    static FORMAT_SCIENTIFIC: number;
    constructor(arg0: ULocale)
    constructor(arg0: ULocale, arg1: boolean)
    constructor(arg0: Locale)
    constructor(arg0: Locale, arg1: boolean)
    // private localeNames: string[];
    // private visible: boolean;
    getSupportedLocaleNames(): string[];
    visible(): boolean;
}