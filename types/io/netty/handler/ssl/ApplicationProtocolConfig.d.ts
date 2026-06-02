import type { ApplicationProtocolConfig$Protocol } from '../../../../io/netty/handler/ssl/ApplicationProtocolConfig$Protocol.d.ts'
import type { ApplicationProtocolConfig$SelectedListenerFailureBehavior } from '../../../../io/netty/handler/ssl/ApplicationProtocolConfig$SelectedListenerFailureBehavior.d.ts'
import type { ApplicationProtocolConfig$SelectorFailureBehavior } from '../../../../io/netty/handler/ssl/ApplicationProtocolConfig$SelectorFailureBehavior.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ApplicationProtocolConfig extends Object {
    static DISABLED: ApplicationProtocolConfig;
    private constructor()
    constructor(arg0: ApplicationProtocolConfig$Protocol, arg1: ApplicationProtocolConfig$SelectorFailureBehavior, arg2: ApplicationProtocolConfig$SelectedListenerFailureBehavior, arg3: string[])
    constructor(arg0: ApplicationProtocolConfig$Protocol, arg1: ApplicationProtocolConfig$SelectorFailureBehavior, arg2: ApplicationProtocolConfig$SelectedListenerFailureBehavior, arg3: string[])
    private constructor(arg0: ApplicationProtocolConfig$Protocol, arg1: ApplicationProtocolConfig$SelectorFailureBehavior, arg2: ApplicationProtocolConfig$SelectedListenerFailureBehavior, arg3: string[])
    // private protocol: ApplicationProtocolConfig$Protocol;
    // private selectedBehavior: ApplicationProtocolConfig$SelectedListenerFailureBehavior;
    // private selectorBehavior: ApplicationProtocolConfig$SelectorFailureBehavior;
    // private supportedProtocols: string[];
    protocol(): ApplicationProtocolConfig$Protocol;
    selectedListenerFailureBehavior(): ApplicationProtocolConfig$SelectedListenerFailureBehavior;
    selectorFailureBehavior(): ApplicationProtocolConfig$SelectorFailureBehavior;
    supportedProtocols(): string[];
}