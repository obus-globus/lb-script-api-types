import type { InvertibleCharMatcher } from '../../../../../../com/oracle/truffle/regex/tregex/matchers/InvertibleCharMatcher.d.ts'
export class NullHighByteBitSetMatcher extends InvertibleCharMatcher {
    static create(paraminverse: boolean, parambitSet: number[]): NullHighByteBitSetMatcher;
    static result(paraminvert: boolean, paramresult: boolean): boolean;
    constructor(inverse: boolean, bitSet: number[])
    // private bitSet: number[];
    estimatedCost(): number;
    match(c: number): boolean;
    toString(): string;
}