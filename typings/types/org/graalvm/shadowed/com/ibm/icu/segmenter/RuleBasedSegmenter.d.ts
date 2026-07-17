import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { RuleBasedSegmenter$Builder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/segmenter/RuleBasedSegmenter$Builder.d.ts'
import type { Segmenter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/segmenter/Segmenter.d.ts'
import type { Segments } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/segmenter/Segments.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
export class RuleBasedSegmenter extends Object implements Segmenter {
    static builder(): RuleBasedSegmenter$Builder;
    private constructor(breakIter: BreakIterator)
    // private breakIterPrototype: BreakIterator;
    segment(s: CharSequence): Segments;
}