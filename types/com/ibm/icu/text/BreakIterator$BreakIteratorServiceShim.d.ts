import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class BreakIterator$BreakIteratorServiceShim extends Object {
    constructor()
    createBreakIterator(arg0: ULocale, arg1: number): BreakIterator;
    getAvailableLocales(): Locale[];
    getAvailableULocales(): ULocale[];
    registerInstance(arg0: BreakIterator, arg1: ULocale, arg2: number): Object;
    unregister(arg0: Object): boolean;
}