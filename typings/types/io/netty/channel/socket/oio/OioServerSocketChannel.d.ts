import type { ChannelMetadata } from '../../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOutboundBuffer } from '../../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { AbstractOioMessageChannel } from '../../../../../io/netty/channel/oio/AbstractOioMessageChannel.d.ts'
import type { ServerSocketChannel } from '../../../../../io/netty/channel/socket/ServerSocketChannel.d.ts'
import type { OioServerSocketChannelConfig } from '../../../../../io/netty/channel/socket/oio/OioServerSocketChannelConfig.d.ts'
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
import type { ServerSocket } from '../../../../../java/net/ServerSocket.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class OioServerSocketChannel extends AbstractOioMessageChannel implements ServerSocketChannel {
    constructor()
    constructor(arg0: ServerSocket)
    // private config: OioServerSocketChannelConfig;
    // private socket: ServerSocket;
    clearReadPending0(): void;
    config(): OioServerSocketChannelConfig;
    doBind(arg0: SocketAddress): void;
    doClose(): void;
    doConnect(arg0: SocketAddress, arg1: SocketAddress): void;
    doDisconnect(): void;
    doReadMessages(arg0: Object[]): number;
    doWrite(arg0: ChannelOutboundBuffer): void;
    filterOutboundMessage(arg0: Object): Object;
    isActive(): boolean;
    isOpen(): boolean;
    localAddress(): InetSocketAddress;
    localAddress0(): SocketAddress;
    metadata(): ChannelMetadata;
    remoteAddress(): InetSocketAddress;
    remoteAddress0(): SocketAddress;
    setReadPending(arg0: boolean): void;
}