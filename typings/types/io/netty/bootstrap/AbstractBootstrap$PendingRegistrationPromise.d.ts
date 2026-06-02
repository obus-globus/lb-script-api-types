import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { DefaultChannelPromise } from '../../../io/netty/channel/DefaultChannelPromise.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AbstractBootstrap$PendingRegistrationPromise extends DefaultChannelPromise {
    static PROPERTY_MAX_LISTENER_STACK_DEPTH: string;
    constructor(arg0: Channel)
    // private registered: boolean;
    executor(): (Object | null)[];
    registered(): void;
}