import type { CharMatchers$Builder } from '../../../../../../../com/oracle/truffle/regex/charset/CharMatchers$Builder.d.ts'
import type { CompilationBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class SequentialMatchers$Builder extends Object {
    constructor(nBuffers: number)
    // private buffers: number[][];
    readonly matcherBuilder: CharMatchers$Builder;
    readonly noMatchSuccessor: number;
    createSplitMatcher(i: number, cps: (Object | null)[], compilationBuffer: CompilationBuffer, ...splitRanges: (Object | null)[][]): void;
    estimatedCost(i: number): number;
    finish(): number[];
    getBuffer(i: number): number[];
    getMatcherBuilder(): CharMatchers$Builder;
    getNoMatchSuccessor(): number;
    materialize(buf: number): number[];
    reset(nTransitions: number): void;
    setNoMatchSuccessor(noMatchSuccessor: number): void;
}