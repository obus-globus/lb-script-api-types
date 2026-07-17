import type { Range } from '../../../../../../com/oracle/truffle/regex/charset/Range.d.ts'
import type { ByteArrayBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/ByteArrayBuffer.d.ts'
import type { DFACaptureGroupPartialTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupPartialTransition.d.ts'
import type { Encoding } from '../../../../../../com/oracle/truffle/regex/tregex/string/Encoding.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class CompilationBuffer extends Object {
    constructor(encoding: Encoding)
    readonly byteArrayBuffer: ByteArrayBuffer;
    readonly codePointSetAccumulator1: Range[];
    readonly codePointSetAccumulator2: Range[];
    readonly encoding: Encoding;
    readonly intRangesBuffer1: (Object | null)[];
    readonly intRangesBuffer2: (Object | null)[];
    readonly intRangesBuffer3: (Object | null)[];
    readonly lazyTransitionDeduplicationMap: EconomicMap<DFACaptureGroupPartialTransition, DFACaptureGroupPartialTransition>;
    readonly objectBuffer1: Object[];
    readonly objectBuffer2: Object[];
    readonly objectBuffer3: Object[];
    readonly shortArrayBuffer1: number[];
    readonly shortArrayBuffer2: number[];
    getByteArrayBuffer(): ByteArrayBuffer;
    getCodePointSetAccumulator1(): Range[];
    getCodePointSetAccumulator2(): Range[];
    getEncoding(): Encoding;
    getIntRangesBuffer1(): (Object | null)[];
    getIntRangesBuffer2(): (Object | null)[];
    getIntRangesBuffer3(): (Object | null)[];
    getLazyTransitionDeduplicationMap(): EconomicMap<DFACaptureGroupPartialTransition, DFACaptureGroupPartialTransition>;
    getObjectBuffer1<T extends unknown>(): T[];
    getObjectBuffer2<T extends unknown>(): T[];
    getObjectBuffer3<T extends unknown>(): T[];
    getShortArrayBuffer1(): number[];
    getShortArrayBuffer2(): number[];
}