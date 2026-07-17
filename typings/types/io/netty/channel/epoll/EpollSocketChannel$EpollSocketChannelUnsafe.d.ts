import type { AbstractEpollStreamChannel$EpollStreamUnsafe } from '../../../../io/netty/channel/epoll/AbstractEpollStreamChannel$EpollStreamUnsafe.d.ts'
import type { EpollSocketChannel } from '../../../../io/netty/channel/epoll/EpollSocketChannel.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
export class EpollSocketChannel$EpollSocketChannelUnsafe extends AbstractEpollStreamChannel$EpollStreamUnsafe {
    private constructor(null_: EpollSocketChannel)
    prepareToClose(): Executor;
}