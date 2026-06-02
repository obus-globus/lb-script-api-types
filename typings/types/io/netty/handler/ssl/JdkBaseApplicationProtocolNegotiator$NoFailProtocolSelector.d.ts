import type { JdkApplicationProtocolNegotiator$ProtocolSelector } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator$ProtocolSelector.d.ts'
import type { JdkSslEngine } from '../../../../io/netty/handler/ssl/JdkSslEngine.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JdkBaseApplicationProtocolNegotiator$NoFailProtocolSelector extends Object implements JdkApplicationProtocolNegotiator$ProtocolSelector {
    constructor(arg0: JdkSslEngine, arg1: string[])
    // private engineWrapper: JdkSslEngine;
    // private supportedProtocols: string[];
    noSelectMatchFound(): string;
    select(arg0: string[]): string;
    unsupported(): void;
}