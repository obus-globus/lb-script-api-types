import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
import type { BreakIterator$BreakIteratorServiceShim } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator$BreakIteratorServiceShim.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class BreakIteratorFactory extends BreakIterator$BreakIteratorServiceShim {
    constructor()
    createBreakIterator(locale: ULocale, kind: number): BreakIterator;
    getAvailableLocales(): Locale[];
    getAvailableULocales(): ULocale[];
    registerInstance(iter: BreakIterator, locale: ULocale, kind: number): Object;
    unregister(key: Object): boolean;
}