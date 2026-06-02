import type { CharMatcher } from '../../../../../../com/oracle/truffle/regex/tregex/matchers/CharMatcher.d.ts'
export class EmptyMatcher extends CharMatcher {
    static create(paraminvert: boolean): CharMatcher;
    static create(): EmptyMatcher;
    constructor()
    estimatedCost(): number;
    match(c: number): boolean;
    toString(): string;
}