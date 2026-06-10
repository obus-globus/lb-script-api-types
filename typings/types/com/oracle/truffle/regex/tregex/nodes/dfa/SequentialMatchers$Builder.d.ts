import type { CompilationBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { CharMatcher } from '../../../../../../../com/oracle/truffle/regex/tregex/matchers/CharMatcher.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class SequentialMatchers$Builder extends Object {
    constructor(nBuffers: number)
    // private buffers: CharMatcher[][];
    readonly noMatchSuccessor: number;
    createSplitMatcher(i: number, cps: (Object | null)[], compilationBuffer: CompilationBuffer, splitRanges: (Object | null)[][]): void;
    estimatedCost(i: number): number;
    getBuffer(i: number): CharMatcher[];
    getNoMatchSuccessor(): number;
    materialize(buf: number): CharMatcher[];
    reset(nTransitions: number): void;
    setNoMatchSuccessor(noMatchSuccessor: number): void;
}