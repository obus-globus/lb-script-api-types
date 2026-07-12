import type { JdkApplicationProtocolNegotiator$ProtocolSelectionListenerFactory } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator$ProtocolSelectionListenerFactory.d.ts'
import type { JdkApplicationProtocolNegotiator$ProtocolSelectorFactory } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator$ProtocolSelectorFactory.d.ts'
import type { JdkBaseApplicationProtocolNegotiator } from '../../../../io/netty/handler/ssl/JdkBaseApplicationProtocolNegotiator.d.ts'
export class JdkAlpnApplicationProtocolNegotiator extends JdkBaseApplicationProtocolNegotiator {
    constructor(arg0: JdkApplicationProtocolNegotiator$ProtocolSelectorFactory, arg1: JdkApplicationProtocolNegotiator$ProtocolSelectionListenerFactory, ...arg2: string[])
    constructor(arg0: JdkApplicationProtocolNegotiator$ProtocolSelectorFactory, arg1: JdkApplicationProtocolNegotiator$ProtocolSelectionListenerFactory, arg2: string[])
    constructor(...arg0: string[])
    constructor(arg0: boolean, ...arg1: string[])
    constructor(arg0: boolean, arg1: boolean, ...arg2: string[])
    constructor(arg0: boolean, arg1: boolean, arg2: string[])
    constructor(arg0: boolean, arg1: string[])
    constructor(arg0: string[])
}