import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { CharsetDecoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetDecoderICU.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
import type { UConverterSharedData } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/UConverterSharedData.d.ts'
export class CharsetLMBCS$CharsetDecoderLMBCS extends CharsetDecoderICU {
    constructor(null_: CharsetLMBCS$CharsetDecoderLMBCS, cs: CharsetICU)
    // private GetUniFromLMBCSUni(ppLMBCSin: ByteBuffer): string;
    // private LMBCSGetNextUCharWorker(source: ByteBuffer, err: CoderResult[]): number;
    // private LMBCS_SimpleGetNextUChar(cnv: UConverterSharedData, source: ByteBuffer, positionOffset: number, length: number): number;
    decodeLoop(in_: ByteBuffer, out: CharBuffer): CoderResult;
    decodeLoop(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    implReset(): void;
}