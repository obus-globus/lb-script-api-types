import type { CharMatcher } from '../../../../../../../com/oracle/truffle/regex/tregex/matchers/CharMatcher.d.ts'
import type { SequentialMatchers } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/SequentialMatchers.d.ts'
export class SequentialMatchers$UTF16RawSequentialMatchers extends SequentialMatchers {
    constructor(ascii: CharMatcher[], latin1: CharMatcher[], bmp: CharMatcher[], noMatchSuccessor: number)
    readonly ascii: CharMatcher[];
    readonly bmp: CharMatcher[];
    readonly latin1: CharMatcher[];
    getAscii(): CharMatcher[];
    getBmp(): CharMatcher[];
    getLatin1(): CharMatcher[];
    match(i: number, c: number): boolean;
    size(): number;
    toString(i: number): string;
}