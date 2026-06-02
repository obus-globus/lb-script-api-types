import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ApplicationProtocolConfig } from '../../../../io/netty/handler/ssl/ApplicationProtocolConfig.d.ts'
import type { ApplicationProtocolNegotiator } from '../../../../io/netty/handler/ssl/ApplicationProtocolNegotiator.d.ts'
import type { CipherSuiteFilter } from '../../../../io/netty/handler/ssl/CipherSuiteFilter.d.ts'
import type { ResumptionController } from '../../../../io/netty/handler/ssl/ResumptionController.d.ts'
import type { SslHandler } from '../../../../io/netty/handler/ssl/SslHandler.d.ts'
import type { SslProvider } from '../../../../io/netty/handler/ssl/SslProvider.d.ts'
import type { AttributeMap } from '../../../../io/netty/util/AttributeMap.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { KeyManagerFactory } from '../../../../javax/net/ssl/KeyManagerFactory.d.ts'
import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
import type { SSLSessionContext } from '../../../../javax/net/ssl/SSLSessionContext.d.ts'
import type { TrustManagerFactory } from '../../../../javax/net/ssl/TrustManagerFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class SslContext extends Object {
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
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: ResumptionController)
    // private attributes: AttributeMap;
    // private resumptionController: ResumptionController;
    // private startTls: boolean;
    applicationProtocolNegotiator(): ApplicationProtocolNegotiator;
    attributes(): AttributeMap;
    cipherSuites(): string[];
    isClient(): boolean;
    isServer(): boolean;
    newEngine(arg0: ByteBufAllocator): SSLEngine;
    newEngine(arg0: ByteBufAllocator, arg1: string, arg2: number): SSLEngine;
    newHandler(arg0: ByteBufAllocator): SslHandler;
    newHandler(arg0: ByteBufAllocator, arg1: Executor): SslHandler;
    newHandler(arg0: ByteBufAllocator, arg1: boolean): SslHandler;
    newHandler(arg0: ByteBufAllocator, arg1: boolean, arg2: Executor): SslHandler;
    newHandler(arg0: ByteBufAllocator, arg1: string, arg2: number): SslHandler;
    newHandler(arg0: ByteBufAllocator, arg1: string, arg2: number, arg3: Executor): SslHandler;
    newHandler(arg0: ByteBufAllocator, arg1: string, arg2: number, arg3: boolean): SslHandler;
    newHandler(arg0: ByteBufAllocator, arg1: string, arg2: number, arg3: boolean, arg4: Executor): SslHandler;
    nextProtocols(): string[];
    sessionCacheSize(): number;
    sessionContext(): SSLSessionContext;
    sessionTimeout(): number;
}