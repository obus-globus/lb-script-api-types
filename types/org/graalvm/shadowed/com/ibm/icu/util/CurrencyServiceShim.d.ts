import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Currency } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency.d.ts'
import type { Currency$ServiceShim } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency$ServiceShim.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class CurrencyServiceShim extends Currency$ServiceShim {
    constructor()
    createInstance(loc: ULocale): Currency;
    getAvailableLocales(): Locale[];
    getAvailableULocales(): ULocale[];
    registerInstance(currency: Currency, locale: ULocale): Object;
    unregister(registryKey: Object): boolean;
}