import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Currency } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class Currency$ServiceShim extends Object {
    constructor()
    createInstance(l: ULocale): Currency;
    getAvailableLocales(): Locale[];
    getAvailableULocales(): ULocale[];
    registerInstance(c: Currency, l: ULocale): Object;
    unregister(f: Object): boolean;
}