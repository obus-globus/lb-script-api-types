import type { CharMatcher } from '../../../../../../../com/oracle/truffle/regex/tregex/matchers/CharMatcher.d.ts'
import type { SequentialMatchers } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/SequentialMatchers.d.ts'
export class SequentialMatchers$SimpleSequentialMatchers extends SequentialMatchers {
    constructor(matchers: CharMatcher[], noMatchSuccessor: number)
    readonly matchers: CharMatcher[];
    getMatchers(): CharMatcher[];
    match(c: number): number;
    match(i: number, c: number): boolean;
    size(): number;
    toString(): string;
    toString(i: number): string;
}