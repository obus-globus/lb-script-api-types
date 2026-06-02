import type { JdkApplicationProtocolNegotiator } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator.d.ts'
import type { JdkApplicationProtocolNegotiator$ProtocolSelectionListenerFactory } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator$ProtocolSelectionListenerFactory.d.ts'
import type { JdkApplicationProtocolNegotiator$ProtocolSelectorFactory } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator$ProtocolSelectorFactory.d.ts'
import type { JdkApplicationProtocolNegotiator$SslEngineWrapperFactory } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator$SslEngineWrapperFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JdkDefaultApplicationProtocolNegotiator extends Object implements JdkApplicationProtocolNegotiator {
    static INSTANCE: JdkDefaultApplicationProtocolNegotiator;
    private constructor()
    protocolListenerFactory(): JdkApplicationProtocolNegotiator$ProtocolSelectionListenerFactory;
    protocolSelectorFactory(): JdkApplicationProtocolNegotiator$ProtocolSelectorFactory;
    protocols(): string[];
    wrapperFactory(): JdkApplicationProtocolNegotiator$SslEngineWrapperFactory;
}