import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { HttpUrl } from '../../../okhttp3/HttpUrl.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
import type { ForwardingTimeout } from '../../../okio/ForwardingTimeout.d.ts'
import type { Source } from '../../../okio/Source.d.ts'
import type { Timeout } from '../../../okio/Timeout.d.ts'
export abstract class Http1ExchangeCodec$AbstractSource extends Object implements Source {
    constructor(null_: Http1ExchangeCodec$AbstractSource, url: HttpUrl)
    // private closed: boolean;
    // private /*not mapped: */ getClosed(): boolean;
    // private timeout: ForwardingTimeout;
    // private /*not mapped: */ getTimeout(): ForwardingTimeout;
    readonly url: HttpUrl;
    read(sink: Buffer, byteCount: number): number;
    responseBodyComplete(trailers: Pair<string, string>[]): void;
    timeout(): Timeout;
}