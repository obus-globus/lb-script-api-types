import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CharsetDecoder } from '../../../../../../../java/nio/charset/CharsetDecoder.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { CodingErrorAction } from '../../../../../../../java/nio/charset/CodingErrorAction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharsetCallback$Decoder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetCallback$Decoder.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
export abstract class CharsetDecoderICU extends CharsetDecoder {
    constructor(cs: CharsetICU)
    // private EMPTY: ByteBuffer;
    // private charErrorBufferArray: string[];
    // private charErrorBufferBegin: number;
    // private charErrorBufferLength: number;
    // private invalidCharBuffer: string[];
    // private invalidCharLength: number;
    // private malformedInputCalled: boolean;
    // private mode: number;
    // private onMalformedInput: CharsetCallback$Decoder;
    // private onUnmappableCharacter: CharsetCallback$Decoder;
    // private preToUArray: number[];
    // private preToUBegin: number;
    // private preToUFirstLength: number;
    // private preToULength: number;
    // private toCharErrorBehaviour: CharsetCallback$Decoder;
    // private toUBytesArray: number[];
    // private toUBytesBegin: number;
    // private toUContext: Object;
    // private toULength: number;
    // private toUnicodeStatus: number;
    // private unmappableCharacterCalled: boolean;
    // private copy(src: number[], srcOffset: number, dst: string[], dstOffset: number, length: number): void;
    decode(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    decodeLoop(in_: ByteBuffer, out: CharBuffer): CoderResult;
    decodeLoop(in_: ByteBuffer, out: CharBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    implFlush(out: CharBuffer): CoderResult;
    implOnMalformedInput(newAction: CodingErrorAction): void;
    implOnUnmappableCharacter(newAction: CodingErrorAction): void;
    implReset(): void;
    isFallbackUsed(): boolean;
    maxBytesPerChar(): number;
    setToUCallback(err: CoderResult, newCallback: CharsetCallback$Decoder, newContext: Object): void;
    toUCountPending(): number;
    toUnicodeWithCallback(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
}