import type { SequentialMatchers } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/SequentialMatchers.d.ts'
export class SequentialMatchers$UTF16RawSequentialMatchers extends SequentialMatchers {
    static NO_MATCHER: number;
    constructor(asciiRefs: number[], latin1Refs: number[], bmpRefs: number[], noMatchSuccessor: number)
    readonly asciiRefs: number[];
    readonly bmpRefs: number[];
    readonly latin1Refs: number[];
    getAsciiRefs(): number[];
    getBmpRefs(): number[];
    getLatin1Refs(): number[];
    match(matchers: number[], c: number): number;
    match(matchers: number[], i: number, c: number): boolean;
    size(): number;
    toString(): string;
    toString(i: number): string;
    toString(matchers: number[], i: number): string;
}