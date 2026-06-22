import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { Channel$Unsafe } from '../../../../io/netty/channel/Channel$Unsafe.d.ts'
import type { ChannelConfig } from '../../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelFuture } from '../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelId } from '../../../../io/netty/channel/ChannelId.d.ts'
import type { ChannelMetadata } from '../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ServerChannel } from '../../../../io/netty/channel/ServerChannel.d.ts'
import type { DomainSocketAddress } from '../../../../io/netty/channel/unix/DomainSocketAddress.d.ts'
import type { FileDescriptor } from '../../../../io/netty/channel/unix/FileDescriptor.d.ts'
import type { UnixChannel } from '../../../../io/netty/channel/unix/UnixChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ServerDomainSocketChannel extends ServerChannel, UnixChannel, Object{
    closeFuture(): ChannelFuture;
    config(): ChannelConfig;
    fd(): FileDescriptor;
    id(): ChannelId;
    isActive(): boolean;
    isOpen(): boolean;
    isRegistered(): boolean;
    localAddress(): DomainSocketAddress;
    metadata(): ChannelMetadata;
    parent(): Channel;
    remoteAddress(): DomainSocketAddress;
    unsafe(): Channel$Unsafe;
}