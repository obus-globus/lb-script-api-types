import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { AbstractEpollChannel$AbstractEpollUnsafe } from '../../../../io/netty/channel/epoll/AbstractEpollChannel$AbstractEpollUnsafe.d.ts'
import type { AbstractEpollStreamChannel } from '../../../../io/netty/channel/epoll/AbstractEpollStreamChannel.d.ts'
import type { EpollSocketChannelConfig } from '../../../../io/netty/channel/epoll/EpollSocketChannelConfig.d.ts'
import type { EpollTcpInfo } from '../../../../io/netty/channel/epoll/EpollTcpInfo.d.ts'
import type { LinuxSocket } from '../../../../io/netty/channel/epoll/LinuxSocket.d.ts'
import type { InternetProtocolFamily } from '../../../../io/netty/channel/socket/InternetProtocolFamily.d.ts'
import type { ServerSocketChannel } from '../../../../io/netty/channel/socket/ServerSocketChannel.d.ts'
import type { SocketChannel } from '../../../../io/netty/channel/socket/SocketChannel.d.ts'
import type { SocketProtocolFamily } from '../../../../io/netty/channel/socket/SocketProtocolFamily.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
export class EpollSocketChannel extends AbstractEpollStreamChannel implements SocketChannel {
    constructor()
    constructor(arg0: Channel, arg1: LinuxSocket, arg2: InetSocketAddress)
    constructor(arg0: LinuxSocket, arg1: boolean)
    constructor(arg0: InternetProtocolFamily)
    constructor(arg0: SocketProtocolFamily)
    constructor(arg0: number)
    // private config: EpollSocketChannelConfig;
    // private tcpMd5SigAddresses: InetAddress[];
    config(): EpollSocketChannelConfig;
    doConnect0(arg0: SocketAddress): boolean;
    localAddress(): InetSocketAddress;
    newUnsafe(): AbstractEpollChannel$AbstractEpollUnsafe;
    parent(): ServerSocketChannel;
    remoteAddress(): InetSocketAddress;
    setTcpMd5Sig(arg0: Map<InetAddress, number[]>): void;
    tcpInfo(): EpollTcpInfo;
    tcpInfo(arg0: EpollTcpInfo): EpollTcpInfo;
}