import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ApplicationProtocolConfig } from '../../../../io/netty/handler/ssl/ApplicationProtocolConfig.d.ts'
import type { CipherSuiteFilter } from '../../../../io/netty/handler/ssl/CipherSuiteFilter.d.ts'
import type { ClientAuth } from '../../../../io/netty/handler/ssl/ClientAuth.d.ts'
import type { JdkApplicationProtocolNegotiator } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator.d.ts'
import type { ResumptionController } from '../../../../io/netty/handler/ssl/ResumptionController.d.ts'
import type { SslContext } from '../../../../io/netty/handler/ssl/SslContext.d.ts'
import type { SslProvider } from '../../../../io/netty/handler/ssl/SslProvider.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { KeyManagerFactory } from '../../../../javax/net/ssl/KeyManagerFactory.d.ts'
import type { SNIServerName } from '../../../../javax/net/ssl/SNIServerName.d.ts'
import type { SSLContext } from '../../../../javax/net/ssl/SSLContext.d.ts'
import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
import type { SSLSessionContext } from '../../../../javax/net/ssl/SSLSessionContext.d.ts'
import type { TrustManagerFactory } from '../../../../javax/net/ssl/TrustManagerFactory.d.ts'
export class JdkSslContext extends SslContext {
    static defaultClientProvider(): SslProvider;
    static defaultServerProvider(): SslProvider;
    static newClientContext(): SslContext;
    static newClientContext(paramarg0: SslProvider): SslContext;
    static newClientContext(paramarg0: SslProvider, paramarg1: File): SslContext;
    static newClientContext(paramarg0: SslProvider, paramarg1: File, paramarg2: TrustManagerFactory): SslContext;
    static newClientContext(paramarg0: SslProvider, paramarg1: File, paramarg2: TrustManagerFactory, paramarg3: File, paramarg4: File, paramarg5: string, paramarg6: KeyManagerFactory, paramarg7: string[], paramarg8: CipherSuiteFilter, paramarg9: ApplicationProtocolConfig, paramarg10: number, paramarg11: number): SslContext;
    static newClientContext(paramarg0: SslProvider, paramarg1: File, paramarg2: TrustManagerFactory, paramarg3: string[], paramarg4: CipherSuiteFilter, paramarg5: ApplicationProtocolConfig, paramarg6: number, paramarg7: number): SslContext;
    static newClientContext(paramarg0: SslProvider, paramarg1: File, paramarg2: TrustManagerFactory, paramarg3: string[], paramarg4: string[], paramarg5: number, paramarg6: number): SslContext;
    static newClientContext(paramarg0: SslProvider, paramarg1: TrustManagerFactory): SslContext;
    static newClientContext(paramarg0: File): SslContext;
    static newClientContext(paramarg0: File, paramarg1: TrustManagerFactory): SslContext;
    static newClientContext(paramarg0: File, paramarg1: TrustManagerFactory, paramarg2: string[], paramarg3: CipherSuiteFilter, paramarg4: ApplicationProtocolConfig, paramarg5: number, paramarg6: number): SslContext;
    static newClientContext(paramarg0: File, paramarg1: TrustManagerFactory, paramarg2: string[], paramarg3: string[], paramarg4: number, paramarg5: number): SslContext;
    static newClientContext(paramarg0: TrustManagerFactory): SslContext;
    static newServerContext(paramarg0: SslProvider, paramarg1: File, paramarg2: File): SslContext;
    static newServerContext(paramarg0: SslProvider, paramarg1: File, paramarg2: File, paramarg3: string): SslContext;
    static newServerContext(paramarg0: SslProvider, paramarg1: File, paramarg2: File, paramarg3: string, paramarg4: string[], paramarg5: CipherSuiteFilter, paramarg6: ApplicationProtocolConfig, paramarg7: number, paramarg8: number): SslContext;
    static newServerContext(paramarg0: SslProvider, paramarg1: File, paramarg2: File, paramarg3: string, paramarg4: string[], paramarg5: string[], paramarg6: number, paramarg7: number): SslContext;
    static newServerContext(paramarg0: SslProvider, paramarg1: File, paramarg2: File, paramarg3: string, paramarg4: TrustManagerFactory, paramarg5: string[], paramarg6: string[], paramarg7: number, paramarg8: number): SslContext;
    static newServerContext(paramarg0: SslProvider, paramarg1: File, paramarg2: TrustManagerFactory, paramarg3: File, paramarg4: File, paramarg5: string, paramarg6: KeyManagerFactory, paramarg7: string[], paramarg8: CipherSuiteFilter, paramarg9: ApplicationProtocolConfig, paramarg10: number, paramarg11: number): SslContext;
    static newServerContext(paramarg0: File, paramarg1: File): SslContext;
    static newServerContext(paramarg0: File, paramarg1: File, paramarg2: string): SslContext;
    static newServerContext(paramarg0: File, paramarg1: File, paramarg2: string, paramarg3: string[], paramarg4: CipherSuiteFilter, paramarg5: ApplicationProtocolConfig, paramarg6: number, paramarg7: number): SslContext;
    static newServerContext(paramarg0: File, paramarg1: File, paramarg2: string, paramarg3: string[], paramarg4: string[], paramarg5: number, paramarg6: number): SslContext;
    constructor(arg0: SSLContext, arg1: boolean, arg2: ClientAuth)
    constructor(arg0: SSLContext, arg1: boolean, arg2: string[], arg3: CipherSuiteFilter, arg4: ApplicationProtocolConfig, arg5: ClientAuth)
    constructor(arg0: SSLContext, arg1: boolean, arg2: string[], arg3: CipherSuiteFilter, arg4: ApplicationProtocolConfig, arg5: ClientAuth, arg6: string[], arg7: boolean)
    constructor(arg0: SSLContext, arg1: boolean, arg2: string[], arg3: CipherSuiteFilter, arg4: JdkApplicationProtocolNegotiator, arg5: ClientAuth, arg6: string[], arg7: boolean)
    constructor(arg0: SSLContext, arg1: boolean, arg2: string[], arg3: CipherSuiteFilter, arg4: JdkApplicationProtocolNegotiator, arg5: ClientAuth, arg6: string[], arg7: boolean, arg8: string, arg9: SNIServerName[], arg10: ResumptionController)
    // private apn: JdkApplicationProtocolNegotiator;
    // private cipherSuites: string[];
    // private clientAuth: ClientAuth;
    // private endpointIdentificationAlgorithm: string;
    // private isClient: boolean;
    // private protocols: string[];
    // private serverNames: SNIServerName[];
    // private sslContext: SSLContext;
    // private unmodifiableCipherSuites: string[];
    applicationProtocolNegotiator(): JdkApplicationProtocolNegotiator;
    cipherSuites(): string[];
    // private configureAndWrapEngine(arg0: SSLEngine, arg1: ByteBufAllocator): SSLEngine;
    // private configureSSLParameters(arg0: SSLEngine): void;
    context(): SSLContext;
    isClient(): boolean;
    newEngine(arg0: ByteBufAllocator): SSLEngine;
    newEngine(arg0: ByteBufAllocator, arg1: string, arg2: number): SSLEngine;
    sessionContext(): SSLSessionContext;
}