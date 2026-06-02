import type { Proxy } from '../java/net/Proxy.d.ts'
import type { ProxySelector } from '../java/net/ProxySelector.d.ts'
import type { SocketFactory } from '../javax/net/SocketFactory.d.ts'
import type { HostnameVerifier } from '../javax/net/ssl/HostnameVerifier.d.ts'
import type { SSLSocketFactory } from '../javax/net/ssl/SSLSocketFactory.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Authenticator } from '../okhttp3/Authenticator.d.ts'
import type { CertificatePinner } from '../okhttp3/CertificatePinner.d.ts'
import type { ConnectionSpec } from '../okhttp3/ConnectionSpec.d.ts'
import type { Dns } from '../okhttp3/Dns.d.ts'
import type { HttpUrl } from '../okhttp3/HttpUrl.d.ts'
import type { Protocol } from '../okhttp3/Protocol.d.ts'
export class Address extends Object {
    constructor(uriHost: string, uriPort: number, dns: Dns, socketFactory: SocketFactory, sslSocketFactory: SSLSocketFactory | null, hostnameVerifier: HostnameVerifier | null, certificatePinner: CertificatePinner | null, proxyAuthenticator: Authenticator, proxy: Proxy | null, protocols: Protocol[], connectionSpecs: ConnectionSpec[], proxySelector: ProxySelector)
    // private certificatePinner: CertificatePinner | null;
    certificatePinner(): CertificatePinner | null;
    // private connectionSpecs: ConnectionSpec[];
    connectionSpecs(): ConnectionSpec[];
    // private dns: Dns;
    dns(): Dns;
    // private hostnameVerifier: HostnameVerifier | null;
    hostnameVerifier(): HostnameVerifier | null;
    // private protocols: Protocol[];
    protocols(): Protocol[];
    // private proxy: Proxy | null;
    proxy(): Proxy | null;
    // private proxyAuthenticator: Authenticator;
    proxyAuthenticator(): Authenticator;
    // private proxySelector: ProxySelector;
    proxySelector(): ProxySelector;
    // private socketFactory: SocketFactory;
    socketFactory(): SocketFactory;
    // private sslSocketFactory: SSLSocketFactory | null;
    sslSocketFactory(): SSLSocketFactory | null;
    // private url: HttpUrl;
    url(): HttpUrl;
    certificatePinner(): CertificatePinner | null;
    connectionSpecs(): ConnectionSpec[];
    dns(): Dns;
    equals(other: Object | null): boolean;
    equalsNonHost(that: Address): boolean;
    hashCode(): number;
    hostnameVerifier(): HostnameVerifier | null;
    protocols(): Protocol[];
    proxy(): Proxy | null;
    proxyAuthenticator(): Authenticator;
    proxySelector(): ProxySelector;
    socketFactory(): SocketFactory;
    sslSocketFactory(): SSLSocketFactory | null;
    toString(): string;
    url(): HttpUrl;
}