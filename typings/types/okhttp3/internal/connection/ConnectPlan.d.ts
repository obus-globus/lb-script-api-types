import type { IOException } from '../../../java/io/IOException.d.ts'
import type { Socket } from '../../../java/net/Socket.d.ts'
import type { SSLException } from '../../../javax/net/ssl/SSLException.d.ts'
import type { SSLSocket } from '../../../javax/net/ssl/SSLSocket.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ConnectionSpec } from '../../../okhttp3/ConnectionSpec.d.ts'
import type { Handshake } from '../../../okhttp3/Handshake.d.ts'
import type { Protocol } from '../../../okhttp3/Protocol.d.ts'
import type { Request } from '../../../okhttp3/Request.d.ts'
import type { Route } from '../../../okhttp3/Route.d.ts'
import type { TaskRunner } from '../../../okhttp3/internal/concurrent/TaskRunner.d.ts'
import type { BufferedSocket } from '../../../okhttp3/internal/connection/BufferedSocket.d.ts'
import type { ConnectPlan$Companion } from '../../../okhttp3/internal/connection/ConnectPlan$Companion.d.ts'
import type { RealCall } from '../../../okhttp3/internal/connection/RealCall.d.ts'
import type { RealConnection } from '../../../okhttp3/internal/connection/RealConnection.d.ts'
import type { RealConnectionPool } from '../../../okhttp3/internal/connection/RealConnectionPool.d.ts'
import type { RealRoutePlanner } from '../../../okhttp3/internal/connection/RealRoutePlanner.d.ts'
import type { RoutePlanner$ConnectResult } from '../../../okhttp3/internal/connection/RoutePlanner$ConnectResult.d.ts'
import type { RoutePlanner$Plan } from '../../../okhttp3/internal/connection/RoutePlanner$Plan.d.ts'
import type { EchRetryPlan } from '../../../okhttp3/internal/ech/EchRetryPlan.d.ts'
import type { ExchangeCodec$Carrier } from '../../../okhttp3/internal/http/ExchangeCodec$Carrier.d.ts'
export class ConnectPlan extends Object implements RoutePlanner$Plan, ExchangeCodec$Carrier {
    static Companion: ConnectPlan$Companion;
    constructor(taskRunner: TaskRunner, connectionPool: RealConnectionPool, readTimeoutMillis: number, writeTimeoutMillis: number, socketConnectTimeoutMillis: number, socketReadTimeoutMillis: number, pingIntervalMillis: number, retryOnConnectionFailure: boolean, call: RealCall, routePlanner: RealRoutePlanner, route: Route, routes: Route[] | null, attempt: number, tunnelRequest: Request | null, connectionSpecIndex: number, isTlsFallback: boolean, echRetryPlan: EchRetryPlan | null)
    // private attempt: number;
    // private call: RealCall;
    // private canceled: boolean;
    // private connection: RealConnection | null;
    // private connectionPool: RealConnectionPool;
    // private connectionSpecIndex: number;
    /*not mapped: */ getConnectionSpecIndex$okhttp(): number;
    // private echRetryPlan: EchRetryPlan | null;
    // private handshake: Handshake | null;
    /*not mapped: */ isReady(): boolean;
    // private isTlsFallback: boolean;
    /*not mapped: */ isTlsFallback$okhttp(): boolean;
    // private javaNetSocket: Socket | null;
    /*not mapped: */ getJavaNetSocket$okhttp(): Socket | null;
    // private pingIntervalMillis: number;
    // private protocol: Protocol | null;
    // private rawSocket: Socket | null;
    // private readTimeoutMillis: number;
    // private retryOnConnectionFailure: boolean;
    readonly route: Route;
    // private routePlanner: RealRoutePlanner;
    // private routes: Route[] | null;
    /*not mapped: */ getRoutes$okhttp(): Route[] | null;
    // private socket: BufferedSocket;
    // private socketConnectTimeoutMillis: number;
    // private socketReadTimeoutMillis: number;
    // private taskRunner: TaskRunner;
    // private tunnelRequest: Request | null;
    // private writeTimeoutMillis: number;
    cancel(): void;
    closeQuietly(): void;
    // private connectSocket(): void;
    connectTcp(): RoutePlanner$ConnectResult;
    // private connectTls(sslSocket: SSLSocket, connectionSpec: ConnectionSpec): void;
    connectTlsEtc(): RoutePlanner$ConnectResult;
    connectTunnel(): RoutePlanner$ConnectResult;
    // private copy(route: Route, attempt: number, tunnelRequest: Request | null, connectionSpecIndex: number, isTlsFallback: boolean, echRetryPlan: EchRetryPlan | null): ConnectPlan;
    // private createTunnel(): Request | null;
    handleSuccess(): RealConnection;
    // private nextCompatibleConnectionSpec(connectionSpecs: ConnectionSpec[], sslSocket: SSLSocket): ConnectPlan | null;
    nextConnectionSpec(connectionSpecs: ConnectionSpec[], sslSocket: SSLSocket, sslException: SSLException): ConnectPlan | null;
    noNewExchanges(): void;
    planWithCurrentOrInitialConnectionSpec(connectionSpecs: ConnectionSpec[], sslSocket: SSLSocket): ConnectPlan;
    retry(): RoutePlanner$Plan;
    trackFailure(call: RealCall, e: IOException | null): void;
}