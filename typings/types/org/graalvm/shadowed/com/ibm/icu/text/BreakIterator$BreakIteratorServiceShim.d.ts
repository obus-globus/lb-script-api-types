import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class BreakIterator$BreakIteratorServiceShim extends Object {
    constructor()
    createBreakIterator(l: ULocale, k: number): BreakIterator;
    getAvailableLocales(): Locale[];
    getAvailableULocales(): ULocale[];
    registerInstance(iter: BreakIterator, l: ULocale, k: number): Object;
    unregister(key: Object): boolean;
}