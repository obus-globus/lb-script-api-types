import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export interface JSSegmenter$IcuIteratorHelper extends Object{
    getIterator(locale: ULocale): BreakIterator;
}