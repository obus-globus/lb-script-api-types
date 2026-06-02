import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { RecvByteBufAllocator$Handle } from '../../../../io/netty/channel/RecvByteBufAllocator$Handle.d.ts'
import type { AbstractEpollStreamChannel$SpliceInTask } from '../../../../io/netty/channel/epoll/AbstractEpollStreamChannel$SpliceInTask.d.ts'
import type { FileDescriptor } from '../../../../io/netty/channel/unix/FileDescriptor.d.ts'
export class AbstractEpollStreamChannel$SpliceFdTask extends AbstractEpollStreamChannel$SpliceInTask {
    constructor(null_: AbstractEpollStreamChannel$SpliceFdTask, arg1: FileDescriptor, arg2: number, arg3: number, arg4: ChannelPromise)
    // private fd: FileDescriptor;
    // private offset: number;
    // private promise: ChannelPromise;
    spliceIn(arg0: RecvByteBufAllocator$Handle): boolean;
}