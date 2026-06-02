import type { HttpUrl } from '../../../okhttp3/HttpUrl.d.ts'
import type { Http1ExchangeCodec$AbstractSource } from '../../../okhttp3/internal/http1/Http1ExchangeCodec$AbstractSource.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
export class Http1ExchangeCodec$UnknownLengthSource extends Http1ExchangeCodec$AbstractSource {
    constructor(null_: Http1ExchangeCodec$UnknownLengthSource, url: HttpUrl)
    // private inputExhausted: boolean;
    close(): void;
    read(sink: Buffer, byteCount: number): number;
}