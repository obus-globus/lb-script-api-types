import type { JdkBaseApplicationProtocolNegotiator$NoFailProtocolSelectionListener } from '../../../../io/netty/handler/ssl/JdkBaseApplicationProtocolNegotiator$NoFailProtocolSelectionListener.d.ts'
import type { JdkSslEngine } from '../../../../io/netty/handler/ssl/JdkSslEngine.d.ts'
export class JdkBaseApplicationProtocolNegotiator$FailProtocolSelectionListener extends JdkBaseApplicationProtocolNegotiator$NoFailProtocolSelectionListener {
    constructor(arg0: JdkSslEngine, arg1: string[])
    noSelectedMatchFound(arg0: string): void;
}