import type { Range } from '../../../../../../com/oracle/truffle/regex/charset/Range.d.ts'
import type { ByteArrayBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/ByteArrayBuffer.d.ts'
import type { CharMatcher } from '../../../../../../com/oracle/truffle/regex/tregex/matchers/CharMatcher.d.ts'
import type { DFACaptureGroupPartialTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupPartialTransition.d.ts'
import type { Encodings$Encoding } from '../../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class CompilationBuffer extends Object {
    constructor(encoding: Encodings$Encoding)
    readonly byteArrayBuffer: ByteArrayBuffer;
    readonly byteSizeBitSet: number[];
    readonly codePointSetAccumulator1: Range[];
    readonly codePointSetAccumulator2: Range[];
    readonly encoding: Encodings$Encoding;
    readonly intRangesBuffer1: (Object | null)[];
    readonly intRangesBuffer2: (Object | null)[];
    readonly intRangesBuffer3: (Object | null)[];
    readonly lazyTransitionDeduplicationMap: EconomicMap<DFACaptureGroupPartialTransition, DFACaptureGroupPartialTransition>;
    readonly matcherDeduplicationMap: EconomicMap<(Object | null)[], CharMatcher>;
    readonly objectBuffer1: Object[];
    readonly objectBuffer2: Object[];
    readonly objectBuffer3: Object[];
    readonly shortArrayBuffer1: number[];
    readonly shortArrayBuffer2: number[];
    getByteArrayBuffer(): ByteArrayBuffer;
    getByteSizeBitSet(): number[];
    getCodePointSetAccumulator1(): Range[];
    getCodePointSetAccumulator2(): Range[];
    getEncoding(): Encodings$Encoding;
    getIntRangesBuffer1(): (Object | null)[];
    getIntRangesBuffer2(): (Object | null)[];
    getIntRangesBuffer3(): (Object | null)[];
    getLazyTransitionDeduplicationMap(): EconomicMap<DFACaptureGroupPartialTransition, DFACaptureGroupPartialTransition>;
    getMatcherDeduplicationMap(): EconomicMap<(Object | null)[], CharMatcher>;
    getObjectBuffer1<T extends Object | number | string | boolean>(): T[];
    getObjectBuffer2<T extends Object | number | string | boolean>(): T[];
    getObjectBuffer3<T extends Object | number | string | boolean>(): T[];
    getShortArrayBuffer1(): number[];
    getShortArrayBuffer2(): number[];
}