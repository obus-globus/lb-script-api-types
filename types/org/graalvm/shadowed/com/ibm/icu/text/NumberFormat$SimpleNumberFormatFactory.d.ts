import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { NumberFormat$NumberFormatFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat$NumberFormatFactory.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class NumberFormat$SimpleNumberFormatFactory extends NumberFormat$NumberFormatFactory {
    static FORMAT_CURRENCY: number;
    static FORMAT_INTEGER: number;
    static FORMAT_NUMBER: number;
    static FORMAT_PERCENT: number;
    static FORMAT_SCIENTIFIC: number;
    constructor(locale: Locale)
    constructor(locale: Locale, visible: boolean)
    constructor(locale: ULocale)
    constructor(locale: ULocale, visible: boolean)
    // private localeNames: string[];
    // private visible: boolean;
    getSupportedLocaleNames(): string[];
    visible(): boolean;
}