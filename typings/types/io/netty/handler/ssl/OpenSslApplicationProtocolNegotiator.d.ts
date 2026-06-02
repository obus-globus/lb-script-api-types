import type { ApplicationProtocolConfig$Protocol } from '../../../../io/netty/handler/ssl/ApplicationProtocolConfig$Protocol.d.ts'
import type { ApplicationProtocolConfig$SelectedListenerFailureBehavior } from '../../../../io/netty/handler/ssl/ApplicationProtocolConfig$SelectedListenerFailureBehavior.d.ts'
import type { ApplicationProtocolConfig$SelectorFailureBehavior } from '../../../../io/netty/handler/ssl/ApplicationProtocolConfig$SelectorFailureBehavior.d.ts'
import type { ApplicationProtocolNegotiator } from '../../../../io/netty/handler/ssl/ApplicationProtocolNegotiator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface OpenSslApplicationProtocolNegotiator extends ApplicationProtocolNegotiator, Object{
    protocol(): ApplicationProtocolConfig$Protocol;
    selectedListenerFailureBehavior(): ApplicationProtocolConfig$SelectedListenerFailureBehavior;
    selectorFailureBehavior(): ApplicationProtocolConfig$SelectorFailureBehavior;
}