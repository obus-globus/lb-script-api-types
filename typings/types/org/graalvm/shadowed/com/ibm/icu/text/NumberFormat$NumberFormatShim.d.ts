import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { NumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat.d.ts'
import type { NumberFormat$NumberFormatFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat$NumberFormatFactory.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class NumberFormat$NumberFormatShim extends Object {
    constructor()
    createInstance(l: ULocale, k: number): NumberFormat;
    getAvailableLocales(): Locale[];
    getAvailableULocales(): ULocale[];
    registerFactory(f: NumberFormat$NumberFormatFactory): Object;
    unregister(k: Object): boolean;
}