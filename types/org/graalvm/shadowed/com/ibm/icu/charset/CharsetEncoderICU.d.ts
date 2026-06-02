import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CharsetEncoder } from '../../../../../../../java/nio/charset/CharsetEncoder.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { CodingErrorAction } from '../../../../../../../java/nio/charset/CodingErrorAction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharsetCallback$Encoder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetCallback$Encoder.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
export abstract class CharsetEncoderICU extends CharsetEncoder {
    static getMaxBytesForString(paramlength: number, parammaxCharSize: number): number;
    constructor(cs: CharsetICU, replacement: number[])
    // private errorBuffer: number[];
    // private errorBufferLength: number;
    // private fromCharErrorBehaviour: CharsetCallback$Encoder;
    // private fromUChar32: number;
    fromUContext: Object;
    // private fromUnicodeStatus: number;
    // private invalidUCharBuffer: string[];
    // private invalidUCharLength: number;
    // private onMalformedInput: CharsetCallback$Encoder;
    // private onUnmappableInput: CharsetCallback$Encoder;
    // private preFromUArray: string[];
    // private preFromUBegin: number;
    // private preFromUFirstCP: number;
    // private preFromULength: number;
    // private useFallback: boolean;
    // private useSubChar1: boolean;
    cbFromUWriteSub(encoder: CharsetEncoderICU, source: CharBuffer, target: ByteBuffer, offsets: IntBuffer): CoderResult;
    cbFromUWriteUChars(encoder: CharsetEncoderICU, source: CharBuffer, target: ByteBuffer, offsets: IntBuffer): CoderResult;
    encode(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    encodeLoop(in_: CharBuffer, out: ByteBuffer): CoderResult;
    encodeLoop(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    fromUCountPending(): number;
    // private fromUnicodeReset(): void;
    fromUnicodeWithCallback(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    handleSurrogates(source: CharBuffer, lead: string): CoderResult;
    handleSurrogates(sourceArray: string[], sourceIndex: number, sourceLimit: number, lead: string): CoderResult;
    implFlush(out: ByteBuffer): CoderResult;
    implOnMalformedInput(newAction: CodingErrorAction): void;
    implOnUnmappableCharacter(newAction: CodingErrorAction): void;
    implReset(): void;
    isFallbackUsed(): boolean;
    isFromUUseFallback(c: number): boolean;
    isLegalReplacement(repl: number[]): boolean;
    maxCharsPerByte(): number;
    setFallbackUsed(usesFallback: boolean): void;
    setFromUCallback(err: CoderResult, newCallback: CharsetCallback$Encoder, newContext: Object): void;
    setFromUContext(newContext: Object): void;
    // private setSourcePosition(source: CharBuffer): void;
}