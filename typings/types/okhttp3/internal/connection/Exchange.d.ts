import type { IOException } from '../../../java/io/IOException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { Request } from '../../../okhttp3/Request.d.ts'
import type { Response } from '../../../okhttp3/Response.d.ts'
import type { Response$Builder } from '../../../okhttp3/Response$Builder.d.ts'
import type { ResponseBody } from '../../../okhttp3/ResponseBody.d.ts'
import type { ExchangeFinder } from '../../../okhttp3/internal/connection/ExchangeFinder.d.ts'
import type { RealCall } from '../../../okhttp3/internal/connection/RealCall.d.ts'
import type { RealConnection } from '../../../okhttp3/internal/connection/RealConnection.d.ts'
import type { ExchangeCodec } from '../../../okhttp3/internal/http/ExchangeCodec.d.ts'
import type { Sink } from '../../../okio/Sink.d.ts'
import type { Socket } from '../../../okio/Socket.d.ts'
export class Exchange extends Object {
    constructor(call: RealCall, finder: ExchangeFinder, codec: ExchangeCodec)
    // private call: RealCall;
    /*not mapped: */ getCall$okhttp(): RealCall;
    // private codec: ExchangeCodec;
    /*not mapped: */ getConnection$okhttp(): RealConnection;
    // private finder: ExchangeFinder;
    /*not mapped: */ getFinder$okhttp(): ExchangeFinder;
    // private hasFailure: boolean;
    /*not mapped: */ getHasFailure$okhttp(): boolean;
    /*not mapped: */ isCoalescedConnection$okhttp(): boolean;
    // private isDuplex: boolean;
    /*not mapped: */ isDuplex$okhttp(): boolean;
    bodyComplete(bytesRead: number, isSocket: boolean, responseDone: boolean, requestDone: boolean, e: IOException | null): IOException | null;
    cancel(): void;
    createRequestBody(request: Request, duplex: boolean): Sink;
    detachWithViolence(): void;
    finishRequest(): void;
    flushRequest(): void;
    noNewExchangesOnConnection(): void;
    noRequestBody(): void;
    openResponseBody(response: Response): ResponseBody;
    peekTrailers(): Pair<string, string>[] | null;
    readResponseHeaders(expectContinue: boolean): Response$Builder | null;
    responseHeadersEnd(response: Response): void;
    responseHeadersStart(): void;
    // private trackFailure(e: IOException): void;
    upgradeToSocket(): Socket;
    writeRequestHeaders(request: Request): void;
}