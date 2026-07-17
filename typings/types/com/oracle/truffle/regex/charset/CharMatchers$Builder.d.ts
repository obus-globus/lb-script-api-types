import type { CompressedCodePointSet } from '../../../../../com/oracle/truffle/regex/charset/CompressedCodePointSet.d.ts'
import type { CompilationBuffer } from '../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class CharMatchers$Builder extends Object {
    constructor()
    // private buffer: number[];
    // private matcherMap: EconomicMap<(Object | null)[], number>;
    // private appendBitSet(bitSet: number[]): number;
    // private appendBitSetMatcher(cps: (Object | null)[], inverse: boolean): number;
    // private appendHeader(kind: number, inverse: boolean): number;
    // private appendHeader(kind: number, inverse: boolean, payload: number): number;
    // private appendHybridBitSet(ccps: CompressedCodePointSet, inverse: boolean): number;
    // private appendMatcher(cps: (Object | null)[], compilationBuffer: CompilationBuffer, inverse: boolean): number;
    // private appendRanges(kind: number, inverse: boolean, ranges: number[], rangeCount: number): number;
    estimatedCost(matcherRecord: number): number;
    getOrCreateMatcher(cps: (Object | null)[], compilationBuffer: CompilationBuffer): number;
    toArray(): number[];
}