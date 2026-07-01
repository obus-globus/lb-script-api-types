import type { InputStream } from '../java/io/InputStream.d.ts'
import type { OutputStream } from '../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../java/nio/ByteBuffer.d.ts'
import type { ByteChannel } from '../java/nio/channels/ByteChannel.d.ts'
import type { Charset } from '../java/nio/charset/Charset.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Cloneable } from '../java/lang/Cloneable.d.ts'
import type { Buffer$UnsafeCursor } from '../okio/Buffer$UnsafeCursor.d.ts'
import type { BufferedSink } from '../okio/BufferedSink.d.ts'
import type { BufferedSource } from '../okio/BufferedSource.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
import type { Segment } from '../okio/Segment.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
import type { Source } from '../okio/Source.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
export class Buffer extends Object implements ByteChannel, Cloneable, BufferedSink, BufferedSource {
    constructor()
    head: Segment | null;
    // private size: number;
    size(): number;
    buffer(): Buffer;
    clear(): void;
    clone(): Buffer;
    close(): void;
    completeSegmentByteCount(): number;
    copy(): Buffer;
    copyTo(out: OutputStream, offset: number, byteCount: number): Buffer;
    copyTo(out: Buffer, offset: number): Buffer;
    copyTo(out: Buffer, offset: number, byteCount: number): Buffer;
    // private digest(algorithm: string): ByteString;
    emit(): Buffer;
    emitCompleteSegments(): Buffer;
    equals(other: Object | null): boolean;
    exhausted(): boolean;
    flush(): void;
    get(pos: number): number;
    getByte(index: number): number;
    hashCode(): number;
    // private hmac(algorithm: string, key: ByteString): ByteString;
    hmacSha1(key: ByteString): ByteString;
    hmacSha256(key: ByteString): ByteString;
    hmacSha512(key: ByteString): ByteString;
    indexOf(b: number): number;
    indexOf(b: number, fromIndex: number): number;
    indexOf(b: number, fromIndex: number, toIndex: number): number;
    indexOf(bytes: ByteString): number;
    indexOf(bytes: ByteString, fromIndex: number): number;
    indexOf(bytes: ByteString, fromIndex: number, toIndex: number): number;
    indexOfElement(targetBytes: ByteString): number;
    indexOfElement(targetBytes: ByteString, fromIndex: number): number;
    inputStream(): InputStream;
    isOpen(): boolean;
    md5(): ByteString;
    outputStream(): OutputStream;
    peek(): BufferedSource;
    rangeEquals(offset: number, bytes: ByteString): boolean;
    rangeEquals(offset: number, bytes: ByteString, bytesOffset: number, byteCount: number): boolean;
    read(sink: ByteBuffer): number;
    read(sink: number[]): number;
    read(sink: number[], offset: number, byteCount: number): number;
    read(sink: Buffer, byteCount: number): number;
    readAll(sink: Sink): number;
    readAndWriteUnsafe(unsafeCursor: Buffer$UnsafeCursor): Buffer$UnsafeCursor;
    readByte(): number;
    readByteArray(): number[];
    readByteArray(byteCount: number): number[];
    readByteString(): ByteString;
    readByteString(byteCount: number): ByteString;
    readDecimalLong(): number;
    readFrom(input: InputStream): Buffer;
    readFrom(input: InputStream, byteCount: number): Buffer;
    // private readFrom(input: InputStream, byteCount: number, forever: boolean): void;
    readFully(sink: number[]): void;
    readFully(sink: Buffer, byteCount: number): void;
    readHexadecimalUnsignedLong(): number;
    readInt(): number;
    readIntLe(): number;
    readLong(): number;
    readLongLe(): number;
    readShort(): number;
    readShortLe(): number;
    readString(charset: Charset): string;
    readString(byteCount: number, charset: Charset): string;
    readUnsafe(unsafeCursor: Buffer$UnsafeCursor): Buffer$UnsafeCursor;
    readUtf8(): string;
    readUtf8(byteCount: number): string;
    readUtf8CodePoint(): number;
    readUtf8Line(): string | null;
    readUtf8LineStrict(): string;
    readUtf8LineStrict(limit: number): string;
    request(byteCount: number): boolean;
    require(byteCount: number): void;
    select(options: (Object | null)[]): number;
    select<T extends unknown>(options: T[]): T | null;
    sha1(): ByteString;
    sha256(): ByteString;
    sha512(): ByteString;
    size(): number;
    skip(byteCount: number): void;
    snapshot(): ByteString;
    snapshot(byteCount: number): ByteString;
    timeout(): Timeout;
    toString(): string;
    writableSegment(minimumCapacity: number): Segment;
    write(source: ByteBuffer): number;
    write(source: number[]): Buffer;
    write(source: number[], offset: number, byteCount: number): Buffer;
    write(source: Buffer, byteCount: number): void;
    write(byteString: ByteString): Buffer;
    write(byteString: ByteString, offset: number, byteCount: number): Buffer;
    write(source: Source, byteCount: number): Buffer;
    writeAll(source: Source): number;
    writeByte(b: number): Buffer;
    writeDecimalLong(v: number): Buffer;
    writeHexadecimalUnsignedLong(v: number): Buffer;
    writeInt(i: number): Buffer;
    writeIntLe(i: number): Buffer;
    writeLong(v: number): Buffer;
    writeLongLe(v: number): Buffer;
    writeShort(s: number): Buffer;
    writeShortLe(s: number): Buffer;
    writeString(string: string, charset: Charset): Buffer;
    writeString(string: string, beginIndex: number, endIndex: number, charset: Charset): Buffer;
    writeTo(out: OutputStream, byteCount: number): Buffer;
    writeUtf8(string: string): Buffer;
    writeUtf8(string: string, beginIndex: number, endIndex: number): Buffer;
    writeUtf8CodePoint(codePoint: number): Buffer;
}