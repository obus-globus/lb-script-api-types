import type { ApplicationProtocolNegotiator } from '../../../../io/netty/handler/ssl/ApplicationProtocolNegotiator.d.ts'
import type { JdkApplicationProtocolNegotiator$ProtocolSelectionListenerFactory } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator$ProtocolSelectionListenerFactory.d.ts'
import type { JdkApplicationProtocolNegotiator$ProtocolSelectorFactory } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator$ProtocolSelectorFactory.d.ts'
import type { JdkApplicationProtocolNegotiator$SslEngineWrapperFactory } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator$SslEngineWrapperFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface JdkApplicationProtocolNegotiator extends ApplicationProtocolNegotiator, Object{
    protocolListenerFactory(): JdkApplicationProtocolNegotiator$ProtocolSelectionListenerFactory;
    protocolSelectorFactory(): JdkApplicationProtocolNegotiator$ProtocolSelectorFactory;
    wrapperFactory(): JdkApplicationProtocolNegotiator$SslEngineWrapperFactory;
}