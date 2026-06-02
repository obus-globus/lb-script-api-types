import type { IOException } from '../java/io/IOException.d.ts'
import type { InetAddress } from '../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../java/net/InetSocketAddress.d.ts'
import type { Proxy } from '../java/net/Proxy.d.ts'
import type { Call } from '../okhttp3/Call.d.ts'
import type { Connection } from '../okhttp3/Connection.d.ts'
import type { Dispatcher } from '../okhttp3/Dispatcher.d.ts'
import type { EventListener } from '../okhttp3/EventListener.d.ts'
import type { EventListener$Companion } from '../okhttp3/EventListener$Companion.d.ts'
import type { Handshake } from '../okhttp3/Handshake.d.ts'
import type { HttpUrl } from '../okhttp3/HttpUrl.d.ts'
import type { Protocol } from '../okhttp3/Protocol.d.ts'
import type { Request } from '../okhttp3/Request.d.ts'
import type { Response } from '../okhttp3/Response.d.ts'
export class EventListener$AggregateEventListener extends EventListener {
    static Companion: EventListener$Companion;
    static NONE: EventListener;
    constructor(eventListeners: EventListener[])
    readonly eventListeners: EventListener[];
    cacheConditionalHit(call: Call, cachedResponse: Response): void;
    cacheHit(call: Call, response: Response): void;
    cacheMiss(call: Call): void;
    callEnd(call: Call): void;
    callFailed(call: Call, ioe: IOException): void;
    callStart(call: Call): void;
    canceled(call: Call): void;
    connectEnd(call: Call, inetSocketAddress: InetSocketAddress, proxy: Proxy, protocol: Protocol | null): void;
    connectFailed(call: Call, inetSocketAddress: InetSocketAddress, proxy: Proxy, protocol: Protocol | null, ioe: IOException): void;
    connectStart(call: Call, inetSocketAddress: InetSocketAddress, proxy: Proxy): void;
    connectionAcquired(call: Call, connection: Connection): void;
    connectionReleased(call: Call, connection: Connection): void;
    dispatcherQueueEnd(call: Call, dispatcher: Dispatcher): void;
    dispatcherQueueStart(call: Call, dispatcher: Dispatcher): void;
    dnsEnd(call: Call, domainName: string, inetAddressList: InetAddress[]): void;
    dnsStart(call: Call, domainName: string): void;
    followUpDecision(call: Call, networkResponse: Response, nextRequest: Request | null): void;
    proxySelectEnd(call: Call, url: HttpUrl, proxies: Proxy[]): void;
    proxySelectStart(call: Call, url: HttpUrl): void;
    requestBodyEnd(call: Call, byteCount: number): void;
    requestBodyStart(call: Call): void;
    requestFailed(call: Call, ioe: IOException): void;
    requestHeadersEnd(call: Call, request: Request): void;
    requestHeadersStart(call: Call): void;
    responseBodyEnd(call: Call, byteCount: number): void;
    responseBodyStart(call: Call): void;
    responseFailed(call: Call, ioe: IOException): void;
    responseHeadersEnd(call: Call, response: Response): void;
    responseHeadersStart(call: Call): void;
    retryDecision(call: Call, exception: IOException, retry: boolean): void;
    satisfactionFailure(call: Call, response: Response): void;
    secureConnectEnd(call: Call, handshake: Handshake | null): void;
    secureConnectStart(call: Call): void;
}