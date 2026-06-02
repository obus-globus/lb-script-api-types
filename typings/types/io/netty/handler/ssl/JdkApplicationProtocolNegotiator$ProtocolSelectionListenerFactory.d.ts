import type { JdkApplicationProtocolNegotiator$ProtocolSelectionListener } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator$ProtocolSelectionListener.d.ts'
import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface JdkApplicationProtocolNegotiator$ProtocolSelectionListenerFactory extends Object{
    newListener(arg0: SSLEngine, arg1: string[]): JdkApplicationProtocolNegotiator$ProtocolSelectionListener;
}