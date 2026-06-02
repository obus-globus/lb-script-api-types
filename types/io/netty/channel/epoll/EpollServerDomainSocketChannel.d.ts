import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { AbstractEpollServerChannel } from '../../../../io/netty/channel/epoll/AbstractEpollServerChannel.d.ts'
import type { EpollServerChannelConfig } from '../../../../io/netty/channel/epoll/EpollServerChannelConfig.d.ts'
import type { LinuxSocket } from '../../../../io/netty/channel/epoll/LinuxSocket.d.ts'
import type { DomainSocketAddress } from '../../../../io/netty/channel/unix/DomainSocketAddress.d.ts'
import type { ServerDomainSocketChannel } from '../../../../io/netty/channel/unix/ServerDomainSocketChannel.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
export class EpollServerDomainSocketChannel extends AbstractEpollServerChannel implements ServerDomainSocketChannel {
    constructor()
    constructor(arg0: LinuxSocket)
    constructor(arg0: LinuxSocket, arg1: boolean)
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean)
    // private config: EpollServerChannelConfig;
    // private local: DomainSocketAddress;
    config(): EpollServerChannelConfig;
    doBind(arg0: SocketAddress): void;
    doClose(): void;
    localAddress(): DomainSocketAddress;
    localAddress0(): DomainSocketAddress;
    newChildChannel(arg0: number, arg1: number[], arg2: number, arg3: number): Channel;
    remoteAddress(): DomainSocketAddress;
}