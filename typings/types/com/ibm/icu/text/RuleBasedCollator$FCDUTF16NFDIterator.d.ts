import type { Normalizer2Impl } from '../../../../com/ibm/icu/impl/Normalizer2Impl.d.ts'
import type { RuleBasedCollator$UTF16NFDIterator } from '../../../../com/ibm/icu/text/RuleBasedCollator$UTF16NFDIterator.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class RuleBasedCollator$FCDUTF16NFDIterator extends RuleBasedCollator$UTF16NFDIterator {
    constructor()
    // private str: StringBuilder;
    setText(arg0: Normalizer2Impl, arg1: CharSequence, arg2: number): void;
    setText(arg0: CharSequence, arg1: number): void;
}