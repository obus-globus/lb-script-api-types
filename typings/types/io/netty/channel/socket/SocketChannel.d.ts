import type { Channel$Unsafe } from '../../../../io/netty/channel/Channel$Unsafe.d.ts'
import type { ChannelFuture } from '../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelId } from '../../../../io/netty/channel/ChannelId.d.ts'
import type { ChannelMetadata } from '../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { DuplexChannel } from '../../../../io/netty/channel/socket/DuplexChannel.d.ts'
import type { ServerSocketChannel } from '../../../../io/netty/channel/socket/ServerSocketChannel.d.ts'
import type { SocketChannelConfig } from '../../../../io/netty/channel/socket/SocketChannelConfig.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SocketChannel extends DuplexChannel, Object{
    closeFuture(): ChannelFuture;
    config(): SocketChannelConfig;
    id(): ChannelId;
    isActive(): boolean;
    isInputShutdown(): boolean;
    isOpen(): boolean;
    isOutputShutdown(): boolean;
    isRegistered(): boolean;
    isShutdown(): boolean;
    localAddress(): InetSocketAddress;
    metadata(): ChannelMetadata;
    parent(): ServerSocketChannel;
    remoteAddress(): InetSocketAddress;
    shutdown(): ChannelFuture;
    shutdown(arg0: ChannelPromise): ChannelFuture;
    shutdownInput(): ChannelFuture;
    shutdownInput(arg0: ChannelPromise): ChannelFuture;
    shutdownOutput(): ChannelFuture;
    shutdownOutput(arg0: ChannelPromise): ChannelFuture;
    unsafe(): Channel$Unsafe;
}