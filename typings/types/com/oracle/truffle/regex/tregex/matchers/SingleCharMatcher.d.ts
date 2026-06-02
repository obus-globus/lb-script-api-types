import type { InvertibleCharMatcher } from '../../../../../../com/oracle/truffle/regex/tregex/matchers/InvertibleCharMatcher.d.ts'
export class SingleCharMatcher extends InvertibleCharMatcher {
    static create(paraminvert: boolean, paramc: number): SingleCharMatcher;
    static result(paraminvert: boolean, paramresult: boolean): boolean;
    constructor(invert: boolean, c: number)
    // private c: number;
    estimatedCost(): number;
    getChar(): number;
    match(m: number): boolean;
    toString(): string;
}