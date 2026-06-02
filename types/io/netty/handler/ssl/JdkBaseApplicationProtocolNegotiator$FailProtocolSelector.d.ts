import type { JdkBaseApplicationProtocolNegotiator$NoFailProtocolSelector } from '../../../../io/netty/handler/ssl/JdkBaseApplicationProtocolNegotiator$NoFailProtocolSelector.d.ts'
import type { JdkSslEngine } from '../../../../io/netty/handler/ssl/JdkSslEngine.d.ts'
export class JdkBaseApplicationProtocolNegotiator$FailProtocolSelector extends JdkBaseApplicationProtocolNegotiator$NoFailProtocolSelector {
    constructor(arg0: JdkSslEngine, arg1: string[])
    noSelectMatchFound(): string;
}