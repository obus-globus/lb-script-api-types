import type { Matchers } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/Matchers.d.ts'
export abstract class SequentialMatchers extends Matchers {
    constructor(noMatchSuccessor: number)
    readonly noMatchSuccessor: number;
    getNoMatchSuccessor(): number;
    match(c: number): number;
    match(i: number, c: number): boolean;
    size(): number;
    toString(): string;
    toString(i: number): string;
}