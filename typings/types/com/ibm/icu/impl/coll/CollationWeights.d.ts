import type { CollationWeights$WeightRange } from '../../../../../com/ibm/icu/impl/coll/CollationWeights$WeightRange.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CollationWeights extends Object {
    static lengthOfWeight(paramarg0: number): number;
    constructor()
    // private maxBytes: number[];
    // private middleLength: number;
    // private minBytes: number[];
    // private rangeCount: number;
    // private rangeIndex: number;
    // private ranges: CollationWeights$WeightRange[];
    allocWeights(arg0: number, arg1: number, arg2: number): boolean;
    // private allocWeightsInMinLengthRanges(arg0: number, arg1: number): boolean;
    // private allocWeightsInShortRanges(arg0: number, arg1: number): boolean;
    // private countBytes(arg0: number): number;
    // private getWeightRanges(arg0: number, arg1: number): boolean;
    // private incWeight(arg0: number, arg1: number): number;
    // private incWeightByOffset(arg0: number, arg1: number, arg2: number): number;
    initForPrimary(arg0: boolean): void;
    initForSecondary(): void;
    initForTertiary(): void;
    // private lengthenRange(arg0: CollationWeights$WeightRange): void;
    nextWeight(): number;
}