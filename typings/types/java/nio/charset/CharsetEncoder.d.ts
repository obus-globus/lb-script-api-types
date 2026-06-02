import type { WeakReference } from '../../../java/lang/ref/WeakReference.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../java/nio/CharBuffer.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { CharsetDecoder } from '../../../java/nio/charset/CharsetDecoder.d.ts'
import type { CoderResult } from '../../../java/nio/charset/CoderResult.d.ts'
import type { CodingErrorAction } from '../../../java/nio/charset/CodingErrorAction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export abstract class CharsetEncoder extends Object {
    constructor(arg0: Charset, arg1: number, arg2: number)
    constructor(arg0: Charset, arg1: number, arg2: number, arg3: number[])
    // private averageBytesPerChar: number;
    // private cachedDecoder: WeakReference<CharsetDecoder>;
    // private charset: Charset;
    // private malformedInputAction: CodingErrorAction;
    // private maxBytesPerChar: number;
    // private replacement: number[];
    // private state: number;
    // private unmappableCharacterAction: CodingErrorAction;
    averageBytesPerChar(): number;
    // private canEncode(arg0: CharBuffer): boolean;
    canEncode(arg0: string): boolean;
    canEncode(arg0: CharSequence): boolean;
    charset(): Charset;
    encode(arg0: CharBuffer): ByteBuffer;
    encode(arg0: CharBuffer, arg1: ByteBuffer, arg2: boolean): CoderResult;
    encodeLoop(arg0: CharBuffer, arg1: ByteBuffer): CoderResult;
    flush(arg0: ByteBuffer): CoderResult;
    implFlush(arg0: ByteBuffer): CoderResult;
    implOnMalformedInput(arg0: CodingErrorAction): void;
    implOnUnmappableCharacter(arg0: CodingErrorAction): void;
    implReplaceWith(arg0: number[]): void;
    implReset(): void;
    isLegalReplacement(arg0: number[]): boolean;
    malformedInputAction(): CodingErrorAction;
    maxBytesPerChar(): number;
    onMalformedInput(arg0: CodingErrorAction): CharsetEncoder;
    onUnmappableCharacter(arg0: CodingErrorAction): CharsetEncoder;
    replaceWith(arg0: number[]): CharsetEncoder;
    replacement(): number[];
    reset(): CharsetEncoder;
    // private throwIllegalStateException(arg0: number, arg1: number): void;
    unmappableCharacterAction(): CodingErrorAction;
}