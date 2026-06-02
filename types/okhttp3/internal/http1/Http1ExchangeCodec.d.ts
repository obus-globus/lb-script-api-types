import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { HttpUrl } from '../../../okhttp3/HttpUrl.d.ts'
import type { OkHttpClient } from '../../../okhttp3/OkHttpClient.d.ts'
import type { Request } from '../../../okhttp3/Request.d.ts'
import type { Response } from '../../../okhttp3/Response.d.ts'
import type { Response$Builder } from '../../../okhttp3/Response$Builder.d.ts'
import type { BufferedSocket } from '../../../okhttp3/internal/connection/BufferedSocket.d.ts'
import type { ExchangeCodec } from '../../../okhttp3/internal/http/ExchangeCodec.d.ts'
import type { ExchangeCodec$Carrier } from '../../../okhttp3/internal/http/ExchangeCodec$Carrier.d.ts'
import type { ExchangeCodec$Companion } from '../../../okhttp3/internal/http/ExchangeCodec$Companion.d.ts'
import type { HeadersReader } from '../../../okhttp3/internal/http1/HeadersReader.d.ts'
import type { Http1ExchangeCodec$Companion } from '../../../okhttp3/internal/http1/Http1ExchangeCodec$Companion.d.ts'
import type { ForwardingTimeout } from '../../../okio/ForwardingTimeout.d.ts'
import type { Sink } from '../../../okio/Sink.d.ts'
import type { Source } from '../../../okio/Source.d.ts'
export class Http1ExchangeCodec extends Object implements ExchangeCodec {
    static Companion: ExchangeCodec$Companion;
    static Companion: Http1ExchangeCodec$Companion;
    static DISCARD_STREAM_TIMEOUT_MILLIS: number;
    constructor(client: OkHttpClient | null, carrier: ExchangeCodec$Carrier, socket: BufferedSocket)
    readonly carrier: ExchangeCodec$Carrier;
    // private client: OkHttpClient | null;
    // private headersReader: HeadersReader;
    /*not mapped: */ isResponseComplete(): boolean;
    readonly socket: BufferedSocket;
    // private state: number;
    // private trailers: Pair<string, string>[] | null;
    cancel(): void;
    createRequestBody(request: Request, contentLength: number): Sink;
    // private detachTimeout(timeout: ForwardingTimeout): void;
    finishRequest(): void;
    flushRequest(): void;
    // private newChunkedSink(): Sink;
    // private newChunkedSource(url: HttpUrl): Source;
    // private newFixedLengthSource(url: HttpUrl, length: number): Source;
    // private newKnownLengthSink(): Sink;
    // private newUnknownLengthSource(url: HttpUrl): Source;
    openResponseBodySource(response: Response): Source;
    peekTrailers(): Pair<string, string>[] | null;
    readResponseHeaders(expectContinue: boolean): Response$Builder | null;
    reportedContentLength(response: Response): number;
    skipConnectBody(response: Response): void;
    writeRequest(headers: Pair<string, string>[], requestLine: string): void;
    writeRequestHeaders(request: Request): void;
}