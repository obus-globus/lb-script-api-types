import type { NumberFormat } from '../../../../com/ibm/icu/text/NumberFormat.d.ts'
import type { NumberFormat$NumberFormatFactory } from '../../../../com/ibm/icu/text/NumberFormat$NumberFormatFactory.d.ts'
import type { NumberFormat$NumberFormatShim } from '../../../../com/ibm/icu/text/NumberFormat$NumberFormatShim.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NumberFormatServiceShim extends NumberFormat$NumberFormatShim {
    constructor()
    createInstance(arg0: ULocale, arg1: number): NumberFormat;
    getAvailableLocales(): Locale[];
    getAvailableULocales(): ULocale[];
    registerFactory(arg0: NumberFormat$NumberFormatFactory): Object;
    unregister(arg0: Object): boolean;
}