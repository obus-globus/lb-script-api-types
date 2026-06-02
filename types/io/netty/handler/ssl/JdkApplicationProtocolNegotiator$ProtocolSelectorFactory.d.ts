import type { JdkApplicationProtocolNegotiator$ProtocolSelector } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator$ProtocolSelector.d.ts'
import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface JdkApplicationProtocolNegotiator$ProtocolSelectorFactory extends Object{
    newSelector(arg0: SSLEngine, arg1: string[]): JdkApplicationProtocolNegotiator$ProtocolSelector;
}