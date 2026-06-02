import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelFutureListener } from '../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOutboundInvoker } from '../../../io/netty/channel/ChannelOutboundInvoker.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { PendingBytesTracker } from '../../../io/netty/channel/PendingBytesTracker.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export abstract class AbstractCoalescingBufferQueue extends Object {
    constructor(arg0: Channel, arg1: number)
    // private bufAndListenerPairs: Object[];
    // private readableBytes: number;
    // private tracker: PendingBytesTracker;
    add(arg0: ByteBuf): void;
    add(arg0: ByteBuf, arg1: ChannelFutureListener): void;
    add(arg0: ByteBuf, arg1: ChannelPromise): void;
    // private addFirst(arg0: ByteBuf, arg1: ChannelFutureListener): void;
    addFirst(arg0: ByteBuf, arg1: ChannelPromise): void;
    compose(arg0: ByteBufAllocator, arg1: ByteBuf, arg2: ByteBuf): ByteBuf;
    composeFirst(arg0: ByteBufAllocator, arg1: ByteBuf): ByteBuf;
    composeFirst(arg0: ByteBufAllocator, arg1: ByteBuf, arg2: number): ByteBuf;
    composeIntoComposite(arg0: ByteBufAllocator, arg1: ByteBuf, arg2: ByteBuf): ByteBuf;
    copyAndCompose(arg0: ByteBufAllocator, arg1: ByteBuf, arg2: ByteBuf): ByteBuf;
    copyTo(arg0: AbstractCoalescingBufferQueue): void;
    // private decrementReadableBytes(arg0: number): void;
    // private incrementReadableBytes(arg0: number): void;
    isEmpty(): boolean;
    readableBytes(): number;
    // private releaseAndCompleteAll(arg0: ChannelFuture): void;
    releaseAndFailAll(arg0: ChannelOutboundInvoker, arg1: Throwable): void;
    remove(arg0: ByteBufAllocator, arg1: number, arg2: ChannelPromise): ByteBuf;
    removeEmptyValue(): ByteBuf;
    removeFirst(arg0: ChannelPromise): ByteBuf;
    size(): number;
    toString(): string;
    writeAndRemoveAll(arg0: ChannelHandlerContext): void;
}