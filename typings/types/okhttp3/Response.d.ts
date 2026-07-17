import type { Closeable } from '../java/io/Closeable.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { CacheControl } from '../okhttp3/CacheControl.d.ts'
import type { Challenge } from '../okhttp3/Challenge.d.ts'
import type { Handshake } from '../okhttp3/Handshake.d.ts'
import type { Protocol } from '../okhttp3/Protocol.d.ts'
import type { Request } from '../okhttp3/Request.d.ts'
import type { Response$Builder } from '../okhttp3/Response$Builder.d.ts'
import type { ResponseBody } from '../okhttp3/ResponseBody.d.ts'
import type { TrailersSource } from '../okhttp3/TrailersSource.d.ts'
import type { Exchange } from '../okhttp3/internal/connection/Exchange.d.ts'
import type { Socket } from '../okio/Socket.d.ts'
export class Response extends Object implements Closeable {
    constructor(request: Request, protocol: Protocol, message: string, code: number, handshake: Handshake | null, headers: Pair<string, string>[], body: ResponseBody, socket: Socket | null, networkResponse: Response | null, cacheResponse: Response | null, priorResponse: Response | null, sentRequestAtMillis: number, receivedResponseAtMillis: number, exchange: Exchange | null, trailersSource: TrailersSource)
    // private body: ResponseBody;
    body(): ResponseBody;
    cacheControl(): CacheControl;
    // private cacheResponse: Response | null;
    cacheResponse(): Response | null;
    // private code: number;
    code(): number;
    // private exchange: Exchange | null;
    /*not mapped: */ exchange(): Exchange | null;
    // private handshake: Handshake | null;
    handshake(): Handshake | null;
    // private headers: Pair<string, string>[];
    headers(): Pair<string, string>[];
    // private isRedirect: boolean;
    /*not mapped: */ isRedirect(): boolean;
    // private isSuccessful: boolean;
    /*not mapped: */ isSuccessful(): boolean;
    // private lazyCacheControl: CacheControl | null;
    /*not mapped: */ getLazyCacheControl$okhttp(): CacheControl | null;
    // private message: string;
    message(): string;
    // private networkResponse: Response | null;
    networkResponse(): Response | null;
    // private priorResponse: Response | null;
    priorResponse(): Response | null;
    // private protocol: Protocol;
    protocol(): Protocol;
    // private receivedResponseAtMillis: number;
    receivedResponseAtMillis(): number;
    // private request: Request;
    request(): Request;
    // private sentRequestAtMillis: number;
    sentRequestAtMillis(): number;
    // private socket: Socket | null;
    /*not mapped: */ socket(): Socket | null;
    // private trailersSource: TrailersSource;
    body(): ResponseBody;
    cacheControl(): CacheControl;
    cacheResponse(): Response | null;
    challenges(): Challenge[];
    close(): void;
    code(): number;
    handshake(): Handshake | null;
    header(name: string, defaultValue?: string | null): string | null;
    headers(): Pair<string, string>[];
    headers(name: string): string[];
    message(): string;
    networkResponse(): Response | null;
    newBuilder(): Response$Builder;
    peekBody(byteCount: number): ResponseBody;
    peekTrailers(): Pair<string, string>[] | null;
    priorResponse(): Response | null;
    protocol(): Protocol;
    receivedResponseAtMillis(): number;
    request(): Request;
    sentRequestAtMillis(): number;
    toString(): string;
    trailers(): Pair<string, string>[];
}