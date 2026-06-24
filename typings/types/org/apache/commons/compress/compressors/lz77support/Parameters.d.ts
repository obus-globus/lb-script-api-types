import type { Parameters$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Parameters$Builder } from '../../../../../../org/apache/commons/compress/compressors/lz77support/Parameters$Builder.d.ts'
export class Parameters extends Object {
    static TRUE_MIN_BACK_REFERENCE_LENGTH: number;
    static builder(paramarg0: number): Parameters$Builder;
    private constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number, arg9: Parameters$1)
    readonly lazyMatching: boolean;
    // private lazyThreshold: number;
    readonly maxBackReferenceLength: number;
    readonly maxCandidates: number;
    readonly maxLiteralLength: number;
    readonly maxOffset: number;
    readonly minBackReferenceLength: number;
    readonly niceBackReferenceLength: number;
    readonly windowSize: number;
    getLazyMatching(): boolean;
    getLazyMatchingThreshold(): number;
    getMaxBackReferenceLength(): number;
    getMaxCandidates(): number;
    getMaxLiteralLength(): number;
    getMaxOffset(): number;
    getMinBackReferenceLength(): number;
    getNiceBackReferenceLength(): number;
    getWindowSize(): number;
}