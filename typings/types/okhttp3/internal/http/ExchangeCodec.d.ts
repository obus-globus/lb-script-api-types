import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { Request } from '../../../okhttp3/Request.d.ts'
import type { Response } from '../../../okhttp3/Response.d.ts'
import type { Response$Builder } from '../../../okhttp3/Response$Builder.d.ts'
import type { ExchangeCodec$Carrier } from '../../../okhttp3/internal/http/ExchangeCodec$Carrier.d.ts'
import type { Sink } from '../../../okio/Sink.d.ts'
import type { Socket } from '../../../okio/Socket.d.ts'
import type { Source } from '../../../okio/Source.d.ts'
export interface ExchangeCodec extends Object{
    readonly carrier: ExchangeCodec$Carrier;
    /*not mapped: */ isResponseComplete(): boolean;
    readonly socket: Socket;
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