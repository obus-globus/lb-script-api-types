import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelMetadata } from '../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOutboundBuffer } from '../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { AbstractKQueueChannel } from '../../../../io/netty/channel/kqueue/AbstractKQueueChannel.d.ts'
import type { BsdSocket } from '../../../../io/netty/channel/kqueue/BsdSocket.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractKQueueDatagramChannel extends AbstractKQueueChannel {
    constructor(arg0: Channel, arg1: BsdSocket, arg2: boolean)
    doWrite(arg0: ChannelOutboundBuffer): void;
    doWriteMessage(arg0: Object): boolean;
    metadata(): ChannelMetadata;
}