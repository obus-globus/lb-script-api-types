import type { RuleBasedSegmenter$Builder } from '../../../../com/ibm/icu/segmenter/RuleBasedSegmenter$Builder.d.ts'
import type { Segmenter } from '../../../../com/ibm/icu/segmenter/Segmenter.d.ts'
import type { Segments } from '../../../../com/ibm/icu/segmenter/Segments.d.ts'
import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class RuleBasedSegmenter extends Object implements Segmenter {
    static builder(): RuleBasedSegmenter$Builder;
    private constructor(arg0: BreakIterator)
    // private breakIterPrototype: BreakIterator;
    segment(arg0: CharSequence): Segments;
}