import type { InvertibleCharMatcher } from '../../../../../../com/oracle/truffle/regex/tregex/matchers/InvertibleCharMatcher.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class MultiBitSetMatcher extends InvertibleCharMatcher {
    static fromRanges(paraminverse: boolean, paramcps: (Object | null)[]): MultiBitSetMatcher;
    static result(paraminvert: boolean, paramresult: boolean): boolean;
    constructor(invert: boolean, bitSets: number[][])
    // private bitSets: number[][];
    estimatedCost(): number;
    match(c: number): boolean;
    toString(): string;
}