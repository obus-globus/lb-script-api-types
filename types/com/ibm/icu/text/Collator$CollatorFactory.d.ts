import type { Collator } from '../../../../com/ibm/icu/text/Collator.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Collator$CollatorFactory extends Object {
    constructor()
    createCollator(arg0: ULocale): Collator;
    createCollator(arg0: Locale): Collator;
    getDisplayName(arg0: ULocale, arg1: ULocale): string;
    getDisplayName(arg0: Locale, arg1: Locale): string;
    getSupportedLocaleIDs(): string[];
    visible(): boolean;
}