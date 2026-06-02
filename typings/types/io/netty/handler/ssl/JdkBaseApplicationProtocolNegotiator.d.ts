import type { JdkApplicationProtocolNegotiator } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator.d.ts'
import type { JdkApplicationProtocolNegotiator$ProtocolSelectionListenerFactory } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator$ProtocolSelectionListenerFactory.d.ts'
import type { JdkApplicationProtocolNegotiator$ProtocolSelectorFactory } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator$ProtocolSelectorFactory.d.ts'
import type { JdkApplicationProtocolNegotiator$SslEngineWrapperFactory } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator$SslEngineWrapperFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JdkBaseApplicationProtocolNegotiator extends Object implements JdkApplicationProtocolNegotiator {
    constructor(arg0: JdkApplicationProtocolNegotiator$SslEngineWrapperFactory, arg1: JdkApplicationProtocolNegotiator$ProtocolSelectorFactory, arg2: JdkApplicationProtocolNegotiator$ProtocolSelectionListenerFactory, arg3: string[])
    constructor(arg0: JdkApplicationProtocolNegotiator$SslEngineWrapperFactory, arg1: JdkApplicationProtocolNegotiator$ProtocolSelectorFactory, arg2: JdkApplicationProtocolNegotiator$ProtocolSelectionListenerFactory, arg3: string[])
    private constructor(arg0: JdkApplicationProtocolNegotiator$SslEngineWrapperFactory, arg1: JdkApplicationProtocolNegotiator$ProtocolSelectorFactory, arg2: JdkApplicationProtocolNegotiator$ProtocolSelectionListenerFactory, arg3: string[])
    // private listenerFactory: JdkApplicationProtocolNegotiator$ProtocolSelectionListenerFactory;
    // private protocols: string[];
    // private selectorFactory: JdkApplicationProtocolNegotiator$ProtocolSelectorFactory;
    // private wrapperFactory: JdkApplicationProtocolNegotiator$SslEngineWrapperFactory;
    protocolListenerFactory(): JdkApplicationProtocolNegotiator$ProtocolSelectionListenerFactory;
    protocolSelectorFactory(): JdkApplicationProtocolNegotiator$ProtocolSelectorFactory;
    protocols(): string[];
    wrapperFactory(): JdkApplicationProtocolNegotiator$SslEngineWrapperFactory;
}