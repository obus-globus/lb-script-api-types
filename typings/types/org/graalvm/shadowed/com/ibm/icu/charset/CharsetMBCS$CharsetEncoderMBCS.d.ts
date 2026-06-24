import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { CharsetEncoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetEncoderICU.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
import type { CharsetMBCS } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetMBCS.d.ts'
import type { CharsetMBCS$CharsetEncoderMBCS$SideEffects } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetMBCS$CharsetEncoderMBCS$SideEffects.d.ts'
import type { CharsetMBCS$CharsetEncoderMBCS$SideEffectsDouble } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetMBCS$CharsetEncoderMBCS$SideEffectsDouble.d.ts'
import type { CharsetMBCS$CharsetEncoderMBCS$SideEffectsSingleBMP } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetMBCS$CharsetEncoderMBCS$SideEffectsSingleBMP.d.ts'
export class CharsetMBCS$CharsetEncoderMBCS extends CharsetEncoderICU {
    static getMaxBytesForString(paramlength: number, parammaxCharSize: number): number;
    constructor(null_: CharsetMBCS, cs: CharsetICU)
    // private allowReplacementChanges: boolean;
    cbFromUWriteSub(encoder: CharsetEncoderICU, source: CharBuffer, target: ByteBuffer, offsets: IntBuffer): CoderResult;
    // private cnvMBCSDoubleFromUnicodeWithOffsets(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    cnvMBCSFromUnicodeWithOffsets(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    // private cnvMBCSSingleFromBMPWithOffsets(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    // private cnvMBCSSingleFromUnicodeWithOffsets(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    // private continueMatchFromU(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, flush: boolean, srcIndex: number): CoderResult;
    encodeLoop(in_: CharBuffer, out: ByteBuffer): CoderResult;
    encodeLoop(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    // private fromU(cp: number, source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, sourceIndex: number, length: number, flush: boolean, cr: CoderResult[]): number;
    fromUChar32(c: number, pValue: number[], isUseFallback: boolean): number;
    // private getTrail(source: CharBuffer, target: ByteBuffer, uniMask: number, x: CharsetMBCS$CharsetEncoderMBCS$SideEffects, flush: boolean, cr: CoderResult[]): boolean;
    // private getTrailDouble(source: CharBuffer, target: ByteBuffer, uniMask: number, x: CharsetMBCS$CharsetEncoderMBCS$SideEffectsDouble, flush: boolean, cr: CoderResult[]): boolean;
    // private getTrailSingleBMP(source: CharBuffer, x: CharsetMBCS$CharsetEncoderMBCS$SideEffectsSingleBMP, cr: CoderResult[]): boolean;
    implReplaceWith(replacement: number[]): void;
    implReset(): void;
    // private initialMatchFromU(cp: number, source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, srcIndex: number, flush: boolean, cr: CoderResult[]): boolean;
    // private matchFromU(firstCP: number, preArray: string[], preArrayBegin: number, preLength: number, source: CharBuffer, pMatchValue: number[], isUseFallback: boolean, flush: boolean): number;
    // private simpleMatchFromU(cp: number, pValue: number[], isUseFallback: boolean): number;
    // private unassigned(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, x: CharsetMBCS$CharsetEncoderMBCS$SideEffects, flush: boolean, cr: CoderResult[]): boolean;
    // private unassignedDouble(source: CharBuffer, target: ByteBuffer, x: CharsetMBCS$CharsetEncoderMBCS$SideEffectsDouble, flush: boolean, cr: CoderResult[]): boolean;
    // private writeFromU(value: number, target: ByteBuffer, offsets: IntBuffer, srcIndex: number): CoderResult;
}