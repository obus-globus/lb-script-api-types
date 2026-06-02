import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { NumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat.d.ts'
import type { NumberFormat$NumberFormatFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat$NumberFormatFactory.d.ts'
import type { NumberFormat$NumberFormatShim } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat$NumberFormatShim.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class NumberFormatServiceShim extends NumberFormat$NumberFormatShim {
    constructor()
    createInstance(desiredLocale: ULocale, choice: number): NumberFormat;
    getAvailableLocales(): Locale[];
    getAvailableULocales(): ULocale[];
    registerFactory(factory: NumberFormat$NumberFormatFactory): Object;
    unregister(registryKey: Object): boolean;
}