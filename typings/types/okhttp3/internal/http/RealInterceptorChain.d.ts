import type { Proxy } from '../../../java/net/Proxy.d.ts'
import type { ProxySelector } from '../../../java/net/ProxySelector.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { SocketFactory } from '../../../javax/net/SocketFactory.d.ts'
import type { HostnameVerifier } from '../../../javax/net/ssl/HostnameVerifier.d.ts'
import type { SSLSocketFactory } from '../../../javax/net/ssl/SSLSocketFactory.d.ts'
import type { X509TrustManager } from '../../../javax/net/ssl/X509TrustManager.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Address } from '../../../okhttp3/Address.d.ts'
import type { Authenticator } from '../../../okhttp3/Authenticator.d.ts'
import type { Cache } from '../../../okhttp3/Cache.d.ts'
import type { Call } from '../../../okhttp3/Call.d.ts'
import type { CertificatePinner } from '../../../okhttp3/CertificatePinner.d.ts'
import type { Connection } from '../../../okhttp3/Connection.d.ts'
import type { ConnectionPool } from '../../../okhttp3/ConnectionPool.d.ts'
import type { CookieJar } from '../../../okhttp3/CookieJar.d.ts'
import type { Dns } from '../../../okhttp3/Dns.d.ts'
import type { EventListener } from '../../../okhttp3/EventListener.d.ts'
import type { HttpUrl } from '../../../okhttp3/HttpUrl.d.ts'
import type { Interceptor } from '../../../okhttp3/Interceptor.d.ts'
import type { Interceptor$Chain } from '../../../okhttp3/Interceptor$Chain.d.ts'
import type { OkHttpClient } from '../../../okhttp3/OkHttpClient.d.ts'
import type { Request } from '../../../okhttp3/Request.d.ts'
import type { Response } from '../../../okhttp3/Response.d.ts'
import type { Exchange } from '../../../okhttp3/internal/connection/Exchange.d.ts'
import type { RealCall } from '../../../okhttp3/internal/connection/RealCall.d.ts'
import type { CertificateChainCleaner } from '../../../okhttp3/internal/tls/CertificateChainCleaner.d.ts'
export class RealInterceptorChain extends Object implements Interceptor$Chain {
    constructor(call: RealCall, interceptors: Interceptor[], index: number, exchange: void | null, request: Request, client: OkHttpClient)
    constructor(call: RealCall, interceptors: Interceptor[], index: number, exchange: Exchange | null, request: Request, connectTimeoutMillis: number, readTimeoutMillis: number, writeTimeoutMillis: number, authenticator: Authenticator, cache: Cache | null, certificatePinner: CertificatePinner, connectionPool: ConnectionPool, cookieJar: CookieJar, dns: Dns, hostnameVerifier: HostnameVerifier, proxy: Proxy | null, proxyAuthenticator: Authenticator, proxySelector: ProxySelector, retryOnConnectionFailure: boolean, socketFactory: SocketFactory, sslSocketFactoryOrNull: SSLSocketFactory | null, x509TrustManagerOrNull: X509TrustManager | null, certificateChainCleaner: CertificateChainCleaner | null)
    readonly authenticator: Authenticator;
    readonly cache: Cache | null;
    // private call: RealCall;
    /*not mapped: */ getCall$okhttp(): RealCall;
    // private calls: number;
    readonly certificateChainCleaner: CertificateChainCleaner | null;
    readonly certificatePinner: CertificatePinner;
    // private connectTimeoutMillis: number;
    /*not mapped: */ getConnectTimeoutMillis$okhttp(): number;
    readonly connectionPool: ConnectionPool;
    readonly cookieJar: CookieJar;
    readonly dns: Dns;
    readonly eventListener: EventListener;
    // private exchange: Exchange | null;
    /*not mapped: */ getExchange$okhttp(): Exchange | null;
    readonly followRedirects: boolean;
    readonly followSslRedirects: boolean;
    readonly hostnameVerifier: HostnameVerifier;
    // private index: number;
    // private interceptors: Interceptor[];
    readonly proxy: Proxy | null;
    readonly proxyAuthenticator: Authenticator;
    readonly proxySelector: ProxySelector;
    // private readTimeoutMillis: number;
    /*not mapped: */ getReadTimeoutMillis$okhttp(): number;
    // private request: Request;
    /*not mapped: */ getRequest$okhttp(): Request;
    readonly retryOnConnectionFailure: boolean;
    readonly socketFactory: SocketFactory;
    readonly sslSocketFactoryOrNull: SSLSocketFactory | null;
    // private writeTimeoutMillis: number;
    /*not mapped: */ getWriteTimeoutMillis$okhttp(): number;
    readonly x509TrustManagerOrNull: X509TrustManager | null;
    address(url: HttpUrl): Address;
    call(): Call;
    connectTimeoutMillis(): number;
    connection(): Connection | null;
    copy(index: number, exchange: Exchange | null, request: Request, connectTimeoutMillis: number, readTimeoutMillis: number, writeTimeoutMillis: number, authenticator: Authenticator, cache: Cache | null, certificatePinner: CertificatePinner, connectionPool: ConnectionPool, cookieJar: CookieJar, dns: Dns, hostnameVerifier: HostnameVerifier, proxy: Proxy | null, proxyAuthenticator: Authenticator, proxySelector: ProxySelector, retryOnConnectionFailure: boolean, socketFactory: SocketFactory, sslSocketFactory: SSLSocketFactory | null, x509TrustManager: X509TrustManager | null, certificateChainCleaner: CertificateChainCleaner | null): RealInterceptorChain;
    proceed(request: Request): Response;
    readTimeoutMillis(): number;
    request(): Request;
    withAuthenticator(authenticator: Authenticator): Interceptor$Chain;
    withCache(cache: Cache | null): Interceptor$Chain;
    withCertificatePinner(certificatePinner: CertificatePinner): Interceptor$Chain;
    withConnectTimeout(timeout: number, unit: TimeUnit): Interceptor$Chain;
    withConnectionPool(connectionPool: ConnectionPool): Interceptor$Chain;
    withCookieJar(cookieJar: CookieJar): Interceptor$Chain;
    withDns(dns: Dns): Interceptor$Chain;
    withHostnameVerifier(hostnameVerifier: HostnameVerifier): Interceptor$Chain;
    withProxy(proxy: Proxy | null): Interceptor$Chain;
    withProxyAuthenticator(proxyAuthenticator: Authenticator): Interceptor$Chain;
    withProxySelector(proxySelector: ProxySelector): Interceptor$Chain;
    withReadTimeout(timeout: number, unit: TimeUnit): Interceptor$Chain;
    withRetryOnConnectionFailure(retryOnConnectionFailure: boolean): Interceptor$Chain;
    withSocketFactory(socketFactory: SocketFactory): Interceptor$Chain;
    withSslSocketFactory(sslSocketFactory: SSLSocketFactory | null, x509TrustManager: X509TrustManager | null): Interceptor$Chain;
    withWriteTimeout(timeout: number, unit: TimeUnit): Interceptor$Chain;
    writeTimeoutMillis(): number;
}