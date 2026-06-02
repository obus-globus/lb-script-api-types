import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelOutboundBuffer } from '../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { AbstractEpollChannel$AbstractEpollUnsafe } from '../../../../io/netty/channel/epoll/AbstractEpollChannel$AbstractEpollUnsafe.d.ts'
import type { AbstractEpollStreamChannel } from '../../../../io/netty/channel/epoll/AbstractEpollStreamChannel.d.ts'
import type { EpollDomainSocketChannelConfig } from '../../../../io/netty/channel/epoll/EpollDomainSocketChannelConfig.d.ts'
import type { LinuxSocket } from '../../../../io/netty/channel/epoll/LinuxSocket.d.ts'
import type { DomainSocketAddress } from '../../../../io/netty/channel/unix/DomainSocketAddress.d.ts'
import type { DomainSocketChannel } from '../../../../io/netty/channel/unix/DomainSocketChannel.d.ts'
import type { FileDescriptor } from '../../../../io/netty/channel/unix/FileDescriptor.d.ts'
import type { PeerCredentials } from '../../../../io/netty/channel/unix/PeerCredentials.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EpollDomainSocketChannel extends AbstractEpollStreamChannel implements DomainSocketChannel {
    constructor()
    constructor(arg0: Channel, arg1: LinuxSocket)
    constructor(arg0: Channel, arg1: FileDescriptor)
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean)
    // private config: EpollDomainSocketChannelConfig;
    // private local: DomainSocketAddress;
    // private remote: DomainSocketAddress;
    config(): EpollDomainSocketChannelConfig;
    doBind(arg0: SocketAddress): void;
    doConnect(arg0: SocketAddress, arg1: SocketAddress): boolean;
    doWriteSingle(arg0: ChannelOutboundBuffer): number;
    filterOutboundMessage(arg0: Object): Object;
    localAddress(): DomainSocketAddress;
    localAddress0(): DomainSocketAddress;
    newUnsafe(): AbstractEpollChannel$AbstractEpollUnsafe;
    peerCredentials(): PeerCredentials;
    remoteAddress(): DomainSocketAddress;
    remoteAddress0(): DomainSocketAddress;
}