import type { JdkAlpnSslEngine } from '../../../../io/netty/handler/ssl/JdkAlpnSslEngine.d.ts'
import type { JdkApplicationProtocolNegotiator$ProtocolSelector } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator$ProtocolSelector.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JdkAlpnSslEngine$AlpnSelector extends Object implements BiFunction<SSLEngine, string[], string> {
    constructor(null_: JdkAlpnSslEngine, arg1: JdkApplicationProtocolNegotiator$ProtocolSelector)
    // private called: boolean;
    // private selector: JdkApplicationProtocolNegotiator$ProtocolSelector;
    andThen<V extends unknown>(arg0: (param0: string) => V): (param0: SSLEngine, param1: string[]) => V;
    apply(arg0: SSLEngine, arg1: string[]): string;
    checkUnsupported(): void;
}