import type { InvertibleCharMatcher } from '../../../../../../com/oracle/truffle/regex/tregex/matchers/InvertibleCharMatcher.d.ts'
export class BitSetMatcher extends InvertibleCharMatcher {
    static create(paraminvert: boolean, paramhighByte: number, parambitSet: number[]): InvertibleCharMatcher;
    static result(paraminvert: boolean, paramresult: boolean): boolean;
    constructor(invert: boolean, highByte: number, bitSet: number[])
    readonly bitSet: number[];
    // private highByte: number;
    estimatedCost(): number;
    getBitSet(): number[];
    match(c: number): boolean;
    toString(): string;
}