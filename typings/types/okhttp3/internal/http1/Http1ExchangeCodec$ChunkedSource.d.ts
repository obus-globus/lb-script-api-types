import type { HttpUrl } from '../../../okhttp3/HttpUrl.d.ts'
import type { Http1ExchangeCodec } from '../../../okhttp3/internal/http1/Http1ExchangeCodec.d.ts'
import type { Http1ExchangeCodec$AbstractSource } from '../../../okhttp3/internal/http1/Http1ExchangeCodec$AbstractSource.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
export class Http1ExchangeCodec$ChunkedSource extends Http1ExchangeCodec$AbstractSource {
    constructor(null_: Http1ExchangeCodec, url: HttpUrl)
    // private bytesRemainingInChunk: number;
    // private hasMoreChunks: boolean;
    close(): void;
    read(sink: Buffer, byteCount: number): number;
    // private readChunkSize(): void;
}