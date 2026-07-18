import type { InvertibleCharMatcher } from '../../../../../../com/oracle/truffle/regex/tregex/matchers/InvertibleCharMatcher.d.ts'
export class SingleRangeMatcher extends InvertibleCharMatcher {
    static create(paraminvert: boolean, paramlo: number, paramhi: number): SingleRangeMatcher;
    static result(paraminvert: boolean, paramresult: boolean): boolean;
    constructor(invert: boolean, lo: number, hi: number)
    readonly hi: number;
    readonly lo: number;
    estimatedCost(): number;
    getHi(): number;
    getLo(): number;
    match(c: number): boolean;
    toString(): string;
}