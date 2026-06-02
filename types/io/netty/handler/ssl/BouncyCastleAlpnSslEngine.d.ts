import type { JdkAlpnSslEngine } from '../../../../io/netty/handler/ssl/JdkAlpnSslEngine.d.ts'
import type { JdkApplicationProtocolNegotiator } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
export class BouncyCastleAlpnSslEngine extends JdkAlpnSslEngine {
    constructor(arg0: SSLEngine, arg1: JdkApplicationProtocolNegotiator, arg2: boolean)
    getApplicationProtocol(): string;
    getHandshakeApplicationProtocol(): string;
    getHandshakeApplicationProtocolSelector(): (param0: SSLEngine, param1: string[]) => string;
    setHandshakeApplicationProtocolSelector(arg0: (param0: SSLEngine, param1: string[]) => string): void;
}