import type { MediaType } from '../../../okhttp3/MediaType.d.ts'
import type { ResponseBody } from '../../../okhttp3/ResponseBody.d.ts'
import type { ResponseBody$Companion } from '../../../okhttp3/ResponseBody$Companion.d.ts'
import type { BufferedSource } from '../../../okio/BufferedSource.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
export class RealResponseBody extends ResponseBody {
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
    constructor(contentTypeString: string | null, contentLength: number, source: BufferedSource)
    // private contentLength: number;
    // private contentTypeString: string | null;
    // private source: BufferedSource;
    contentLength(): number;
    contentType(): MediaType | null;
    source(): BufferedSource;
}