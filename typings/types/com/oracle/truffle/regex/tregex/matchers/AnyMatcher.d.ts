import type { CharMatcher } from '../../../../../../com/oracle/truffle/regex/tregex/matchers/CharMatcher.d.ts'
export class AnyMatcher extends CharMatcher {
    static create(): CharMatcher;
    static create(paraminvert: boolean): CharMatcher;
    constructor()
    estimatedCost(): number;
    match(c: number): boolean;
    toString(): string;
}