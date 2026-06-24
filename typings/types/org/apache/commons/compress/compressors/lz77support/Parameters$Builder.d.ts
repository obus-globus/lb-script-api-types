import type { Parameters$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Parameters } from '../../../../../../org/apache/commons/compress/compressors/lz77support/Parameters.d.ts'
export class Parameters$Builder extends Object {
    private constructor(arg0: number)
    constructor(arg0: number, arg1: Parameters$1)
    // private lazyMatches: boolean;
    // private lazyThreshold: number;
    // private maxBackReferenceLength: number;
    // private maxCandidates: number;
    // private maxLiteralLength: number;
    // private maxOffset: number;
    // private minBackReferenceLength: number;
    // private niceBackReferenceLength: number;
    // private windowSize: number;
    build(): Parameters;
    tunedForCompressionRatio(): Parameters$Builder;
    tunedForSpeed(): Parameters$Builder;
    withLazyMatching(arg0: boolean): Parameters$Builder;
    withLazyThreshold(arg0: number): Parameters$Builder;
    withMaxBackReferenceLength(arg0: number): Parameters$Builder;
    withMaxLiteralLength(arg0: number): Parameters$Builder;
    withMaxNumberOfCandidates(arg0: number): Parameters$Builder;
    withMaxOffset(arg0: number): Parameters$Builder;
    withMinBackReferenceLength(arg0: number): Parameters$Builder;
    withNiceBackReferenceLength(arg0: number): Parameters$Builder;
}