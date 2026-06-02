import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BreakIterator$BreakIteratorCache extends Object {
    constructor(arg0: ULocale, arg1: BreakIterator)
    // private iter: BreakIterator;
    // private where: ULocale;
    createBreakInstance(): BreakIterator;
    getLocale(): ULocale;
}