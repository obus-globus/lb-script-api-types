import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharsetEncoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetEncoderICU.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
import type { CharsetLMBCS } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetLMBCS.d.ts'
export class CharsetLMBCS$CharsetEncoderLMBCS extends CharsetEncoderICU {
    static getMaxBytesForString(paramlength: number, parammaxCharSize: number): number;
    constructor(null_: CharsetLMBCS, cs: CharsetICU)
    // private LMBCSConversionWorker(group: number, LMBCS: number[], pUniChar: string, lastConverterIndex: number[], groups_tried: (Object | null)[]): number;
    // private LMBCSConvertUni(LMBCS: number[], uniChar: string): number;
    encodeLoop(in_: CharBuffer, out: ByteBuffer): CoderResult;
    encodeLoop(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    implReset(): void;
}