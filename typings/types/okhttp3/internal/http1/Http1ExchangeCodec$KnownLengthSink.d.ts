import type { Object } from '../../../java/lang/Object.d.ts'
import type { Http1ExchangeCodec } from '../../../okhttp3/internal/http1/Http1ExchangeCodec.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
import type { ForwardingTimeout } from '../../../okio/ForwardingTimeout.d.ts'
import type { Sink } from '../../../okio/Sink.d.ts'
import type { Timeout } from '../../../okio/Timeout.d.ts'
export class Http1ExchangeCodec$KnownLengthSink extends Object implements Sink {
    constructor(null_: Http1ExchangeCodec)
    // private closed: boolean;
    // private timeout: ForwardingTimeout;
    close(): void;
    flush(): void;
    timeout(): Timeout;
    write(source: Buffer, byteCount: number): void;
}