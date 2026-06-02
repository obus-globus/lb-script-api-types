import type { ChannelConfig } from '../../../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelMetadata } from '../../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOutboundBuffer } from '../../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { ServerChannel } from '../../../../../io/netty/channel/ServerChannel.d.ts'
import type { AbstractNioMessageChannel } from '../../../../../io/netty/channel/nio/AbstractNioMessageChannel.d.ts'
import type { NioServerDomainSocketChannel$NioDomainServerSocketChannelConfig } from '../../../../../io/netty/channel/socket/nio/NioServerDomainSocketChannel$NioDomainServerSocketChannelConfig.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { ServerSocketChannel } from '../../../../../java/nio/channels/ServerSocketChannel.d.ts'
import type { SelectorProvider } from '../../../../../java/nio/channels/spi/SelectorProvider.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class NioServerDomainSocketChannel extends AbstractNioMessageChannel implements ServerChannel {
    constructor()
    constructor(arg0: ServerSocketChannel)
    constructor(arg0: SelectorProvider)
    // private bound: boolean;
    // private config: NioServerDomainSocketChannel$NioDomainServerSocketChannelConfig;
    closeOnReadError(arg0: Throwable): boolean;
    config(): ChannelConfig;
    doBind(arg0: SocketAddress): void;
    doClose(): void;
    doConnect(arg0: SocketAddress, arg1: SocketAddress): boolean;
    doDisconnect(): void;
    doFinishConnect(): void;
    doReadMessages(arg0: Object[]): number;
    doWriteMessage(arg0: Object, arg1: ChannelOutboundBuffer): boolean;
    isActive(): boolean;
    javaChannel(): ServerSocketChannel;
    localAddress0(): SocketAddress;
    metadata(): ChannelMetadata;
    remoteAddress0(): SocketAddress;
}