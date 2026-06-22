import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { Channel$Unsafe } from '../../../../io/netty/channel/Channel$Unsafe.d.ts'
import type { ChannelFuture } from '../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelId } from '../../../../io/netty/channel/ChannelId.d.ts'
import type { ChannelMetadata } from '../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { DuplexChannel } from '../../../../io/netty/channel/socket/DuplexChannel.d.ts'
import type { DomainSocketAddress } from '../../../../io/netty/channel/unix/DomainSocketAddress.d.ts'
import type { DomainSocketChannelConfig } from '../../../../io/netty/channel/unix/DomainSocketChannelConfig.d.ts'
import type { FileDescriptor } from '../../../../io/netty/channel/unix/FileDescriptor.d.ts'
import type { UnixChannel } from '../../../../io/netty/channel/unix/UnixChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DomainSocketChannel extends DuplexChannel, UnixChannel, Object{
    closeFuture(): ChannelFuture;
    config(): DomainSocketChannelConfig;
    fd(): FileDescriptor;
    id(): ChannelId;
    isActive(): boolean;
    isInputShutdown(): boolean;
    isOpen(): boolean;
    isOutputShutdown(): boolean;
    isRegistered(): boolean;
    isShutdown(): boolean;
    localAddress(): DomainSocketAddress;
    metadata(): ChannelMetadata;
    parent(): Channel;
    remoteAddress(): DomainSocketAddress;
    shutdown(): ChannelFuture;
    shutdown(arg0: ChannelPromise): ChannelFuture;
    shutdownInput(): ChannelFuture;
    shutdownInput(arg0: ChannelPromise): ChannelFuture;
    shutdownOutput(): ChannelFuture;
    shutdownOutput(arg0: ChannelPromise): ChannelFuture;
    unsafe(): Channel$Unsafe;
}