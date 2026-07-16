import type { Closeable } from '../java/io/Closeable.d.ts'
import type { InputStream } from '../java/io/InputStream.d.ts'
import type { Reader } from '../java/io/Reader.d.ts'
import type { Charset } from '../java/nio/charset/Charset.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { MediaType } from '../okhttp3/MediaType.d.ts'
import type { ResponseBody$Companion } from '../okhttp3/ResponseBody$Companion.d.ts'
import type { BufferedSource } from '../okio/BufferedSource.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
export abstract class ResponseBody extends Object implements Closeable {
    static Companion: ResponseBody$Companion;
    static EMPTY: ResponseBody;
    static create(self: number[], contentType: MediaType | null): ResponseBody;
    static create(self: string, contentType: MediaType | null): ResponseBody;
    static create(contentType: MediaType | null, content: number[]): ResponseBody;
    static create(contentType: MediaType | null, content: string): ResponseBody;
    static create(contentType: MediaType | null, contentLength: number, content: BufferedSource): ResponseBody;
    static create(contentType: MediaType | null, content: ByteString): ResponseBody;
    static create(self: BufferedSource, contentType: MediaType | null, contentLength: number): ResponseBody;
    static create(self: ByteString, contentType: MediaType | null): ResponseBody;
    constructor()
    // private reader: Reader | null;
    byteStream(): InputStream;
    byteString(): ByteString;
    bytes(): number[];
    charStream(): Reader;
    // private charset(): Charset;
    close(): void;
    contentLength(): number;
    contentType(): MediaType | null;
    source(): BufferedSource;
    string(): string;
}