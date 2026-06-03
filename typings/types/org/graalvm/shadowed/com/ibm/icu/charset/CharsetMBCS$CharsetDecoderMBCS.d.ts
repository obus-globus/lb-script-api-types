import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { CharsetDecoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetDecoderICU.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
import type { CharsetMBCS$UConverterMBCSTable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetMBCS$UConverterMBCSTable.d.ts'
export class CharsetMBCS$CharsetDecoderMBCS extends CharsetDecoderICU {
    constructor(null_: CharsetMBCS$CharsetDecoderMBCS, cs: CharsetICU)
    // private cnvMBCSSingleToBMPWithOffsets(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    // private cnvMBCSSingleToUnicodeWithOffsets(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    cnvMBCSToUnicodeWithOffsets(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    // private continueMatchToU(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, srcIndex: number, flush: boolean): CoderResult;
    decodeLoop(in_: ByteBuffer, out: CharBuffer): CoderResult;
    decodeLoop(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    // private getFallback(mbcsTable: CharsetMBCS$UConverterMBCSTable, offset: number): number;
    // private hasValidTrailBytes(stateTable: number[][], state: number): boolean;
    // private initialMatchToU(firstLength: number, source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, srcIndex: number, flush: boolean, cr: CoderResult[]): boolean;
    // private isSingleOrLead(stateTable: number[][], state: number, isDBCSOnly: boolean, b: number): boolean;
    // private matchToU(sisoState: number, preArray: number[], preArrayBegin: number, preLength: number, source: ByteBuffer, pMatchValue: number[], isUseFallback: boolean, flush: boolean): number;
    simpleGetNextUChar(source: ByteBuffer, useFallback: boolean): number;
    // private simpleMatchToU(source: ByteBuffer, useFallback: boolean): number;
    // private toU(length: number, source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, sourceIndex: number, flush: boolean, cr: CoderResult[]): number;
    // private toUWriteCodePoint(c: number, target: CharBuffer, offsets: IntBuffer, sourceIndex: number): CoderResult;
    // private writeToU(value: number, target: CharBuffer, offsets: IntBuffer, srcIndex: number): CoderResult;
}