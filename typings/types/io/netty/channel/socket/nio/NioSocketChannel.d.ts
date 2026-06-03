import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Channel } from '../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelOutboundBuffer } from '../../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { FileRegion } from '../../../../../io/netty/channel/FileRegion.d.ts'
import type { AbstractNioByteChannel } from '../../../../../io/netty/channel/nio/AbstractNioByteChannel.d.ts'
import type { AbstractNioChannel$AbstractNioUnsafe } from '../../../../../io/netty/channel/nio/AbstractNioChannel$AbstractNioUnsafe.d.ts'
import type { InternetProtocolFamily } from '../../../../../io/netty/channel/socket/InternetProtocolFamily.d.ts'
import type { ServerSocketChannel } from '../../../../../io/netty/channel/socket/ServerSocketChannel.d.ts'
import type { SocketChannel } from '../../../../../io/netty/channel/socket/SocketChannel.d.ts'
import type { SocketChannelConfig } from '../../../../../io/netty/channel/socket/SocketChannelConfig.d.ts'
import type { SocketProtocolFamily } from '../../../../../io/netty/channel/socket/SocketProtocolFamily.d.ts'
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { SocketChannel as SocketChannel_2 } from '../../../../../java/nio/channels/SocketChannel.d.ts'
import type { SelectorProvider } from '../../../../../java/nio/channels/spi/SelectorProvider.d.ts'
export class NioSocketChannel extends AbstractNioByteChannel implements SocketChannel {
    constructor()
    constructor(arg0: Channel, arg1: SocketChannel_2)
    constructor(arg0: SocketChannel_2)
    constructor(arg0: SelectorProvider)
    constructor(arg0: SelectorProvider, arg1: InternetProtocolFamily)
    constructor(arg0: SelectorProvider, arg1: SocketProtocolFamily)
    // private config: SocketChannelConfig;
    // private adjustMaxBytesPerGatheringWrite(arg0: number, arg1: number, arg2: number): void;
    config(): SocketChannelConfig;
    doBind(arg0: SocketAddress): void;
    // private doBind0(arg0: SocketAddress): void;
    doClose(): void;
    doConnect(arg0: SocketAddress, arg1: SocketAddress): boolean;
    doDisconnect(): void;
    doFinishConnect(): void;
    doReadBytes(arg0: ByteBuf): number;
    doShutdownOutput(): void;
    doWrite(arg0: ChannelOutboundBuffer): void;
    doWriteBytes(arg0: ByteBuf): number;
    doWriteFileRegion(arg0: FileRegion): number;
    isActive(): boolean;
    isInputShutdown(): boolean;
    isInputShutdown0(): boolean;
    isOutputShutdown(): boolean;
    isShutdown(): boolean;
    javaChannel(): SocketChannel_2;
    localAddress(): InetSocketAddress;
    localAddress0(): SocketAddress;
    newUnsafe(): AbstractNioChannel$AbstractNioUnsafe;
    parent(): ServerSocketChannel;
    remoteAddress(): InetSocketAddress;
    remoteAddress0(): SocketAddress;
    shutdown(): ChannelFuture;
    shutdown(arg0: ChannelPromise): ChannelFuture;
    shutdownInput(): ChannelFuture;
    shutdownInput(arg0: ChannelPromise): ChannelFuture;
    // private shutdownInput0(): void;
    // private shutdownInput0(arg0: ChannelPromise): void;
    shutdownOutput(): ChannelFuture;
    shutdownOutput(arg0: ChannelPromise): ChannelFuture;
    // private shutdownOutputDone(arg0: ChannelFuture, arg1: ChannelPromise): void;
}