import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { NumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class NumberFormat$NumberFormatFactory extends Object {
    static FORMAT_CURRENCY: number;
    static FORMAT_INTEGER: number;
    static FORMAT_NUMBER: number;
    static FORMAT_PERCENT: number;
    static FORMAT_SCIENTIFIC: number;
    constructor()
    createFormat(loc: Locale, formatType: number): NumberFormat;
    createFormat(loc: ULocale, formatType: number): NumberFormat;
    getSupportedLocaleNames(): string[];
    visible(): boolean;
}