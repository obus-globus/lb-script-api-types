import type { Currency } from '../../../../com/ibm/icu/util/Currency.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Currency$ServiceShim extends Object {
    constructor()
    createInstance(arg0: ULocale): Currency;
    getAvailableLocales(): Locale[];
    getAvailableULocales(): ULocale[];
    registerInstance(arg0: Currency, arg1: ULocale): Object;
    unregister(arg0: Object): boolean;
}