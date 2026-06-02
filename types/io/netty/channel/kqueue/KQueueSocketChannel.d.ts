import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { AbstractKQueueChannel$AbstractKQueueUnsafe } from '../../../../io/netty/channel/kqueue/AbstractKQueueChannel$AbstractKQueueUnsafe.d.ts'
import type { AbstractKQueueStreamChannel } from '../../../../io/netty/channel/kqueue/AbstractKQueueStreamChannel.d.ts'
import type { BsdSocket } from '../../../../io/netty/channel/kqueue/BsdSocket.d.ts'
import type { KQueueSocketChannelConfig } from '../../../../io/netty/channel/kqueue/KQueueSocketChannelConfig.d.ts'
import type { InternetProtocolFamily } from '../../../../io/netty/channel/socket/InternetProtocolFamily.d.ts'
import type { ServerSocketChannel } from '../../../../io/netty/channel/socket/ServerSocketChannel.d.ts'
import type { SocketChannel } from '../../../../io/netty/channel/socket/SocketChannel.d.ts'
import type { SocketProtocolFamily } from '../../../../io/netty/channel/socket/SocketProtocolFamily.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
export class KQueueSocketChannel extends AbstractKQueueStreamChannel implements SocketChannel {
    constructor()
    constructor(arg0: Channel, arg1: BsdSocket, arg2: InetSocketAddress)
    constructor(arg0: InternetProtocolFamily)
    constructor(arg0: SocketProtocolFamily)
    constructor(arg0: number)
    // private config: KQueueSocketChannelConfig;
    config(): KQueueSocketChannelConfig;
    doConnect0(arg0: SocketAddress, arg1: SocketAddress): boolean;
    localAddress(): InetSocketAddress;
    newUnsafe(): AbstractKQueueChannel$AbstractKQueueUnsafe;
    parent(): ServerSocketChannel;
    remoteAddress(): InetSocketAddress;
}