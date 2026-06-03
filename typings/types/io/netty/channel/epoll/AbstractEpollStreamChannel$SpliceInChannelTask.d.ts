import type { ChannelFuture } from '../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelFutureListener } from '../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { RecvByteBufAllocator$Handle } from '../../../../io/netty/channel/RecvByteBufAllocator$Handle.d.ts'
import type { AbstractEpollStreamChannel } from '../../../../io/netty/channel/epoll/AbstractEpollStreamChannel.d.ts'
import type { AbstractEpollStreamChannel$SpliceInTask } from '../../../../io/netty/channel/epoll/AbstractEpollStreamChannel$SpliceInTask.d.ts'
import type { FileDescriptor } from '../../../../io/netty/channel/unix/FileDescriptor.d.ts'
export class AbstractEpollStreamChannel$SpliceInChannelTask extends AbstractEpollStreamChannel$SpliceInTask implements ChannelFutureListener {
    static CLOSE: ChannelFutureListener;
    static CLOSE_ON_FAILURE: ChannelFutureListener;
    static FIRE_EXCEPTION_ON_FAILURE: ChannelFutureListener;
    constructor(null_: AbstractEpollStreamChannel$SpliceInChannelTask, arg1: AbstractEpollStreamChannel, arg2: number, arg3: ChannelPromise)
    // private ch: AbstractEpollStreamChannel;
    operationComplete(arg0: ChannelFuture): void;
    spliceIn(arg0: RecvByteBufAllocator$Handle): boolean;
    spliceIn(arg0: FileDescriptor, arg1: RecvByteBufAllocator$Handle): number;
}