import type { ApplicationProtocolConfig } from '../../../../io/netty/handler/ssl/ApplicationProtocolConfig.d.ts'
import type { CipherSuiteFilter } from '../../../../io/netty/handler/ssl/CipherSuiteFilter.d.ts'
import type { JdkApplicationProtocolNegotiator } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator.d.ts'
import type { JdkSslContext } from '../../../../io/netty/handler/ssl/JdkSslContext.d.ts'
import type { ResumptionController } from '../../../../io/netty/handler/ssl/ResumptionController.d.ts'
import type { SslContext } from '../../../../io/netty/handler/ssl/SslContext.d.ts'
import type { SslProvider } from '../../../../io/netty/handler/ssl/SslProvider.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { SecureRandom } from '../../../../java/security/SecureRandom.d.ts'
import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
import type { KeyManagerFactory } from '../../../../javax/net/ssl/KeyManagerFactory.d.ts'
import type { SNIServerName } from '../../../../javax/net/ssl/SNIServerName.d.ts'
import type { TrustManagerFactory } from '../../../../javax/net/ssl/TrustManagerFactory.d.ts'
export class JdkSslClientContext extends JdkSslContext {
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
    constructor()
    constructor(arg0: File)
    constructor(arg0: File, arg1: TrustManagerFactory)
    constructor(arg0: File, arg1: TrustManagerFactory, arg2: File, arg3: File, arg4: string, arg5: KeyManagerFactory, arg6: string[], arg7: CipherSuiteFilter, arg8: ApplicationProtocolConfig, arg9: number, arg10: number)
    constructor(arg0: File, arg1: TrustManagerFactory, arg2: File, arg3: File, arg4: string, arg5: KeyManagerFactory, arg6: string[], arg7: CipherSuiteFilter, arg8: JdkApplicationProtocolNegotiator, arg9: number, arg10: number)
    constructor(arg0: File, arg1: TrustManagerFactory, arg2: string[], arg3: CipherSuiteFilter, arg4: ApplicationProtocolConfig, arg5: number, arg6: number)
    constructor(arg0: File, arg1: TrustManagerFactory, arg2: string[], arg3: CipherSuiteFilter, arg4: JdkApplicationProtocolNegotiator, arg5: number, arg6: number)
    constructor(arg0: File, arg1: TrustManagerFactory, arg2: string[], arg3: string[], arg4: number, arg5: number)
    constructor(arg0: Provider, arg1: File, arg2: TrustManagerFactory, arg3: string[], arg4: CipherSuiteFilter, arg5: JdkApplicationProtocolNegotiator, arg6: number, arg7: number)
    constructor(arg0: Provider, arg1: X509Certificate[], arg2: TrustManagerFactory, arg3: X509Certificate[], arg4: PrivateKey, arg5: string, arg6: KeyManagerFactory, arg7: string[], arg8: CipherSuiteFilter, arg9: ApplicationProtocolConfig, arg10: string[], arg11: number, arg12: number, arg13: SecureRandom, arg14: string, arg15: string, arg16: SNIServerName[], arg17: ResumptionController)
    constructor(arg0: TrustManagerFactory)
}