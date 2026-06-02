import type { InputStream } from '../java/io/InputStream.d.ts'
import type { ObjectInputStream } from '../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../java/io/ObjectOutputStream.d.ts'
import type { OutputStream } from '../java/io/OutputStream.d.ts'
import type { Serializable } from '../java/io/Serializable.d.ts'
import type { ByteBuffer } from '../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../java/nio/charset/Charset.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Comparable } from '../java/lang/Comparable.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { ByteString$Companion } from '../okio/ByteString$Companion.d.ts'
export class ByteString extends Object implements Serializable, Comparable<ByteString> {
    static Companion: ByteString$Companion;
    static EMPTY: ByteString;
    static decodeBase64(paramarg0: string): ByteString;
    static decodeHex(paramarg0: string): ByteString;
    static encodeString(paramarg0: string, paramarg1: Charset): ByteString;
    static encodeUtf8(paramarg0: string): ByteString;
    static of(paramarg0: number[]): ByteString;
    static of(paramarg0: number[], paramarg1: number, paramarg2: number): ByteString;
    static of(paramarg0: ByteBuffer): ByteString;
    static read(paramarg0: InputStream, paramarg1: number): ByteString;
    constructor(data: number[])
    // private data: number[];
    /*not mapped: */ getData$okio(): number[];
    // private hashCode: number;
    /*not mapped: */ getHashCode$okio(): number;
    size(): number;
    // private utf8: string | null;
    /*not mapped: */ getUtf8$okio(): string | null;
    asByteBuffer(): ByteBuffer;
    base64(): string;
    base64Url(): string;
    compareTo(other: ByteString): number;
    copyInto(offset: number, target: number[], targetOffset: number, byteCount: number): void;
    digest(algorithm: string): ByteString;
    endsWith(suffix: number[]): boolean;
    endsWith(suffix: ByteString): boolean;
    equals(other: Object | null): boolean;
    get(index: number): number;
    getByte(index: number): number;
    getSize(): number;
    hashCode(): number;
    hex(): string;
    hmac(algorithm: string, key: ByteString): ByteString;
    hmacSha1(key: ByteString): ByteString;
    hmacSha256(key: ByteString): ByteString;
    hmacSha512(key: ByteString): ByteString;
    indexOf(other: number[], fromIndex: number): number;
    indexOf(other: ByteString, fromIndex: number): number;
    internalArray(): number[];
    internalGet(pos: number): number;
    lastIndexOf(other: number[], fromIndex: number): number;
    lastIndexOf(other: ByteString, fromIndex: number): number;
    md5(): ByteString;
    rangeEquals(offset: number, other: number[], otherOffset: number, byteCount: number): boolean;
    rangeEquals(offset: number, other: ByteString, otherOffset: number, byteCount: number): boolean;
    // private readObject(in_: ObjectInputStream): void;
    sha1(): ByteString;
    sha256(): ByteString;
    sha512(): ByteString;
    size(): number;
    startsWith(prefix: number[]): boolean;
    startsWith(prefix: ByteString): boolean;
    string(charset: Charset): string;
    substring(beginIndex: number, endIndex: number): ByteString;
    toAsciiLowercase(): ByteString;
    toAsciiUppercase(): ByteString;
    toByteArray(): number[];
    toString(): string;
    utf8(): string;
    write(out: OutputStream): void;
    write(buffer: Buffer, offset: number, byteCount: number): void;
    // private writeObject(out: ObjectOutputStream): void;
}