import type { AbstractKQueueChannel$AbstractKQueueUnsafe } from '../../../../io/netty/channel/kqueue/AbstractKQueueChannel$AbstractKQueueUnsafe.d.ts'
import type { AbstractKQueueDatagramChannel } from '../../../../io/netty/channel/kqueue/AbstractKQueueDatagramChannel.d.ts'
import type { KQueueDomainDatagramChannelConfig } from '../../../../io/netty/channel/kqueue/KQueueDomainDatagramChannelConfig.d.ts'
import type { DomainDatagramChannel } from '../../../../io/netty/channel/unix/DomainDatagramChannel.d.ts'
import type { DomainSocketAddress } from '../../../../io/netty/channel/unix/DomainSocketAddress.d.ts'
import type { PeerCredentials } from '../../../../io/netty/channel/unix/PeerCredentials.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KQueueDomainDatagramChannel extends AbstractKQueueDatagramChannel implements DomainDatagramChannel {
    constructor()
    constructor(arg0: number)
    // private config: KQueueDomainDatagramChannelConfig;
    readonly connected: boolean;
    // private local: DomainSocketAddress;
    // private remote: DomainSocketAddress;
    config(): KQueueDomainDatagramChannelConfig;
    doBind(arg0: SocketAddress): void;
    doClose(): void;
    doConnect(arg0: SocketAddress, arg1: SocketAddress): boolean;
    doDisconnect(): void;
    doWriteMessage(arg0: Object): boolean;
    filterOutboundMessage(arg0: Object): Object;
    isActive(): boolean;
    isConnected(): boolean;
    localAddress(): DomainSocketAddress;
    localAddress0(): DomainSocketAddress;
    newUnsafe(): AbstractKQueueChannel$AbstractKQueueUnsafe;
    peerCredentials(): PeerCredentials;
    remoteAddress(): DomainSocketAddress;
    remoteAddress0(): DomainSocketAddress;
}