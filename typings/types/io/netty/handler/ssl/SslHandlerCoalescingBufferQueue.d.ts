import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { AbstractCoalescingBufferQueue } from '../../../../io/netty/channel/AbstractCoalescingBufferQueue.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
export abstract class SslHandlerCoalescingBufferQueue extends AbstractCoalescingBufferQueue {
    constructor(arg0: Channel, arg1: number, arg2: boolean)
    // private wantsDirectBuffer: boolean;
    compose(arg0: ByteBufAllocator, arg1: ByteBuf, arg2: ByteBuf): ByteBuf;
    composeFirst(arg0: ByteBufAllocator, arg1: ByteBuf): ByteBuf;
    composeFirst(arg0: ByteBufAllocator, arg1: ByteBuf, arg2: number): ByteBuf;
    removeEmptyValue(): ByteBuf;
    wrapDataSize(): number;
}