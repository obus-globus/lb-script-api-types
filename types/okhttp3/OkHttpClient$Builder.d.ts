import type { Proxy } from '../java/net/Proxy.d.ts'
import type { ProxySelector } from '../java/net/ProxySelector.d.ts'
import type { Duration } from '../java/time/Duration.d.ts'
import type { TimeUnit } from '../java/util/concurrent/TimeUnit.d.ts'
import type { SocketFactory } from '../javax/net/SocketFactory.d.ts'
import type { HostnameVerifier } from '../javax/net/ssl/HostnameVerifier.d.ts'
import type { SSLSocketFactory } from '../javax/net/ssl/SSLSocketFactory.d.ts'
import type { X509TrustManager } from '../javax/net/ssl/X509TrustManager.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Function1 } from '../kotlin/jvm/functions/Function1.d.ts'
import type { Duration } from '../kotlin/time/Duration.d.ts'
import type { Authenticator } from '../okhttp3/Authenticator.d.ts'
import type { Cache } from '../okhttp3/Cache.d.ts'
import type { CertificatePinner } from '../okhttp3/CertificatePinner.d.ts'
import type { ConnectionPool } from '../okhttp3/ConnectionPool.d.ts'
import type { ConnectionSpec } from '../okhttp3/ConnectionSpec.d.ts'
import type { CookieJar } from '../okhttp3/CookieJar.d.ts'
import type { Dispatcher } from '../okhttp3/Dispatcher.d.ts'
import type { Dns } from '../okhttp3/Dns.d.ts'
import type { EventListener } from '../okhttp3/EventListener.d.ts'
import type { EventListener$Factory } from '../okhttp3/EventListener$Factory.d.ts'
import type { Interceptor } from '../okhttp3/Interceptor.d.ts'
import type { Interceptor$Chain } from '../okhttp3/Interceptor$Chain.d.ts'
import type { OkHttpClient } from '../okhttp3/OkHttpClient.d.ts'
import type { Protocol } from '../okhttp3/Protocol.d.ts'
import type { Response } from '../okhttp3/Response.d.ts'
import type { TaskRunner } from '../okhttp3/internal/concurrent/TaskRunner.d.ts'
import type { RouteDatabase } from '../okhttp3/internal/connection/RouteDatabase.d.ts'
import type { CertificateChainCleaner } from '../okhttp3/internal/tls/CertificateChainCleaner.d.ts'
export class OkHttpClient$Builder extends Object {
    constructor()
    constructor(okHttpClient: OkHttpClient)
    // private authenticator: Authenticator;
    /*not mapped: */ getAuthenticator$okhttp(): Authenticator;
    // private cache: Cache | null;
    /*not mapped: */ getCache$okhttp(): Cache | null;
    // private callTimeout: number;
    /*not mapped: */ getCallTimeout$okhttp(): number;
    // private certificateChainCleaner: CertificateChainCleaner | null;
    /*not mapped: */ getCertificateChainCleaner$okhttp(): CertificateChainCleaner | null;
    // private certificatePinner: CertificatePinner;
    /*not mapped: */ getCertificatePinner$okhttp(): CertificatePinner;
    // private connectTimeout: number;
    /*not mapped: */ getConnectTimeout$okhttp(): number;
    // private connectionPool: ConnectionPool | null;
    /*not mapped: */ getConnectionPool$okhttp(): ConnectionPool | null;
    // private connectionSpecs: ConnectionSpec[];
    /*not mapped: */ getConnectionSpecs$okhttp(): ConnectionSpec[];
    // private cookieJar: CookieJar;
    /*not mapped: */ getCookieJar$okhttp(): CookieJar;
    // private dispatcher: Dispatcher;
    /*not mapped: */ getDispatcher$okhttp(): Dispatcher;
    // private dns: Dns;
    /*not mapped: */ getDns$okhttp(): Dns;
    // private eventListenerFactory: EventListener$Factory;
    /*not mapped: */ getEventListenerFactory$okhttp(): EventListener$Factory;
    // private fastFallback: boolean;
    /*not mapped: */ getFastFallback$okhttp(): boolean;
    // private followRedirects: boolean;
    /*not mapped: */ getFollowRedirects$okhttp(): boolean;
    // private followSslRedirects: boolean;
    /*not mapped: */ getFollowSslRedirects$okhttp(): boolean;
    // private hostnameVerifier: HostnameVerifier;
    /*not mapped: */ getHostnameVerifier$okhttp(): HostnameVerifier;
    // private interceptors: Interceptor[];
    /*not mapped: */ getInterceptors$okhttp(): Interceptor[];
    // private minWebSocketMessageToCompress: number;
    /*not mapped: */ getMinWebSocketMessageToCompress$okhttp(): number;
    // private networkInterceptors: Interceptor[];
    /*not mapped: */ getNetworkInterceptors$okhttp(): Interceptor[];
    // private pingInterval: number;
    /*not mapped: */ getPingInterval$okhttp(): number;
    // private protocols: Protocol[];
    /*not mapped: */ getProtocols$okhttp(): Protocol[];
    // private proxy: Proxy | null;
    /*not mapped: */ getProxy$okhttp(): Proxy | null;
    // private proxyAuthenticator: Authenticator;
    /*not mapped: */ getProxyAuthenticator$okhttp(): Authenticator;
    // private proxySelector: ProxySelector | null;
    /*not mapped: */ getProxySelector$okhttp(): ProxySelector | null;
    // private readTimeout: number;
    /*not mapped: */ getReadTimeout$okhttp(): number;
    // private retryOnConnectionFailure: boolean;
    /*not mapped: */ getRetryOnConnectionFailure$okhttp(): boolean;
    // private routeDatabase: RouteDatabase | null;
    /*not mapped: */ getRouteDatabase$okhttp(): RouteDatabase | null;
    // private socketFactory: SocketFactory;
    /*not mapped: */ getSocketFactory$okhttp(): SocketFactory;
    // private sslSocketFactoryOrNull: SSLSocketFactory | null;
    /*not mapped: */ getSslSocketFactoryOrNull$okhttp(): SSLSocketFactory | null;
    // private taskRunner: TaskRunner | null;
    /*not mapped: */ getTaskRunner$okhttp(): TaskRunner | null;
    // private webSocketCloseTimeout: number;
    /*not mapped: */ getWebSocketCloseTimeout$okhttp(): number;
    // private writeTimeout: number;
    /*not mapped: */ getWriteTimeout$okhttp(): number;
    // private x509TrustManagerOrNull: X509TrustManager | null;
    /*not mapped: */ getX509TrustManagerOrNull$okhttp(): X509TrustManager | null;
    addInterceptor(block: Function1<Interceptor$Chain, Response>): OkHttpClient$Builder;
    addInterceptor(interceptor: Interceptor): OkHttpClient$Builder;
    addNetworkInterceptor(block: Function1<Interceptor$Chain, Response>): OkHttpClient$Builder;
    addNetworkInterceptor(interceptor: Interceptor): OkHttpClient$Builder;
    authenticator(authenticator: Authenticator): OkHttpClient$Builder;
    build(): OkHttpClient;
    cache(cache: Cache | null): OkHttpClient$Builder;
    callTimeout(duration: Duration): OkHttpClient$Builder;
    callTimeout(timeout: number, unit: TimeUnit): OkHttpClient$Builder;
    callTimeout(duration: Duration): OkHttpClient$Builder;
    certificatePinner(certificatePinner: CertificatePinner): OkHttpClient$Builder;
    connectTimeout(duration: Duration): OkHttpClient$Builder;
    connectTimeout(timeout: number, unit: TimeUnit): OkHttpClient$Builder;
    connectTimeout(duration: Duration): OkHttpClient$Builder;
    connectionPool(connectionPool: ConnectionPool): OkHttpClient$Builder;
    connectionSpecs(connectionSpecs: ConnectionSpec[]): OkHttpClient$Builder;
    cookieJar(cookieJar: CookieJar): OkHttpClient$Builder;
    dispatcher(dispatcher: Dispatcher): OkHttpClient$Builder;
    dns(dns: Dns): OkHttpClient$Builder;
    eventListener(eventListener: EventListener): OkHttpClient$Builder;
    eventListenerFactory(eventListenerFactory: EventListener$Factory): OkHttpClient$Builder;
    fastFallback(fastFallback: boolean): OkHttpClient$Builder;
    followRedirects(followRedirects: boolean): OkHttpClient$Builder;
    followSslRedirects(followProtocolRedirects: boolean): OkHttpClient$Builder;
    hostnameVerifier(hostnameVerifier: HostnameVerifier): OkHttpClient$Builder;
    interceptors(): Interceptor[];
    minWebSocketMessageToCompress(bytes: number): OkHttpClient$Builder;
    networkInterceptors(): Interceptor[];
    pingInterval(duration: Duration): OkHttpClient$Builder;
    pingInterval(interval: number, unit: TimeUnit): OkHttpClient$Builder;
    pingInterval(duration: Duration): OkHttpClient$Builder;
    protocols(protocols: Protocol[]): OkHttpClient$Builder;
    proxy(proxy: Proxy | null): OkHttpClient$Builder;
    proxyAuthenticator(proxyAuthenticator: Authenticator): OkHttpClient$Builder;
    proxySelector(proxySelector: ProxySelector): OkHttpClient$Builder;
    readTimeout(duration: Duration): OkHttpClient$Builder;
    readTimeout(timeout: number, unit: TimeUnit): OkHttpClient$Builder;
    readTimeout(duration: Duration): OkHttpClient$Builder;
    retryOnConnectionFailure(retryOnConnectionFailure: boolean): OkHttpClient$Builder;
    socketFactory(socketFactory: SocketFactory): OkHttpClient$Builder;
    sslSocketFactory(sslSocketFactory: SSLSocketFactory): OkHttpClient$Builder;
    sslSocketFactory(sslSocketFactory: SSLSocketFactory, trustManager: X509TrustManager): OkHttpClient$Builder;
    taskRunner(taskRunner: TaskRunner): OkHttpClient$Builder;
    webSocketCloseTimeout(duration: Duration): OkHttpClient$Builder;
    webSocketCloseTimeout(timeout: number, unit: TimeUnit): OkHttpClient$Builder;
    webSocketCloseTimeout(duration: Duration): OkHttpClient$Builder;
    writeTimeout(duration: Duration): OkHttpClient$Builder;
    writeTimeout(timeout: number, unit: TimeUnit): OkHttpClient$Builder;
    writeTimeout(duration: Duration): OkHttpClient$Builder;
}