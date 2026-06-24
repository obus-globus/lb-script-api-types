import type { JdkAlpnApplicationProtocolNegotiator$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { JdkApplicationProtocolNegotiator } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator.d.ts'
import type { JdkApplicationProtocolNegotiator$AllocatorAwareSslEngineWrapperFactory } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator$AllocatorAwareSslEngineWrapperFactory.d.ts'
import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
export class JdkAlpnApplicationProtocolNegotiator$AlpnWrapper extends JdkApplicationProtocolNegotiator$AllocatorAwareSslEngineWrapperFactory {
    private constructor()
    constructor(arg0: JdkAlpnApplicationProtocolNegotiator$1)
    wrapSslEngine(arg0: SSLEngine, arg1: ByteBufAllocator, arg2: JdkApplicationProtocolNegotiator, arg3: boolean): SSLEngine;
    wrapSslEngine(arg0: SSLEngine, arg1: JdkApplicationProtocolNegotiator, arg2: boolean): SSLEngine;
}