import type { EpollSocketChannel$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { AbstractEpollStreamChannel$EpollStreamUnsafe } from '../../../../io/netty/channel/epoll/AbstractEpollStreamChannel$EpollStreamUnsafe.d.ts'
import type { EpollSocketChannel } from '../../../../io/netty/channel/epoll/EpollSocketChannel.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
export class EpollSocketChannel$EpollSocketChannelUnsafe extends AbstractEpollStreamChannel$EpollStreamUnsafe {
    private constructor(null_: EpollSocketChannel)
    constructor(null_: EpollSocketChannel, arg1: EpollSocketChannel$1)
    prepareToClose(): Executor;
}