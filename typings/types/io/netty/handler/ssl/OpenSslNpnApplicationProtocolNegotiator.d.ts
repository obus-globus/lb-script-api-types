import type { ApplicationProtocolConfig$Protocol } from '../../../../io/netty/handler/ssl/ApplicationProtocolConfig$Protocol.d.ts'
import type { ApplicationProtocolConfig$SelectedListenerFailureBehavior } from '../../../../io/netty/handler/ssl/ApplicationProtocolConfig$SelectedListenerFailureBehavior.d.ts'
import type { ApplicationProtocolConfig$SelectorFailureBehavior } from '../../../../io/netty/handler/ssl/ApplicationProtocolConfig$SelectorFailureBehavior.d.ts'
import type { OpenSslApplicationProtocolNegotiator } from '../../../../io/netty/handler/ssl/OpenSslApplicationProtocolNegotiator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OpenSslNpnApplicationProtocolNegotiator extends Object implements OpenSslApplicationProtocolNegotiator {
    constructor(arg0: string[])
    constructor(arg0: string[])
    // private protocols: string[];
    protocol(): ApplicationProtocolConfig$Protocol;
    protocols(): string[];
    selectedListenerFailureBehavior(): ApplicationProtocolConfig$SelectedListenerFailureBehavior;
    selectorFailureBehavior(): ApplicationProtocolConfig$SelectorFailureBehavior;
}