import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Normalizer2Impl } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Normalizer2Impl.d.ts'
export abstract class RuleBasedCollator$NFDIterator extends Object {
    constructor()
    // private decomp: string;
    // private index: number;
    nextCodePoint(): number;
    nextDecomposedCodePoint(nfcImpl: Normalizer2Impl, c: number): number;
    nextRawCodePoint(): number;
    reset(): void;
}