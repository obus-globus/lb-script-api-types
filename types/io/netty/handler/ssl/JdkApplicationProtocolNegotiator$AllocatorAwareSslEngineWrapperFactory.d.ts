import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { JdkApplicationProtocolNegotiator } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator.d.ts'
import type { JdkApplicationProtocolNegotiator$SslEngineWrapperFactory } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator$SslEngineWrapperFactory.d.ts'
import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class JdkApplicationProtocolNegotiator$AllocatorAwareSslEngineWrapperFactory extends Object implements JdkApplicationProtocolNegotiator$SslEngineWrapperFactory {
    constructor()
    wrapSslEngine(arg0: SSLEngine, arg1: ByteBufAllocator, arg2: JdkApplicationProtocolNegotiator, arg3: boolean): SSLEngine;
    wrapSslEngine(arg0: SSLEngine, arg1: JdkApplicationProtocolNegotiator, arg2: boolean): SSLEngine;
}