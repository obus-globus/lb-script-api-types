import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { AbstractKQueueServerChannel } from '../../../../io/netty/channel/kqueue/AbstractKQueueServerChannel.d.ts'
import type { BsdSocket } from '../../../../io/netty/channel/kqueue/BsdSocket.d.ts'
import type { KQueueServerSocketChannelConfig } from '../../../../io/netty/channel/kqueue/KQueueServerSocketChannelConfig.d.ts'
import type { ServerSocketChannel } from '../../../../io/netty/channel/socket/ServerSocketChannel.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
export class KQueueServerSocketChannel extends AbstractKQueueServerChannel implements ServerSocketChannel {
    constructor()
    constructor(arg0: BsdSocket)
    constructor(arg0: BsdSocket, arg1: boolean)
    constructor(arg0: number)
    // private config: KQueueServerSocketChannelConfig;
    config(): KQueueServerSocketChannelConfig;
    doBind(arg0: SocketAddress): void;
    localAddress(): InetSocketAddress;
    newChildChannel(arg0: number, arg1: number[], arg2: number, arg3: number): Channel;
    remoteAddress(): InetSocketAddress;
}