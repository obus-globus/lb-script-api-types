import type { ChannelMetadata } from '../../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOutboundBuffer } from '../../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { AbstractNioMessageChannel } from '../../../../../io/netty/channel/nio/AbstractNioMessageChannel.d.ts'
import type { InternetProtocolFamily } from '../../../../../io/netty/channel/socket/InternetProtocolFamily.d.ts'
import type { ServerSocketChannel } from '../../../../../io/netty/channel/socket/ServerSocketChannel.d.ts'
import type { ServerSocketChannelConfig } from '../../../../../io/netty/channel/socket/ServerSocketChannelConfig.d.ts'
import type { SocketProtocolFamily } from '../../../../../io/netty/channel/socket/SocketProtocolFamily.d.ts'
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { ServerSocketChannel } from '../../../../../java/nio/channels/ServerSocketChannel.d.ts'
import type { SelectorProvider } from '../../../../../java/nio/channels/spi/SelectorProvider.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class NioServerSocketChannel extends AbstractNioMessageChannel implements ServerSocketChannel {
    constructor()
    constructor(arg0: ServerSocketChannel)
    constructor(arg0: SelectorProvider)
    constructor(arg0: SelectorProvider, arg1: InternetProtocolFamily)
    constructor(arg0: SelectorProvider, arg1: SocketProtocolFamily)
    // private config: ServerSocketChannelConfig;
    closeOnReadError(arg0: Throwable): boolean;
    config(): ServerSocketChannelConfig;
    doBind(arg0: SocketAddress): void;
    doClose(): void;
    doConnect(arg0: SocketAddress, arg1: SocketAddress): boolean;
    doDisconnect(): void;
    doFinishConnect(): void;
    doReadMessages(arg0: Object[]): number;
    doWriteMessage(arg0: Object, arg1: ChannelOutboundBuffer): boolean;
    filterOutboundMessage(arg0: Object): Object;
    isActive(): boolean;
    javaChannel(): ServerSocketChannel;
    localAddress(): InetSocketAddress;
    localAddress0(): SocketAddress;
    metadata(): ChannelMetadata;
    remoteAddress(): InetSocketAddress;
    remoteAddress0(): SocketAddress;
}