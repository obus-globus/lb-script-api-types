import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CollationWeights$WeightRange } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationWeights$WeightRange.d.ts'
export class CollationWeights extends Object {
    static lengthOfWeight(paramweight: number): number;
    constructor()
    // private maxBytes: number[];
    // private middleLength: number;
    // private minBytes: number[];
    // private rangeCount: number;
    // private rangeIndex: number;
    // private ranges: CollationWeights$WeightRange[];
    allocWeights(lowerLimit: number, upperLimit: number, n: number): boolean;
    // private allocWeightsInMinLengthRanges(n: number, minLength: number): boolean;
    // private allocWeightsInShortRanges(n: number, minLength: number): boolean;
    // private countBytes(idx: number): number;
    // private getWeightRanges(lowerLimit: number, upperLimit: number): boolean;
    // private incWeight(weight: number, length: number): number;
    // private incWeightByOffset(weight: number, length: number, offset: number): number;
    initForPrimary(compressible: boolean): void;
    initForSecondary(): void;
    initForTertiary(): void;
    // private lengthenRange(range: CollationWeights$WeightRange): void;
    nextWeight(): number;
}