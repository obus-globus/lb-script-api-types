import type { IOException } from '../../../java/io/IOException.d.ts'
import type { Reference } from '../../../java/lang/ref/Reference.d.ts'
import type { Socket } from '../../../java/net/Socket.d.ts'
import type { Address } from '../../../okhttp3/Address.d.ts'
import type { Connection } from '../../../okhttp3/Connection.d.ts'
import type { Handshake } from '../../../okhttp3/Handshake.d.ts'
import type { HttpUrl } from '../../../okhttp3/HttpUrl.d.ts'
import type { OkHttpClient } from '../../../okhttp3/OkHttpClient.d.ts'
import type { Protocol } from '../../../okhttp3/Protocol.d.ts'
import type { Route } from '../../../okhttp3/Route.d.ts'
import type { Lockable } from '../../../okhttp3/internal/concurrent/Lockable.d.ts'
import type { TaskRunner } from '../../../okhttp3/internal/concurrent/TaskRunner.d.ts'
import type { BufferedSocket } from '../../../okhttp3/internal/connection/BufferedSocket.d.ts'
import type { ConnectionListener } from '../../../okhttp3/internal/connection/ConnectionListener.d.ts'
import type { RealCall } from '../../../okhttp3/internal/connection/RealCall.d.ts'
import type { RealConnection$Companion } from '../../../okhttp3/internal/connection/RealConnection$Companion.d.ts'
import type { RealConnectionPool } from '../../../okhttp3/internal/connection/RealConnectionPool.d.ts'
import type { ExchangeCodec } from '../../../okhttp3/internal/http/ExchangeCodec.d.ts'
import type { ExchangeCodec$Carrier } from '../../../okhttp3/internal/http/ExchangeCodec$Carrier.d.ts'
import type { RealInterceptorChain } from '../../../okhttp3/internal/http/RealInterceptorChain.d.ts'
import type { Http2Connection } from '../../../okhttp3/internal/http2/Http2Connection.d.ts'
import type { Http2Connection$Listener } from '../../../okhttp3/internal/http2/Http2Connection$Listener.d.ts'
import type { Http2Connection$Listener$Companion } from '../../../okhttp3/internal/http2/Http2Connection$Listener$Companion.d.ts'
import type { Http2Stream } from '../../../okhttp3/internal/http2/Http2Stream.d.ts'
import type { Settings } from '../../../okhttp3/internal/http2/Settings.d.ts'
export class RealConnection extends Http2Connection$Listener implements Connection, Lockable, ExchangeCodec$Carrier {
    static Companion: RealConnection$Companion;
    static Companion: Http2Connection$Listener$Companion;
    static IDLE_CONNECTION_HEALTHY_NS: number;
    static REFUSE_INCOMING_STREAMS: Http2Connection$Listener;
    constructor(taskRunner: TaskRunner, connectionPool: RealConnectionPool, route: Route, rawSocket: Socket, javaNetSocket: Socket, handshake: Handshake | null, protocol: Protocol, socket: BufferedSocket, pingIntervalMillis: number, connectionListener: ConnectionListener)
    // private allocationLimit: number;
    /*not mapped: */ getAllocationLimit$okhttp(): number;
    readonly calls: Reference<RealCall>[];
    // private connectionListener: ConnectionListener;
    /*not mapped: */ getConnectionListener$okhttp(): ConnectionListener;
    readonly connectionPool: RealConnectionPool;
    // private handshake: Handshake | null;
    // private http2Connection: Http2Connection | null;
    idleAtNs: number;
    /*not mapped: */ isMultiplexed$okhttp(): boolean;
    // private javaNetSocket: Socket;
    // private noCoalescedConnections: boolean;
    noNewExchanges: boolean;
    // private pingIntervalMillis: number;
    // private protocol: Protocol;
    // private rawSocket: Socket;
    // private refusedStreamCount: number;
    readonly route: Route;
    // private routeFailureCount: number;
    /*not mapped: */ getRouteFailureCount$okhttp(): number;
    // private socket: BufferedSocket;
    // private successCount: number;
    readonly taskRunner: TaskRunner;
    cancel(): void;
    // private certificateSupportHost(url: HttpUrl, handshake: Handshake): boolean;
    connectFailed(client: OkHttpClient, failedRoute: Route, failure: IOException): void;
    handshake(): Handshake | null;
    incrementSuccessCount(): void;
    isEligible(address: Address, routes: Route[] | null): boolean;
    isHealthy(doExtensiveChecks: boolean): boolean;
    newCodec(client: OkHttpClient, chain: RealInterceptorChain): ExchangeCodec;
    noCoalescedConnections(): void;
    noNewExchanges(): void;
    onSettings(connection: Http2Connection, settings: Settings): void;
    onStream(stream: Http2Stream): void;
    protocol(): Protocol;
    route(): Route;
    // private routeMatchesAny(candidates: Route[]): boolean;
    socket(): Socket;
    start(): void;
    // private startHttp2(): void;
    // private supportsUrl(url: HttpUrl): boolean;
    toString(): string;
    trackFailure(call: RealCall, e: IOException | null): void;
    useAsSocket(): void;
}