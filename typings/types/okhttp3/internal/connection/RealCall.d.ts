import type { IOException } from '../../../java/io/IOException.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Socket } from '../../../java/net/Socket.d.ts'
import type { AtomicBoolean } from '../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { AtomicReference } from '../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { Call } from '../../../okhttp3/Call.d.ts'
import type { Callback } from '../../../okhttp3/Callback.d.ts'
import type { EventListener } from '../../../okhttp3/EventListener.d.ts'
import type { OkHttpClient } from '../../../okhttp3/OkHttpClient.d.ts'
import type { Request } from '../../../okhttp3/Request.d.ts'
import type { Response } from '../../../okhttp3/Response.d.ts'
import type { Tags } from '../../../okhttp3/internal/Tags.d.ts'
import type { Lockable } from '../../../okhttp3/internal/concurrent/Lockable.d.ts'
import type { Exchange } from '../../../okhttp3/internal/connection/Exchange.d.ts'
import type { ExchangeFinder } from '../../../okhttp3/internal/connection/ExchangeFinder.d.ts'
import type { RealConnection } from '../../../okhttp3/internal/connection/RealConnection.d.ts'
import type { RealConnectionPool } from '../../../okhttp3/internal/connection/RealConnectionPool.d.ts'
import type { RoutePlanner$Plan } from '../../../okhttp3/internal/connection/RoutePlanner$Plan.d.ts'
import type { RealInterceptorChain } from '../../../okhttp3/internal/http/RealInterceptorChain.d.ts'
import type { AsyncTimeout } from '../../../okio/AsyncTimeout.d.ts'
import type { Timeout } from '../../../okio/Timeout.d.ts'
export class RealCall extends Object implements Cloneable, Call, Lockable {
    constructor(client: OkHttpClient, originalRequest: Request, forWebSocket: boolean)
    // private callStackTrace: Object | null;
    readonly canceled: boolean;
    readonly client: OkHttpClient;
    readonly connection: RealConnection | null;
    // private connectionPool: RealConnectionPool;
    // private eventListener: EventListener;
    /*not mapped: */ getEventListener$okhttp(): EventListener;
    // private exchange: Exchange | null;
    // private exchangeFinder: ExchangeFinder | null;
    readonly executed: AtomicBoolean;
    // private expectMoreExchanges: boolean;
    readonly forWebSocket: boolean;
    // private interceptorScopedExchange: Exchange | null;
    /*not mapped: */ getInterceptorScopedExchange$okhttp(): Exchange | null;
    readonly originalRequest: Request;
    // private plansToCancel: RoutePlanner$Plan[];
    /*not mapped: */ getPlansToCancel$okhttp(): RoutePlanner$Plan[];
    // private requestBodyOpen: boolean;
    // private responseBodyOpen: boolean;
    // private socketSinkOpen: boolean;
    // private socketSourceOpen: boolean;
    // private tags: AtomicReference<Tags>;
    // private timeout: AsyncTimeout;
    // private timeoutEarlyExit: boolean;
    acquireConnectionNoEvents(connection: RealConnection): void;
    addEventListener(eventListener: EventListener): void;
    // private callDone(e: IOException | null): IOException | null;
    // private callStart(): void;
    cancel(): void;
    clone(): Call;
    enqueue(responseCallback: Callback): void;
    enterNetworkInterceptorExchange(request: Request, newRoutePlanner: boolean, chain: RealInterceptorChain): void;
    execute(): Response;
    exitNetworkInterceptorExchange(closeExchange: boolean): void;
    getResponseWithInterceptorChain(): Response;
    initExchange(chain: RealInterceptorChain): Exchange;
    isCanceled(): boolean;
    isExecuted(): boolean;
    messageDone(exchange: Exchange, requestDone: boolean, responseDone: boolean, socketSourceDone: boolean, socketSinkDone: boolean, e: IOException | null): IOException | null;
    noMoreExchanges(e: IOException | null): IOException | null;
    redactedUrl(): string;
    releaseConnectionNoEvents(): Socket | null;
    request(): Request;
    retryAfterFailure(): boolean;
    tag<T extends unknown>(type: Class<T>, computeIfAbsent: () => T): T;
    tag<T extends unknown>(type: Class<T>): T | null;
    tag<T extends unknown>(type: KClass<T>): T | null;
    tag<T extends unknown>(type: KClass<T>, computeIfAbsent: () => T): T;
    timeout(): Timeout;
    timeoutEarlyExit(): void;
    // private timeoutExit(cause: IOException | null): IOException | null;
    // private toLoggableString(): string;
    upgradeToSocket(): void;
}