import type { Segmenter } from '../../../../com/ibm/icu/segmenter/Segmenter.d.ts'
import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RuleBasedSegmenter$Builder extends Object {
    private constructor()
    // private breakIter: BreakIterator;
    build(): Segmenter;
    setRules(arg0: string): RuleBasedSegmenter$Builder;
}