import type { CompressedCodePointSet } from '../../../../../../com/oracle/truffle/regex/charset/CompressedCodePointSet.d.ts'
import type { InvertibleCharMatcher } from '../../../../../../com/oracle/truffle/regex/tregex/matchers/InvertibleCharMatcher.d.ts'
export class HybridBitSetMatcher extends InvertibleCharMatcher {
    static create(paraminvert: boolean, paramccps: CompressedCodePointSet): HybridBitSetMatcher;
    static result(paraminvert: boolean, paramresult: boolean): boolean;
    constructor(invert: boolean, sortedRanges: number[], bitSets: number[][])
    // private bitSets: number[][];
    // private sortedRanges: number[];
    estimatedCost(): number;
    match(c: number): boolean;
    // private matchLoop(c: number): boolean;
    // private matchTree(fromIndex: number, toIndex: number, c: number): boolean;
    toString(): string;
}