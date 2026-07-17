import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { InputStreamContent } from '../../../../../net/lenni0451/commons/httpclient/content/impl/InputStreamContent.d.ts'
import type { MultiPartFormContent } from '../../../../../net/lenni0451/commons/httpclient/content/impl/MultiPartFormContent.d.ts'
import type { ContentType } from '../../../../../net/lenni0451/commons/httpclient/model/ContentType.d.ts'
export abstract class HttpContent extends Object {
    static bytes(paramarg0: number[]): HttpContent;
    static bytes(paramarg0: number[], paramarg1: number, paramarg2: number): HttpContent;
    static file(paramarg0: File): HttpContent;
    static form(paramarg0: string, paramarg1: string): HttpContent;
    static form(paramarg0: JavaMap<string, string>): HttpContent;
    static inputStream(paramarg0: ContentType, paramarg1: InputStream, paramarg2: number): InputStreamContent;
    static multiPartForm(): MultiPartFormContent;
    static string(paramarg0: string): HttpContent;
    static string(paramarg0: string, paramarg1: Charset): HttpContent;
    constructor(arg0: ContentType)
    readonly bufferSize: number;
    // private byteCache: number[];
    // private computed: boolean;
    readonly contentType: ContentType;
    canBeStreamedMultipleTimes(): boolean;
    clearCache(): void;
    compute(): InputStream;
    getAsBytes(): number[];
    getAsStream(): InputStream;
    getAsString(): string;
    getAsString(arg0: Charset): string;
    getBufferSize(): number;
    getContentLength(): number;
    getContentType(): ContentType;
    getLength(): number;
    getType(): ContentType;
    modify(arg0: InputStream): InputStream;
    setBufferSize(arg0: number): HttpContent;
    transferTo(arg0: OutputStream): void;
}