import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { OkHttpClient } from '../../../okhttp3/OkHttpClient.d.ts'
import type { Protocol } from '../../../okhttp3/Protocol.d.ts'
import type { Request } from '../../../okhttp3/Request.d.ts'
import type { Response } from '../../../okhttp3/Response.d.ts'
import type { Response$Builder } from '../../../okhttp3/Response$Builder.d.ts'
import type { ExchangeCodec } from '../../../okhttp3/internal/http/ExchangeCodec.d.ts'
import type { ExchangeCodec$Carrier } from '../../../okhttp3/internal/http/ExchangeCodec$Carrier.d.ts'
import type { RealInterceptorChain } from '../../../okhttp3/internal/http/RealInterceptorChain.d.ts'
import type { Http2Connection } from '../../../okhttp3/internal/http2/Http2Connection.d.ts'
import type { Http2ExchangeCodec$Companion } from '../../../okhttp3/internal/http2/Http2ExchangeCodec$Companion.d.ts'
import type { Http2Stream } from '../../../okhttp3/internal/http2/Http2Stream.d.ts'
import type { Sink } from '../../../okio/Sink.d.ts'
import type { Socket } from '../../../okio/Socket.d.ts'
import type { Source } from '../../../okio/Source.d.ts'
export class Http2ExchangeCodec extends Object implements ExchangeCodec {
    static Companion: Http2ExchangeCodec$Companion;
    static DISCARD_STREAM_TIMEOUT_MILLIS: number;
    constructor(client: OkHttpClient, carrier: ExchangeCodec$Carrier, chain: RealInterceptorChain, http2Connection: Http2Connection)
    // private canceled: boolean;
    readonly carrier: ExchangeCodec$Carrier;
    // private chain: RealInterceptorChain;
    // private http2Connection: Http2Connection;
    /*not mapped: */ isResponseComplete(): boolean;
    // private protocol: Protocol;
    readonly socket: Socket;
    // private stream: Http2Stream | null;
    cancel(): void;
    createRequestBody(request: Request, contentLength: number): Sink;
    finishRequest(): void;
    flushRequest(): void;
    openResponseBodySource(response: Response): Source;
    peekTrailers(): Pair<string, string>[] | null;
    readResponseHeaders(expectContinue: boolean): Response$Builder | null;
    reportedContentLength(response: Response): number;
    writeRequestHeaders(request: Request): void;
}