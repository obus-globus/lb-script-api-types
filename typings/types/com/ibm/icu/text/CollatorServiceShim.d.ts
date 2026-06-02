import type { Collator } from '../../../../com/ibm/icu/text/Collator.d.ts'
import type { Collator$CollatorFactory } from '../../../../com/ibm/icu/text/Collator$CollatorFactory.d.ts'
import type { Collator$ServiceShim } from '../../../../com/ibm/icu/text/Collator$ServiceShim.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CollatorServiceShim extends Collator$ServiceShim {
    constructor()
    getAvailableLocales(): Locale[];
    getAvailableULocales(): ULocale[];
    getDisplayName(arg0: ULocale, arg1: ULocale): string;
    getInstance(arg0: ULocale): Collator;
    registerFactory(arg0: Collator$CollatorFactory): Object;
    registerInstance(arg0: Collator, arg1: ULocale): Object;
    unregister(arg0: Object): boolean;
}