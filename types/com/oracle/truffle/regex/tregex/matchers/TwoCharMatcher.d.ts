import type { InvertibleCharMatcher } from '../../../../../../com/oracle/truffle/regex/tregex/matchers/InvertibleCharMatcher.d.ts'
export class TwoCharMatcher extends InvertibleCharMatcher {
    static create(paraminvert: boolean, paramc1: number, paramc2: number): TwoCharMatcher;
    static result(paraminvert: boolean, paramresult: boolean): boolean;
    constructor(invert: boolean, c1: number, c2: number)
    // private c1: number;
    // private c2: number;
    estimatedCost(): number;
    match(m: number): boolean;
    toString(): string;
}