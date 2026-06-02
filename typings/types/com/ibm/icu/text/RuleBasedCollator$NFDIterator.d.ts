import type { Normalizer2Impl } from '../../../../com/ibm/icu/impl/Normalizer2Impl.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class RuleBasedCollator$NFDIterator extends Object {
    constructor()
    // private decomp: string;
    // private index: number;
    nextCodePoint(): number;
    nextDecomposedCodePoint(arg0: Normalizer2Impl, arg1: number): number;
    nextRawCodePoint(): number;
    reset(): void;
}