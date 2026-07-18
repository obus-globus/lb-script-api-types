import type { InvertibleCharMatcher } from '../../../../../../com/oracle/truffle/regex/tregex/matchers/InvertibleCharMatcher.d.ts'
export class RangeListMatcher extends InvertibleCharMatcher {
    static MAX_NUMBER_OF_RANGES: number;
    static create(paraminvert: boolean, paramranges: number[]): RangeListMatcher;
    static result(paraminvert: boolean, paramresult: boolean): boolean;
    constructor(invert: boolean, ranges: number[])
    // private ranges: number[];
    estimatedCost(): number;
    match(c: number): boolean;
    toString(): string;
}