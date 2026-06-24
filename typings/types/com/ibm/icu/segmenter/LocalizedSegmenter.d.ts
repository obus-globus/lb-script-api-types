import type { LocalizedSegmenter$Builder } from '../../../../com/ibm/icu/segmenter/LocalizedSegmenter$Builder.d.ts'
import type { LocalizedSegmenter$SegmentationType } from '../../../../com/ibm/icu/segmenter/LocalizedSegmenter$SegmentationType.d.ts'
import type { Segmenter } from '../../../../com/ibm/icu/segmenter/Segmenter.d.ts'
import type { Segments } from '../../../../com/ibm/icu/segmenter/Segments.d.ts'
import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class LocalizedSegmenter extends Object implements Segmenter {
    static builder(): LocalizedSegmenter$Builder;
    private constructor(arg0: ULocale, arg1: LocalizedSegmenter$SegmentationType)
    // private breakIterPrototype: BreakIterator;
    segment(arg0: CharSequence): Segments;
}