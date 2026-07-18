import type { CharMatcher } from '../../../../../../../com/oracle/truffle/regex/tregex/matchers/CharMatcher.d.ts'
import type { SequentialMatchers } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/SequentialMatchers.d.ts'
export class SequentialMatchers$UTF16Or32SequentialMatchers extends SequentialMatchers {
    constructor(ascii: CharMatcher[], latin1: CharMatcher[], bmp: CharMatcher[], astral: CharMatcher[], noMatchSuccessor: number)
    readonly ascii: CharMatcher[];
    readonly astral: CharMatcher[];
    readonly bmp: CharMatcher[];
    readonly latin1: CharMatcher[];
    getAscii(): CharMatcher[];
    getAstral(): CharMatcher[];
    getBmp(): CharMatcher[];
    getLatin1(): CharMatcher[];
    match(c: number): number;
    match(i: number, c: number): boolean;
    size(): number;
    toString(): string;
    toString(i: number): string;
}