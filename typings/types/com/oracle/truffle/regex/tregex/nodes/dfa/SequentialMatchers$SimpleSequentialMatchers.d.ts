import type { SequentialMatchers } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/SequentialMatchers.d.ts'
export class SequentialMatchers$SimpleSequentialMatchers extends SequentialMatchers {
    static NO_MATCHER: number;
    constructor(matcherRefs: number[], noMatchSuccessor: number)
    readonly matcherRefs: number[];
    getMatcherRefs(): number[];
    match(matchers: number[], c: number): number;
    match(matchers: number[], i: number, c: number): boolean;
    size(): number;
    toString(): string;
    toString(i: number): string;
    toString(matchers: number[], i: number): string;
}