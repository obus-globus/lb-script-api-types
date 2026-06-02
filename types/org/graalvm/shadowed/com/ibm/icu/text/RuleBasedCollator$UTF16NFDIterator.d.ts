import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { RuleBasedCollator$NFDIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedCollator$NFDIterator.d.ts'
export class RuleBasedCollator$UTF16NFDIterator extends RuleBasedCollator$NFDIterator {
    constructor()
    // private pos: number;
    // private s: CharSequence;
    nextRawCodePoint(): number;
    setText(seq: CharSequence, start: number): void;
}