import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Segmenter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/segmenter/Segmenter.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
export class RuleBasedSegmenter$Builder extends Object {
    private constructor()
    // private breakIter: BreakIterator;
    build(): Segmenter;
    setRules(rules: string): RuleBasedSegmenter$Builder;
}