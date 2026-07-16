import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ByteString } from '../../../kotlinx/io/bytestring/ByteString.d.ts'
export class ByteStringJvmExtKt extends Object {
    static asReadOnlyByteBuffer(self: ByteString): ByteBuffer;
    static decodeToString(self: ByteString, charset: Charset): string;
    static encodeToByteString(self: string, charset: Charset): ByteString;
    static getByteString(self: ByteBuffer, length: number): ByteString;
    static getByteString(self: ByteBuffer, at: number, length: number): ByteString;
    static putByteString(self: ByteBuffer, at: number, string: ByteString): void;
    static putByteString(self: ByteBuffer, string: ByteString): void;
}