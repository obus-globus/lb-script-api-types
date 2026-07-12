import type { InputStream } from '../java/io/InputStream.d.ts'
import type { OutputStream } from '../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../java/nio/charset/Charset.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
import type { ByteString$Companion } from '../okio/ByteString$Companion.d.ts'
export class SegmentedByteString extends ByteString {
    static Companion: ByteString$Companion;
    static EMPTY: ByteString;
    static decodeBase64(paramarg0: string): ByteString;
    static decodeHex(paramarg0: string): ByteString;
    static encodeString(paramarg0: string, paramarg1: Charset): ByteString;
    static encodeUtf8(paramarg0: string): ByteString;
    static of(...paramarg0: number[]): ByteString;
    static of(paramarg0: number[], paramarg1: number, paramarg2: number): ByteString;
    static of(paramarg0: ByteBuffer): ByteString;
    static read(paramarg0: InputStream, paramarg1: number): ByteString;
    constructor(segments: number[][], directory: number[])
    // private directory: number[];
    /*not mapped: */ getDirectory$okio(): number[];
    // private segments: number[][];
    /*not mapped: */ getSegments$okio(): number[][];
    asByteBuffer(): ByteBuffer;
    base64(): string;
    base64Url(): string;
    copyInto(offset: number, target: number[], targetOffset: number, byteCount: number): void;
    digest(algorithm: string): ByteString;
    equals(other: Object | null): boolean;
    getSize(): number;
    hashCode(): number;
    hex(): string;
    hmac(algorithm: string, key: ByteString): ByteString;
    indexOf(other: number[], fromIndex: number): number;
    indexOf(other: ByteString, fromIndex: number): number;
    internalArray(): number[];
    internalGet(pos: number): number;
    lastIndexOf(other: number[], fromIndex: number): number;
    lastIndexOf(other: ByteString, fromIndex: number): number;
    rangeEquals(offset: number, other: number[], otherOffset: number, byteCount: number): boolean;
    rangeEquals(offset: number, other: ByteString, otherOffset: number, byteCount: number): boolean;
    string(charset: Charset): string;
    substring(beginIndex: number, endIndex: number): ByteString;
    toAsciiLowercase(): ByteString;
    toAsciiUppercase(): ByteString;
    toByteArray(): number[];
    // private toByteString(): ByteString;
    toString(): string;
    write(out: OutputStream): void;
    write(buffer: Buffer, offset: number, byteCount: number): void;
    // private writeReplace(): Object;
}