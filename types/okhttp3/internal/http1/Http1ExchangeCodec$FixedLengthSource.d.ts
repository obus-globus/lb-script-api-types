import type { HttpUrl } from '../../../okhttp3/HttpUrl.d.ts'
import type { Http1ExchangeCodec$AbstractSource } from '../../../okhttp3/internal/http1/Http1ExchangeCodec$AbstractSource.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
export class Http1ExchangeCodec$FixedLengthSource extends Http1ExchangeCodec$AbstractSource {
    constructor(null_: Http1ExchangeCodec$FixedLengthSource, url: HttpUrl, bytesRemaining: number)
    // private bytesRemaining: number;
    close(): void;
    read(sink: Buffer, byteCount: number): number;
}