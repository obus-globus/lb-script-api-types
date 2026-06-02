import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Collator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Collator.d.ts'
import type { Collator$CollatorFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Collator$CollatorFactory.d.ts'
import type { Collator$ServiceShim } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Collator$ServiceShim.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class CollatorServiceShim extends Collator$ServiceShim {
    constructor()
    getAvailableLocales(): Locale[];
    getAvailableULocales(): ULocale[];
    getDisplayName(objectLocale: ULocale, displayLocale: ULocale): string;
    getInstance(locale: ULocale): Collator;
    registerFactory(f: Collator$CollatorFactory): Object;
    registerInstance(collator: Collator, locale: ULocale): Object;
    unregister(registryKey: Object): boolean;
}