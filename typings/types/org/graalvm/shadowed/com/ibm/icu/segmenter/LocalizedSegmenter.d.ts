import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { LocalizedSegmenter$Builder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/segmenter/LocalizedSegmenter$Builder.d.ts'
import type { LocalizedSegmenter$SegmentationType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/segmenter/LocalizedSegmenter$SegmentationType.d.ts'
import type { Segmenter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/segmenter/Segmenter.d.ts'
import type { Segments } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/segmenter/Segments.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class LocalizedSegmenter extends Object implements Segmenter {
    static builder(): LocalizedSegmenter$Builder;
    private constructor(locale: ULocale, segmentationType: LocalizedSegmenter$SegmentationType)
    // private breakIterPrototype: BreakIterator;
    segment(s: CharSequence): Segments;
}