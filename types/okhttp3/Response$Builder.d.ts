import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { Handshake } from '../okhttp3/Handshake.d.ts'
import type { Headers$Builder } from '../okhttp3/Headers$Builder.d.ts'
import type { Protocol } from '../okhttp3/Protocol.d.ts'
import type { Request } from '../okhttp3/Request.d.ts'
import type { Response } from '../okhttp3/Response.d.ts'
import type { ResponseBody } from '../okhttp3/ResponseBody.d.ts'
import type { TrailersSource } from '../okhttp3/TrailersSource.d.ts'
import type { Exchange } from '../okhttp3/internal/connection/Exchange.d.ts'
import type { Socket } from '../okio/Socket.d.ts'
export class Response$Builder extends Object {
    constructor()
    constructor(response: Response)
    // private body: ResponseBody;
    /*not mapped: */ getBody$okhttp(): ResponseBody;
    // private cacheResponse: Response | null;
    /*not mapped: */ getCacheResponse$okhttp(): Response | null;
    // private code: number;
    /*not mapped: */ getCode$okhttp(): number;
    // private exchange: Exchange | null;
    /*not mapped: */ getExchange$okhttp(): Exchange | null;
    // private handshake: Handshake | null;
    /*not mapped: */ getHandshake$okhttp(): Handshake | null;
    // private headers: Headers$Builder;
    /*not mapped: */ getHeaders$okhttp(): Headers$Builder;
    // private message: string | null;
    /*not mapped: */ getMessage$okhttp(): string | null;
    // private networkResponse: Response | null;
    /*not mapped: */ getNetworkResponse$okhttp(): Response | null;
    // private priorResponse: Response | null;
    /*not mapped: */ getPriorResponse$okhttp(): Response | null;
    // private protocol: Protocol | null;
    /*not mapped: */ getProtocol$okhttp(): Protocol | null;
    // private receivedResponseAtMillis: number;
    /*not mapped: */ getReceivedResponseAtMillis$okhttp(): number;
    // private request: Request | null;
    /*not mapped: */ getRequest$okhttp(): Request | null;
    // private sentRequestAtMillis: number;
    /*not mapped: */ getSentRequestAtMillis$okhttp(): number;
    // private socket: Socket | null;
    /*not mapped: */ getSocket$okhttp(): Socket | null;
    // private trailersSource: TrailersSource;
    /*not mapped: */ getTrailersSource$okhttp(): TrailersSource;
    addHeader(name: string, value: string): Response$Builder;
    body(body: ResponseBody): Response$Builder;
    build(): Response;
    cacheResponse(cacheResponse: Response | null): Response$Builder;
    // private checkSupportResponse(name: string, response: Response | null): void;
    code(code: number): Response$Builder;
    handshake(handshake: Handshake | null): Response$Builder;
    header(name: string, value: string): Response$Builder;
    headers(headers: Pair<string, string>[]): Response$Builder;
    initExchange(exchange: Exchange): void;
    message(message: string): Response$Builder;
    networkResponse(networkResponse: Response | null): Response$Builder;
    priorResponse(priorResponse: Response | null): Response$Builder;
    protocol(protocol: Protocol): Response$Builder;
    receivedResponseAtMillis(receivedResponseAtMillis: number): Response$Builder;
    removeHeader(name: string): Response$Builder;
    request(request: Request): Response$Builder;
    sentRequestAtMillis(sentRequestAtMillis: number): Response$Builder;
    socket(socket: Socket): Response$Builder;
    trailers(trailersSource: TrailersSource): Response$Builder;
}