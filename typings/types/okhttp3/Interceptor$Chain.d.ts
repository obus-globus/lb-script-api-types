import type { Proxy } from '../java/net/Proxy.d.ts'
import type { ProxySelector } from '../java/net/ProxySelector.d.ts'
import type { TimeUnit } from '../java/util/concurrent/TimeUnit.d.ts'
import type { SocketFactory } from '../javax/net/SocketFactory.d.ts'
import type { HostnameVerifier } from '../javax/net/ssl/HostnameVerifier.d.ts'
import type { SSLSocketFactory } from '../javax/net/ssl/SSLSocketFactory.d.ts'
import type { X509TrustManager } from '../javax/net/ssl/X509TrustManager.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Authenticator } from '../okhttp3/Authenticator.d.ts'
import type { Cache } from '../okhttp3/Cache.d.ts'
import type { Call } from '../okhttp3/Call.d.ts'
import type { CertificatePinner } from '../okhttp3/CertificatePinner.d.ts'
import type { Connection } from '../okhttp3/Connection.d.ts'
import type { ConnectionPool } from '../okhttp3/ConnectionPool.d.ts'
import type { CookieJar } from '../okhttp3/CookieJar.d.ts'
import type { Dns } from '../okhttp3/Dns.d.ts'
import type { EventListener } from '../okhttp3/EventListener.d.ts'
import type { Request } from '../okhttp3/Request.d.ts'
import type { Response } from '../okhttp3/Response.d.ts'
export interface Interceptor$Chain extends Object{
    readonly authenticator: Authenticator;
    readonly cache: Cache | null;
    readonly certificatePinner: CertificatePinner;
    readonly connectionPool: ConnectionPool;
    readonly cookieJar: CookieJar;
    readonly dns: Dns;
    readonly eventListener: EventListener;
    readonly followRedirects: boolean;
    readonly followSslRedirects: boolean;
    readonly hostnameVerifier: HostnameVerifier;
    readonly proxy: Proxy | null;
    readonly proxyAuthenticator: Authenticator;
    readonly proxySelector: ProxySelector;
    readonly retryOnConnectionFailure: boolean;
    readonly socketFactory: SocketFactory;
    readonly sslSocketFactoryOrNull: SSLSocketFactory | null;
    readonly x509TrustManagerOrNull: X509TrustManager | null;
    call(): Call;
    connectTimeoutMillis(): number;
    connection(): Connection | null;
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