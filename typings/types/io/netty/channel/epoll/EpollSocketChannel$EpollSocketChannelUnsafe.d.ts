import type { AbstractEpollStreamChannel$EpollStreamUnsafe } from '../../../../io/netty/channel/epoll/AbstractEpollStreamChannel$EpollStreamUnsafe.d.ts'
import type { EpollSocketChannel } from '../../../../io/netty/channel/epoll/EpollSocketChannel.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
export class EpollSocketChannel$EpollSocketChannelUnsafe extends AbstractEpollStreamChannel$EpollStreamUnsafe {
    constructor(null_: EpollSocketChannel, arg1: any)
    prepareToClose(): Executor;
}