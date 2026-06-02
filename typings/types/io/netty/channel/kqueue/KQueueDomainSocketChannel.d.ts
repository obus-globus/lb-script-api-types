import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelOutboundBuffer } from '../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { AbstractKQueueChannel$AbstractKQueueUnsafe } from '../../../../io/netty/channel/kqueue/AbstractKQueueChannel$AbstractKQueueUnsafe.d.ts'
import type { AbstractKQueueStreamChannel } from '../../../../io/netty/channel/kqueue/AbstractKQueueStreamChannel.d.ts'
import type { BsdSocket } from '../../../../io/netty/channel/kqueue/BsdSocket.d.ts'
import type { KQueueDomainSocketChannelConfig } from '../../../../io/netty/channel/kqueue/KQueueDomainSocketChannelConfig.d.ts'
import type { DomainSocketAddress } from '../../../../io/netty/channel/unix/DomainSocketAddress.d.ts'
import type { DomainSocketChannel } from '../../../../io/netty/channel/unix/DomainSocketChannel.d.ts'
import type { PeerCredentials } from '../../../../io/netty/channel/unix/PeerCredentials.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KQueueDomainSocketChannel extends AbstractKQueueStreamChannel implements DomainSocketChannel {
    constructor()
    constructor(arg0: Channel, arg1: BsdSocket)
    constructor(arg0: number)
    // private config: KQueueDomainSocketChannelConfig;
    // private local: DomainSocketAddress;
    // private remote: DomainSocketAddress;
    config(): KQueueDomainSocketChannelConfig;
    doBind(arg0: SocketAddress): void;
    doConnect(arg0: SocketAddress, arg1: SocketAddress): boolean;
    doWriteSingle(arg0: ChannelOutboundBuffer): number;
    filterOutboundMessage(arg0: Object): Object;
    localAddress(): DomainSocketAddress;
    localAddress0(): DomainSocketAddress;
    newUnsafe(): AbstractKQueueChannel$AbstractKQueueUnsafe;
    peerCredentials(): PeerCredentials;
    remoteAddress(): DomainSocketAddress;
    remoteAddress0(): DomainSocketAddress;
}