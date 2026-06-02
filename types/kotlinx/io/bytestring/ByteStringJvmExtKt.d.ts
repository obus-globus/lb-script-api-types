import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ByteString } from '../../../kotlinx/io/bytestring/ByteString.d.ts'
export class ByteStringJvmExtKt extends Object {
    static asReadOnlyByteBuffer(paramarg0: ByteString): ByteBuffer;
    static decodeToString(paramarg0: ByteString, paramarg1: Charset): string;
    static encodeToByteString(paramarg0: string, paramarg1: Charset): ByteString;
    static getByteString(paramarg0: ByteBuffer, paramarg1: number): ByteString;
    static getByteString(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number): ByteString;
    static putByteString(paramarg0: ByteBuffer, paramarg1: number, paramarg2: ByteString): void;
    static putByteString(paramarg0: ByteBuffer, paramarg1: ByteString): void;
}