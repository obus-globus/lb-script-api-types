import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { Channel$Unsafe } from '../../../../io/netty/channel/Channel$Unsafe.d.ts'
import type { ChannelFuture } from '../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelId } from '../../../../io/netty/channel/ChannelId.d.ts'
import type { ChannelMetadata } from '../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ServerChannel } from '../../../../io/netty/channel/ServerChannel.d.ts'
import type { ServerSocketChannelConfig } from '../../../../io/netty/channel/socket/ServerSocketChannelConfig.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ServerSocketChannel extends ServerChannel, Object{
    closeFuture(): ChannelFuture;
    config(): ServerSocketChannelConfig;
    id(): ChannelId;
    isActive(): boolean;
    isOpen(): boolean;
    isRegistered(): boolean;
    localAddress(): InetSocketAddress;
    metadata(): ChannelMetadata;
    parent(): Channel;
    remoteAddress(): InetSocketAddress;
    unsafe(): Channel$Unsafe;
}