import type { InputStream } from '../java/io/InputStream.d.ts'
import type { ReadableByteChannel } from '../java/nio/channels/ReadableByteChannel.d.ts'
import type { Charset } from '../java/nio/charset/Charset.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
import type { Source } from '../okio/Source.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
export interface BufferedSource extends ReadableByteChannel, Object, Source{
    buffer(): Buffer;
    close(): void;
    exhausted(): boolean;
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
    peek(): BufferedSource;
    rangeEquals(offset: number, bytes: ByteString): boolean;
    rangeEquals(offset: number, bytes: ByteString, bytesOffset: number, byteCount: number): boolean;
    read(sink: number[]): number;
    read(sink: number[], offset: number, byteCount: number): number;
    read(sink: Buffer, byteCount: number): number;
    readAll(sink: Sink): number;
    readByte(): number;
    readByteArray(): number[];
    readByteArray(byteCount: number): number[];
    readByteString(): ByteString;
    readByteString(byteCount: number): ByteString;
    readDecimalLong(): number;
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
    readUtf8(): string;
    readUtf8(byteCount: number): string;
    readUtf8CodePoint(): number;
    readUtf8Line(): string | null;
    readUtf8LineStrict(): string;
    readUtf8LineStrict(limit: number): string;
    request(byteCount: number): boolean;
    require(byteCount: number): void;
    select(options: (Object | null)[]): number;
    select<T extends Object | number | string | boolean>(options: T[]): T | null;
    skip(byteCount: number): void;
    timeout(): Timeout;
}