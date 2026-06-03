import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Normalizer2Impl } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Normalizer2Impl.d.ts'
import type { RuleBasedCollator$UTF16NFDIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedCollator$UTF16NFDIterator.d.ts'
export class RuleBasedCollator$FCDUTF16NFDIterator extends RuleBasedCollator$UTF16NFDIterator {
    constructor()
    // private str: StringBuilder;
    setText(seq: CharSequence, start: number): void;
    setText(nfcImpl: Normalizer2Impl, seq: CharSequence, start: number): void;
}