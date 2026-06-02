import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandler } from '../../../../io/netty/channel/ChannelHandler.d.ts'
import type { RecvByteBufAllocator$ExtendedHandle } from '../../../../io/netty/channel/RecvByteBufAllocator$ExtendedHandle.d.ts'
import type { AbstractEpollChannel$AbstractEpollUnsafe } from '../../../../io/netty/channel/epoll/AbstractEpollChannel$AbstractEpollUnsafe.d.ts'
import type { EpollRecvByteAllocatorHandle } from '../../../../io/netty/channel/epoll/EpollRecvByteAllocatorHandle.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class AbstractEpollStreamChannel$EpollStreamUnsafe extends AbstractEpollChannel$AbstractEpollUnsafe {
    constructor(null_: AbstractEpollStreamChannel$EpollStreamUnsafe)
    epollInReady(): void;
    // private handleReadException(arg0: Map$Entry<string, ChannelHandler>[], arg1: ByteBuf, arg2: Throwable, arg3: boolean, arg4: EpollRecvByteAllocatorHandle): void;
    newEpollHandle(arg0: RecvByteBufAllocator$ExtendedHandle): EpollRecvByteAllocatorHandle;
    prepareToClose(): Executor;
}