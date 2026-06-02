import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { AbstractOioChannel } from '../../../../io/netty/channel/oio/AbstractOioChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractOioMessageChannel extends AbstractOioChannel {
    constructor(arg0: Channel)
    // private readBuf: Object[];
    doRead(): void;
    doReadMessages(arg0: Object[]): number;
}