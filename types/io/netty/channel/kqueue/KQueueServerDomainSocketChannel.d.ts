import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { AbstractKQueueServerChannel } from '../../../../io/netty/channel/kqueue/AbstractKQueueServerChannel.d.ts'
import type { BsdSocket } from '../../../../io/netty/channel/kqueue/BsdSocket.d.ts'
import type { KQueueServerChannelConfig } from '../../../../io/netty/channel/kqueue/KQueueServerChannelConfig.d.ts'
import type { DomainSocketAddress } from '../../../../io/netty/channel/unix/DomainSocketAddress.d.ts'
import type { ServerDomainSocketChannel } from '../../../../io/netty/channel/unix/ServerDomainSocketChannel.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
export class KQueueServerDomainSocketChannel extends AbstractKQueueServerChannel implements ServerDomainSocketChannel {
    constructor()
    constructor(arg0: BsdSocket, arg1: boolean)
    constructor(arg0: number)
    // private config: KQueueServerChannelConfig;
    // private local: DomainSocketAddress;
    config(): KQueueServerChannelConfig;
    doBind(arg0: SocketAddress): void;
    doClose(): void;
    localAddress(): DomainSocketAddress;
    localAddress0(): DomainSocketAddress;
    newChildChannel(arg0: number, arg1: number[], arg2: number, arg3: number): Channel;
    remoteAddress(): DomainSocketAddress;
}