import type { InvertibleCharMatcher } from '../../../../../../com/oracle/truffle/regex/tregex/matchers/InvertibleCharMatcher.d.ts'
export class RangeTreeMatcher extends InvertibleCharMatcher {
    static create(paraminvert: boolean, paramranges: number[]): RangeTreeMatcher;
    static result(paraminvert: boolean, paramresult: boolean): boolean;
    constructor(invert: boolean, sortedRanges: number[])
    // private sortedRanges: number[];
    estimatedCost(): number;
    match(c: number): boolean;
    // private matchLoop(c: number): boolean;
    // private matchTree(fromIndex: number, toIndex: number, c: number): boolean;
    toString(): string;
}