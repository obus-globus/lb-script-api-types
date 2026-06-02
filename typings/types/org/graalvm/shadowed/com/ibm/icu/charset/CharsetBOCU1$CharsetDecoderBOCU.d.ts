import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { CharsetDecoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetDecoderICU.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
export class CharsetBOCU1$CharsetDecoderBOCU extends CharsetDecoderICU {
    constructor(cs: CharsetICU)
    // private LabelLoop: boolean;
    // private afterTrail: boolean;
    // private byteIndex: number;
    // private bytes: number[];
    // private c: number;
    // private count: number;
    // private cr: CoderResult;
    // private diff: number;
    // private labelType: number;
    // private nextSourceIndex: number;
    // private prev: number;
    // private sourceIndex: number;
    // private afterGetTrail(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer): number;
    // private decodeBocu1LeadByte(b: number): number;
    // private decodeBocu1TrailByte(countValue: number, b: number): number;
    decodeLoop(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    // private endLoop(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer): void;
    // private fastSingle(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer): number;
    // private getTrail(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer): number;
}