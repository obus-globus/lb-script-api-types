import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Collator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Collator.d.ts'
import type { Collator$CollatorFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Collator$CollatorFactory.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class Collator$ServiceShim extends Object {
    constructor()
    getAvailableLocales(): Locale[];
    getAvailableULocales(): ULocale[];
    getDisplayName(ol: ULocale, dl: ULocale): string;
    getInstance(l: ULocale): Collator;
    registerFactory(f: Collator$CollatorFactory): Object;
    registerInstance(c: Collator, l: ULocale): Object;
    unregister(k: Object): boolean;
}