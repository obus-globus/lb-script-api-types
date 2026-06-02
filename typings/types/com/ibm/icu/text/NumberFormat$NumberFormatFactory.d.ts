import type { NumberFormat } from '../../../../com/ibm/icu/text/NumberFormat.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class NumberFormat$NumberFormatFactory extends Object {
    static FORMAT_CURRENCY: number;
    static FORMAT_INTEGER: number;
    static FORMAT_NUMBER: number;
    static FORMAT_PERCENT: number;
    static FORMAT_SCIENTIFIC: number;
    constructor()
    createFormat(arg0: ULocale, arg1: number): NumberFormat;
    createFormat(arg0: Locale, arg1: number): NumberFormat;
    getSupportedLocaleNames(): string[];
    visible(): boolean;
}