import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Collator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Collator.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class Collator$CollatorFactory extends Object {
    constructor()
    createCollator(loc: Locale): Collator;
    createCollator(loc: ULocale): Collator;
    getDisplayName(objectLocale: Locale, displayLocale: Locale): string;
    getDisplayName(objectLocale: ULocale, displayLocale: ULocale): string;
    getSupportedLocaleIDs(): string[];
    visible(): boolean;
}