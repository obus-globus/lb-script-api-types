import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { AbstractEpollServerChannel } from '../../../../io/netty/channel/epoll/AbstractEpollServerChannel.d.ts'
import type { EpollServerSocketChannelConfig } from '../../../../io/netty/channel/epoll/EpollServerSocketChannelConfig.d.ts'
import type { LinuxSocket } from '../../../../io/netty/channel/epoll/LinuxSocket.d.ts'
import type { InternetProtocolFamily } from '../../../../io/netty/channel/socket/InternetProtocolFamily.d.ts'
import type { ServerSocketChannel } from '../../../../io/netty/channel/socket/ServerSocketChannel.d.ts'
import type { SocketProtocolFamily } from '../../../../io/netty/channel/socket/SocketProtocolFamily.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
export class EpollServerSocketChannel extends AbstractEpollServerChannel implements ServerSocketChannel {
    constructor()
    constructor(arg0: LinuxSocket)
    constructor(arg0: LinuxSocket, arg1: boolean)
    constructor(arg0: InternetProtocolFamily)
    constructor(arg0: SocketProtocolFamily)
    constructor(arg0: number)
    // private config: EpollServerSocketChannelConfig;
    // private tcpMd5SigAddresses: InetAddress[];
    config(): EpollServerSocketChannelConfig;
    doBind(arg0: SocketAddress): void;
    localAddress(): InetSocketAddress;
    newChildChannel(arg0: number, arg1: number[], arg2: number, arg3: number): Channel;
    remoteAddress(): InetSocketAddress;
    setTcpMd5Sig(arg0: JavaMap<InetAddress, number[]>): void;
    tcpMd5SigAddresses(): InetAddress[];
}