import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { CharsetEncoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetEncoderICU.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
export class CharsetBOCU1$CharsetEncoderBOCU extends CharsetEncoderICU {
    static getMaxBytesForString(paramlength: number, parammaxCharSize: number): number;
    constructor(null_: CharsetBOCU1$CharsetEncoderBOCU, cs: CharsetICU)
    // private LabelLoop: boolean;
    // private LoopAfterTrail: boolean;
    // private c: number;
    // private checkNegative: boolean;
    // private cr: CoderResult;
    // private diff: number;
    // private labelType: number;
    // private nextSourceIndex: number;
    // private prev: number;
    // private sourceIndex: number;
    // private targetCapacity: number;
    // private NEGDIVMOD(n: number, d: number, m: number): number;
    encodeLoop(in_: CharBuffer, out: ByteBuffer): CoderResult;
    encodeLoop(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    // private fastSingle(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer): number;
    // private getTrail(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer): number;
    // private packDiff(n: number): number;
    // private regularLoop(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer): number;
}