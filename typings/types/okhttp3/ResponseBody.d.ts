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
    static create(paramarg0: number[], paramarg1: MediaType): ResponseBody;
    static create(paramarg0: string, paramarg1: MediaType): ResponseBody;
    static create(paramarg0: MediaType, paramarg1: number[]): ResponseBody;
    static create(paramarg0: MediaType, paramarg1: string): ResponseBody;
    static create(paramarg0: MediaType, paramarg1: number, paramarg2: BufferedSource): ResponseBody;
    static create(paramarg0: MediaType, paramarg1: ByteString): ResponseBody;
    static create(paramarg0: BufferedSource, paramarg1: MediaType, paramarg2: number): ResponseBody;
    static create(paramarg0: ByteString, paramarg1: MediaType): ResponseBody;
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