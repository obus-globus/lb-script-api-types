import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { AbstractCoalescingBufferQueue } from '../../../io/netty/channel/AbstractCoalescingBufferQueue.d.ts'
import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class CoalescingBufferQueue extends AbstractCoalescingBufferQueue {
    constructor(arg0: Channel)
    constructor(arg0: Channel, arg1: number)
    constructor(arg0: Channel, arg1: number, arg2: boolean)
    // private channel: Channel;
    compose(arg0: ByteBufAllocator, arg1: ByteBuf, arg2: ByteBuf): ByteBuf;
    releaseAndFailAll(arg0: Throwable): void;
    remove(arg0: number, arg1: ChannelPromise): ByteBuf;
    removeEmptyValue(): ByteBuf;
}