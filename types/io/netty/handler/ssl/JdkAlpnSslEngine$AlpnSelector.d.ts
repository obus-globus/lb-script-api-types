import type { JdkApplicationProtocolNegotiator$ProtocolSelector } from '../../../../io/netty/handler/ssl/JdkApplicationProtocolNegotiator$ProtocolSelector.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JdkAlpnSslEngine$AlpnSelector extends Object implements BiFunction<SSLEngine, string[], string> {
    constructor(null_: JdkAlpnSslEngine$AlpnSelector, arg1: JdkApplicationProtocolNegotiator$ProtocolSelector)
    // private called: boolean;
    // private selector: JdkApplicationProtocolNegotiator$ProtocolSelector;
    andThen(arg0: (param0: R) => V): (param0: T, param1: U) => V;
    apply(arg0: SSLEngine, arg1: string[]): string;
    checkUnsupported(): void;
}