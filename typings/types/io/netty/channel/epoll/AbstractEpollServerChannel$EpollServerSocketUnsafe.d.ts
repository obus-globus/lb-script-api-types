import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { AbstractEpollChannel$AbstractEpollUnsafe } from '../../../../io/netty/channel/epoll/AbstractEpollChannel$AbstractEpollUnsafe.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
export class AbstractEpollServerChannel$EpollServerSocketUnsafe extends AbstractEpollChannel$AbstractEpollUnsafe {
    constructor(null_: AbstractEpollServerChannel$EpollServerSocketUnsafe)
    // private acceptedAddress: number[];
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): void;
    epollInReady(): void;
}