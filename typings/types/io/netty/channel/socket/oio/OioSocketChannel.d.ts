import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Channel } from '../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { OioByteStreamChannel } from '../../../../../io/netty/channel/oio/OioByteStreamChannel.d.ts'
import type { ServerSocketChannel } from '../../../../../io/netty/channel/socket/ServerSocketChannel.d.ts'
import type { SocketChannel } from '../../../../../io/netty/channel/socket/SocketChannel.d.ts'
import type { OioSocketChannelConfig } from '../../../../../io/netty/channel/socket/oio/OioSocketChannelConfig.d.ts'
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
import type { Socket } from '../../../../../java/net/Socket.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
export class OioSocketChannel extends OioByteStreamChannel implements SocketChannel {
    constructor()
    constructor(arg0: Channel, arg1: Socket)
    constructor(arg0: Socket)
    // private config: OioSocketChannelConfig;
    // private socket: Socket;
    checkInputShutdown(): boolean;
    clearReadPending0(): void;
    config(): OioSocketChannelConfig;
    doBind(arg0: SocketAddress): void;
    doClose(): void;
    doConnect(arg0: SocketAddress, arg1: SocketAddress): void;
    doDisconnect(): void;
    doReadBytes(arg0: ByteBuf): number;
    doShutdownOutput(): void;
    isActive(): boolean;
    isInputShutdown(): boolean;
    isOpen(): boolean;
    isOutputShutdown(): boolean;
    isShutdown(): boolean;
    localAddress(): InetSocketAddress;
    localAddress0(): SocketAddress;
    parent(): ServerSocketChannel;
    remoteAddress(): InetSocketAddress;
    remoteAddress0(): SocketAddress;
    setReadPending(arg0: boolean): void;
    shutdown(): ChannelFuture;
    shutdown(arg0: ChannelPromise): ChannelFuture;
    shutdownInput(): ChannelFuture;
    shutdownInput(arg0: ChannelPromise): ChannelFuture;
    // private shutdownInput0(arg0: ChannelPromise): void;
    shutdownOutput(): ChannelFuture;
    shutdownOutput(arg0: ChannelPromise): ChannelFuture;
    // private shutdownOutput0(): void;
    // private shutdownOutput0(arg0: ChannelPromise): void;
    // private shutdownOutputDone(arg0: ChannelFuture, arg1: ChannelPromise): void;
}