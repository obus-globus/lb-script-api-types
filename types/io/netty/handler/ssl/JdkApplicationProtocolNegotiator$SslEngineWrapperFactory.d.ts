import type { JdkApplicationProtocolNegotiator } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator.d.ts'
import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface JdkApplicationProtocolNegotiator$SslEngineWrapperFactory extends Object{
    wrapSslEngine(arg0: SSLEngine, arg1: JdkApplicationProtocolNegotiator, arg2: boolean): SSLEngine;
}