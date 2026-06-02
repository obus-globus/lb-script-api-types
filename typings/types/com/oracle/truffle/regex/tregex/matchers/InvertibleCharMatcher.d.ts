import type { CharMatcher } from '../../../../../../com/oracle/truffle/regex/tregex/matchers/CharMatcher.d.ts'
export abstract class InvertibleCharMatcher extends CharMatcher {
    static result(paraminvert: boolean, paramresult: boolean): boolean;
    constructor(invert: boolean)
    // private invert: boolean;
    modifiersToString(): string;
    result(result: boolean): boolean;
}