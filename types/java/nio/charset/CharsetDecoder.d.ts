import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../java/nio/CharBuffer.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { CoderResult } from '../../../java/nio/charset/CoderResult.d.ts'
import type { CodingErrorAction } from '../../../java/nio/charset/CodingErrorAction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class CharsetDecoder extends Object {
    constructor(arg0: Charset, arg1: number, arg2: number)
    private constructor(arg0: Charset, arg1: number, arg2: number, arg3: string)
    // private averageCharsPerByte: number;
    // private charset: Charset;
    // private malformedInputAction: CodingErrorAction;
    // private maxCharsPerByte: number;
    // private replacement: string;
    // private state: number;
    // private unmappableCharacterAction: CodingErrorAction;
    averageCharsPerByte(): number;
    charset(): Charset;
    decode(arg0: ByteBuffer): CharBuffer;
    decode(arg0: ByteBuffer, arg1: CharBuffer, arg2: boolean): CoderResult;
    decodeLoop(arg0: ByteBuffer, arg1: CharBuffer): CoderResult;
    detectedCharset(): Charset;
    flush(arg0: CharBuffer): CoderResult;
    implFlush(arg0: CharBuffer): CoderResult;
    implOnMalformedInput(arg0: CodingErrorAction): void;
    implOnUnmappableCharacter(arg0: CodingErrorAction): void;
    implReplaceWith(arg0: string): void;
    implReset(): void;
    isAutoDetecting(): boolean;
    isCharsetDetected(): boolean;
    malformedInputAction(): CodingErrorAction;
    maxCharsPerByte(): number;
    onMalformedInput(arg0: CodingErrorAction): CharsetDecoder;
    onUnmappableCharacter(arg0: CodingErrorAction): CharsetDecoder;
    replaceWith(arg0: string): CharsetDecoder;
    replacement(): string;
    reset(): CharsetDecoder;
    // private throwIllegalStateException(arg0: number, arg1: number): void;
    unmappableCharacterAction(): CodingErrorAction;
}