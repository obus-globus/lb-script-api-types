import type { ApplicationProtocolConfig } from '../../../../io/netty/handler/ssl/ApplicationProtocolConfig.d.ts'
import type { CipherSuiteFilter } from '../../../../io/netty/handler/ssl/CipherSuiteFilter.d.ts'
import type { ClientAuth } from '../../../../io/netty/handler/ssl/ClientAuth.d.ts'
import type { OpenSslCredential } from '../../../../io/netty/handler/ssl/OpenSslCredential.d.ts'
import type { SslContext } from '../../../../io/netty/handler/ssl/SslContext.d.ts'
import type { SslContextOption } from '../../../../io/netty/handler/ssl/SslContextOption.d.ts'
import type { SslProvider } from '../../../../io/netty/handler/ssl/SslProvider.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { SecureRandom } from '../../../../java/security/SecureRandom.d.ts'
import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
import type { KeyManager } from '../../../../javax/net/ssl/KeyManager.d.ts'
import type { KeyManagerFactory } from '../../../../javax/net/ssl/KeyManagerFactory.d.ts'
import type { SNIServerName } from '../../../../javax/net/ssl/SNIServerName.d.ts'
import type { TrustManager } from '../../../../javax/net/ssl/TrustManager.d.ts'
import type { TrustManagerFactory } from '../../../../javax/net/ssl/TrustManagerFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SslContextBuilder extends Object {
    static forClient(): SslContextBuilder;
    static forServer(paramarg0: File, paramarg1: File): SslContextBuilder;
    static forServer(paramarg0: File, paramarg1: File, paramarg2: string): SslContextBuilder;
    static forServer(paramarg0: InputStream, paramarg1: InputStream): SslContextBuilder;
    static forServer(paramarg0: InputStream, paramarg1: InputStream, paramarg2: string): SslContextBuilder;
    static forServer(paramarg0: PrivateKey, paramarg1: X509Certificate[]): SslContextBuilder;
    static forServer(paramarg0: PrivateKey, paramarg1: string, paramarg2: X509Certificate[]): SslContextBuilder;
    static forServer(paramarg0: PrivateKey, paramarg1: string, ...paramarg2: X509Certificate[]): SslContextBuilder;
    static forServer(paramarg0: PrivateKey, ...paramarg1: X509Certificate[]): SslContextBuilder;
    static forServer(paramarg0: KeyManager): SslContextBuilder;
    static forServer(paramarg0: KeyManagerFactory): SslContextBuilder;
    private constructor(arg0: boolean)
    // private apn: ApplicationProtocolConfig;
    // private cipherFilter: CipherSuiteFilter;
    // private ciphers: string[];
    // private clientAuth: ClientAuth;
    // private credentials: OpenSslCredential[];
    // private enableOcsp: boolean;
    // private endpointIdentificationAlgorithm: string;
    // private forServer: boolean;
    // private key: PrivateKey;
    // private keyCertChain: X509Certificate[];
    // private keyManagerFactory: KeyManagerFactory;
    // private keyPassword: string;
    // private keyStoreType: string;
    // private options: Map<SslContextOption<Object>, Object>;
    // private protocols: string[];
    // private provider: SslProvider;
    // private secureRandom: SecureRandom;
    // private serverNames: SNIServerName[];
    // private sessionCacheSize: number;
    // private sessionTimeout: number;
    // private sslContextProvider: { [key: string]: any };
    // private startTls: boolean;
    // private trustCertCollection: X509Certificate[];
    // private trustManagerFactory: TrustManagerFactory;
    addCredential(arg0: OpenSslCredential): SslContextBuilder;
    addCredentials(...arg0: OpenSslCredential[]): SslContextBuilder;
    addCredentials(arg0: OpenSslCredential[]): SslContextBuilder;
    applicationProtocolConfig(arg0: ApplicationProtocolConfig): SslContextBuilder;
    build(): SslContext;
    ciphers(arg0: string[]): SslContextBuilder;
    ciphers(arg0: string[], arg1: CipherSuiteFilter): SslContextBuilder;
    clientAuth(arg0: ClientAuth): SslContextBuilder;
    enableOcsp(arg0: boolean): SslContextBuilder;
    endpointIdentificationAlgorithm(arg0: string): SslContextBuilder;
    keyManager(arg0: File, arg1: File): SslContextBuilder;
    keyManager(arg0: File, arg1: File, arg2: string): SslContextBuilder;
    keyManager(arg0: InputStream, arg1: InputStream): SslContextBuilder;
    keyManager(arg0: InputStream, arg1: InputStream, arg2: string): SslContextBuilder;
    keyManager(arg0: PrivateKey, ...arg1: X509Certificate[]): SslContextBuilder;
    keyManager(arg0: PrivateKey, arg1: string, ...arg2: X509Certificate[]): SslContextBuilder;
    keyManager(arg0: PrivateKey, arg1: string, arg2: X509Certificate[]): SslContextBuilder;
    keyManager(arg0: PrivateKey, arg1: X509Certificate[]): SslContextBuilder;
    keyManager(arg0: KeyManager): SslContextBuilder;
    keyManager(arg0: KeyManagerFactory): SslContextBuilder;
    keyStoreType(arg0: string): SslContextBuilder;
    option<T extends unknown>(arg0: SslContextOption<T>, arg1: T): SslContextBuilder;
    protocols(...arg0: string[]): SslContextBuilder;
    protocols(arg0: string[]): SslContextBuilder;
    secureRandom(arg0: SecureRandom): SslContextBuilder;
    serverName(arg0: SNIServerName): SslContextBuilder;
    sessionCacheSize(arg0: number): SslContextBuilder;
    sessionTimeout(arg0: number): SslContextBuilder;
    sslContextProvider(arg0: { [key: string]: any }): SslContextBuilder;
    sslProvider(arg0: SslProvider): SslContextBuilder;
    startTls(arg0: boolean): SslContextBuilder;
    trustManager(arg0: File): SslContextBuilder;
    trustManager(arg0: InputStream): SslContextBuilder;
    trustManager(arg0: TrustManager): SslContextBuilder;
    trustManager(arg0: TrustManagerFactory): SslContextBuilder;
    trustManager(...arg0: X509Certificate[]): SslContextBuilder;
    trustManager(arg0: X509Certificate[]): SslContextBuilder;
}