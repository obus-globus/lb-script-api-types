import type { ChannelMetadata } from '../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOutboundBuffer } from '../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { AbstractEpollChannel } from '../../../../io/netty/channel/epoll/AbstractEpollChannel.d.ts'
import type { AbstractEpollChannel$AbstractEpollUnsafe } from '../../../../io/netty/channel/epoll/AbstractEpollChannel$AbstractEpollUnsafe.d.ts'
import type { EpollDomainDatagramChannelConfig } from '../../../../io/netty/channel/epoll/EpollDomainDatagramChannelConfig.d.ts'
import type { LinuxSocket } from '../../../../io/netty/channel/epoll/LinuxSocket.d.ts'
import type { DomainDatagramChannel } from '../../../../io/netty/channel/unix/DomainDatagramChannel.d.ts'
import type { DomainSocketAddress } from '../../../../io/netty/channel/unix/DomainSocketAddress.d.ts'
import type { PeerCredentials } from '../../../../io/netty/channel/unix/PeerCredentials.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EpollDomainDatagramChannel extends AbstractEpollChannel implements DomainDatagramChannel {
    constructor()
    private constructor(arg0: LinuxSocket, arg1: boolean)
    constructor(arg0: number)
    // private config: EpollDomainDatagramChannelConfig;
    readonly connected: boolean;
    // private local: DomainSocketAddress;
    // private remote: DomainSocketAddress;
    config(): EpollDomainDatagramChannelConfig;
    doBind(arg0: SocketAddress): void;
    doClose(): void;
    doConnect(arg0: SocketAddress, arg1: SocketAddress): boolean;
    doDisconnect(): void;
    doWrite(arg0: ChannelOutboundBuffer): void;
    // private doWriteMessage(arg0: Object): boolean;
    filterOutboundMessage(arg0: Object): Object;
    isActive(): boolean;
    isConnected(): boolean;
    localAddress(): DomainSocketAddress;
    localAddress0(): DomainSocketAddress;
    metadata(): ChannelMetadata;
    newUnsafe(): AbstractEpollChannel$AbstractEpollUnsafe;
    peerCredentials(): PeerCredentials;
    remoteAddress(): DomainSocketAddress;
    remoteAddress0(): DomainSocketAddress;
}