import type { InputStream } from '../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../java/nio/charset/Charset.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
export class ByteString$Companion extends Object {
    EMPTY: ByteString;
    // private serialVersionUID: number;
    decodeBase64(string: string): ByteString | null;
    decodeHex(string: string): ByteString;
    encodeString(string: string, charset: Charset): ByteString;
    encodeUtf8(string: string): ByteString;
    of(buffer: ByteBuffer): ByteString;
    of(data: number[]): ByteString;
    of(array: number[], offset: number, byteCount: number): ByteString;
    read(inputstream: InputStream, byteCount: number): ByteString;
}