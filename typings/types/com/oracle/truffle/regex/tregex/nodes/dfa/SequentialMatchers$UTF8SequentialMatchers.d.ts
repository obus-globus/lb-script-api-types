import type { SequentialMatchers } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/SequentialMatchers.d.ts'
export class SequentialMatchers$UTF8SequentialMatchers extends SequentialMatchers {
    static NO_MATCHER: number;
    constructor(asciiRefs: number[], enc2Refs: number[], enc3Refs: number[], enc4Refs: number[], noMatchSuccessor: number)
    readonly asciiRefs: number[];
    readonly enc2Refs: number[];
    readonly enc3Refs: number[];
    readonly enc4Refs: number[];
    readonly maxBytes: number;
    getAsciiRefs(): number[];
    getEnc2Refs(): number[];
    getEnc3Refs(): number[];
    getEnc4Refs(): number[];
    getMaxBytes(): number;
    match(matchers: number[], c: number): number;
    match(matchers: number[], i: number, c: number): boolean;
    size(): number;
    toString(): string;
    toString(i: number): string;
    toString(matchers: number[], i: number): string;
}