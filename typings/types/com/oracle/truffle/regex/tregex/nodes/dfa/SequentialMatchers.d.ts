import type { Matchers } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/Matchers.d.ts'
export abstract class SequentialMatchers extends Matchers {
    static NO_MATCHER: number;
    constructor(noMatchSuccessor: number)
    readonly noMatchSuccessor: number;
    getNoMatchSuccessor(): number;
    match(matchers: number[], c: number): number;
    match(matchers: number[], i: number, c: number): boolean;
    size(): number;
    toString(): string;
    toString(i: number): string;
    toString(matchers: number[], i: number): string;
}