import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { RecvByteBufAllocator$Handle } from '../../../../io/netty/channel/RecvByteBufAllocator$Handle.d.ts'
import type { AbstractEpollStreamChannel } from '../../../../io/netty/channel/epoll/AbstractEpollStreamChannel.d.ts'
import type { FileDescriptor } from '../../../../io/netty/channel/unix/FileDescriptor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractEpollStreamChannel$SpliceInTask extends Object {
    constructor(null_: AbstractEpollStreamChannel, arg1: number, arg2: ChannelPromise)
    // private len: number;
    // private promise: ChannelPromise;
    spliceIn(arg0: RecvByteBufAllocator$Handle): boolean;
    spliceIn(arg0: FileDescriptor, arg1: RecvByteBufAllocator$Handle): number;
}