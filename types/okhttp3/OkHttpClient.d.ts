import type { Proxy } from '../java/net/Proxy.d.ts'
import type { ProxySelector } from '../java/net/ProxySelector.d.ts'
import type { SocketFactory } from '../javax/net/SocketFactory.d.ts'
import type { HostnameVerifier } from '../javax/net/ssl/HostnameVerifier.d.ts'
import type { SSLSocketFactory } from '../javax/net/ssl/SSLSocketFactory.d.ts'
import type { X509TrustManager } from '../javax/net/ssl/X509TrustManager.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Address } from '../okhttp3/Address.d.ts'
import type { Authenticator } from '../okhttp3/Authenticator.d.ts'
import type { Cache } from '../okhttp3/Cache.d.ts'
import type { Call } from '../okhttp3/Call.d.ts'
import type { Call$Factory } from '../okhttp3/Call$Factory.d.ts'
import type { CertificatePinner } from '../okhttp3/CertificatePinner.d.ts'
import type { ConnectionPool } from '../okhttp3/ConnectionPool.d.ts'
import type { ConnectionSpec } from '../okhttp3/ConnectionSpec.d.ts'
import type { CookieJar } from '../okhttp3/CookieJar.d.ts'
import type { Dispatcher } from '../okhttp3/Dispatcher.d.ts'
import type { Dns } from '../okhttp3/Dns.d.ts'
import type { EventListener$Factory } from '../okhttp3/EventListener$Factory.d.ts'
import type { HttpUrl } from '../okhttp3/HttpUrl.d.ts'
import type { Interceptor } from '../okhttp3/Interceptor.d.ts'
import type { OkHttpClient$Builder } from '../okhttp3/OkHttpClient$Builder.d.ts'
import type { OkHttpClient$Companion } from '../okhttp3/OkHttpClient$Companion.d.ts'
import type { Protocol } from '../okhttp3/Protocol.d.ts'
import type { Request } from '../okhttp3/Request.d.ts'
import type { WebSocket } from '../okhttp3/WebSocket.d.ts'
import type { WebSocket$Factory } from '../okhttp3/WebSocket$Factory.d.ts'
import type { WebSocketListener } from '../okhttp3/WebSocketListener.d.ts'
import type { TaskRunner } from '../okhttp3/internal/concurrent/TaskRunner.d.ts'
import type { RouteDatabase } from '../okhttp3/internal/connection/RouteDatabase.d.ts'
import type { CertificateChainCleaner } from '../okhttp3/internal/tls/CertificateChainCleaner.d.ts'
export class OkHttpClient extends Object implements Call$Factory, WebSocket$Factory {
    static Companion: OkHttpClient$Companion;
    constructor()
    constructor(builder: OkHttpClient$Builder)
    // private authenticator: Authenticator;
    authenticator(): Authenticator;
    // private cache: Cache | null;
    cache(): Cache | null;
    // private callTimeoutMillis: number;
    callTimeoutMillis(): number;
    // private certificateChainCleaner: CertificateChainCleaner | null;
    /*not mapped: */ certificateChainCleaner(): CertificateChainCleaner | null;
    // private certificatePinner: CertificatePinner;
    certificatePinner(): CertificatePinner;
    // private connectTimeoutMillis: number;
    connectTimeoutMillis(): number;
    // private connectionPool: ConnectionPool;
    connectionPool(): ConnectionPool;
    // private connectionSpecs: ConnectionSpec[];
    connectionSpecs(): ConnectionSpec[];
    // private cookieJar: CookieJar;
    cookieJar(): CookieJar;
    // private dispatcher: Dispatcher;
    dispatcher(): Dispatcher;
    // private dns: Dns;
    dns(): Dns;
    // private eventListenerFactory: EventListener$Factory;
    eventListenerFactory(): EventListener$Factory;
    // private fastFallback: boolean;
    /*not mapped: */ fastFallback(): boolean;
    // private followRedirects: boolean;
    followRedirects(): boolean;
    // private followSslRedirects: boolean;
    followSslRedirects(): boolean;
    // private hostnameVerifier: HostnameVerifier;
    hostnameVerifier(): HostnameVerifier;
    // private interceptors: Interceptor[];
    interceptors(): Interceptor[];
    // private minWebSocketMessageToCompress: number;
    /*not mapped: */ minWebSocketMessageToCompress(): number;
    // private networkInterceptors: Interceptor[];
    networkInterceptors(): Interceptor[];
    // private pingIntervalMillis: number;
    pingIntervalMillis(): number;
    // private protocols: Protocol[];
    protocols(): Protocol[];
    // private proxy: Proxy | null;
    proxy(): Proxy | null;
    // private proxyAuthenticator: Authenticator;
    proxyAuthenticator(): Authenticator;
    // private proxySelector: ProxySelector;
    proxySelector(): ProxySelector;
    // private readTimeoutMillis: number;
    readTimeoutMillis(): number;
    // private retryOnConnectionFailure: boolean;
    retryOnConnectionFailure(): boolean;
    // private routeDatabase: RouteDatabase;
    /*not mapped: */ getRouteDatabase$okhttp(): RouteDatabase;
    // private socketFactory: SocketFactory;
    socketFactory(): SocketFactory;
    sslSocketFactory(): SSLSocketFactory;
    // private sslSocketFactoryOrNull: SSLSocketFactory | null;
    // private taskRunner: TaskRunner;
    /*not mapped: */ getTaskRunner$okhttp(): TaskRunner;
    // private webSocketCloseTimeout: number;
    /*not mapped: */ webSocketCloseTimeout(): number;
    // private writeTimeoutMillis: number;
    writeTimeoutMillis(): number;
    // private x509TrustManager: X509TrustManager | null;
    /*not mapped: */ x509TrustManager(): X509TrustManager | null;
    address(url: HttpUrl): Address;
    authenticator(): Authenticator;
    cache(): Cache | null;
    callTimeoutMillis(): number;
    certificatePinner(): CertificatePinner;
    connectTimeoutMillis(): number;
    connectionPool(): ConnectionPool;
    connectionSpecs(): ConnectionSpec[];
    cookieJar(): CookieJar;
    dispatcher(): Dispatcher;
    dns(): Dns;
    eventListenerFactory(): EventListener$Factory;
    followRedirects(): boolean;
    followSslRedirects(): boolean;
    hostnameVerifier(): HostnameVerifier;
    interceptors(): Interceptor[];
    networkInterceptors(): Interceptor[];
    newBuilder(): OkHttpClient$Builder;
    newCall(request: Request): Call;
    newWebSocket(request: Request, listener: WebSocketListener): WebSocket;
    pingIntervalMillis(): number;
    protocols(): Protocol[];
    proxy(): Proxy | null;
    proxyAuthenticator(): Authenticator;
    proxySelector(): ProxySelector;
    readTimeoutMillis(): number;
    retryOnConnectionFailure(): boolean;
    socketFactory(): SocketFactory;
    sslSocketFactory(): SSLSocketFactory;
    // private verifyClientState(): void;
    writeTimeoutMillis(): number;
}