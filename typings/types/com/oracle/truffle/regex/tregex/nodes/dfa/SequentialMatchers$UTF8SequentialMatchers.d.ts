import type { CharMatcher } from '../../../../../../../com/oracle/truffle/regex/tregex/matchers/CharMatcher.d.ts'
import type { SequentialMatchers } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/SequentialMatchers.d.ts'
export class SequentialMatchers$UTF8SequentialMatchers extends SequentialMatchers {
    constructor(ascii: CharMatcher[], enc2: CharMatcher[], enc3: CharMatcher[], enc4: CharMatcher[], noMatchSuccessor: number)
    readonly ascii: CharMatcher[];
    readonly enc2: CharMatcher[];
    readonly enc3: CharMatcher[];
    readonly enc4: CharMatcher[];
    readonly maxBytes: number;
    getAscii(): CharMatcher[];
    getEnc2(): CharMatcher[];
    getEnc3(): CharMatcher[];
    getEnc4(): CharMatcher[];
    getMaxBytes(): number;
    match(c: number): number;
    match(i: number, c: number): boolean;
    size(): number;
    toString(): string;
    toString(i: number): string;
}