import type { JdkApplicationProtocolNegotiator$ProtocolSelectionListener } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator$ProtocolSelectionListener.d.ts'
import type { JdkSslEngine } from '../../../../io/netty/handler/ssl/JdkSslEngine.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JdkBaseApplicationProtocolNegotiator$NoFailProtocolSelectionListener extends Object implements JdkApplicationProtocolNegotiator$ProtocolSelectionListener {
    constructor(arg0: JdkSslEngine, arg1: string[])
    // private engineWrapper: JdkSslEngine;
    // private supportedProtocols: string[];
    noSelectedMatchFound(arg0: string): void;
    selected(arg0: string): void;
    unsupported(): void;
}