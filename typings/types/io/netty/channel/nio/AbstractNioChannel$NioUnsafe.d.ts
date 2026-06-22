import type { Channel$Unsafe } from '../../../../io/netty/channel/Channel$Unsafe.d.ts'
import type { ChannelOutboundBuffer } from '../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { RecvByteBufAllocator$Handle } from '../../../../io/netty/channel/RecvByteBufAllocator$Handle.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { SelectableChannel } from '../../../../java/nio/channels/SelectableChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AbstractNioChannel$NioUnsafe extends Channel$Unsafe, Object{
    beginRead(): void;
    bind(arg0: SocketAddress, arg1: ChannelPromise): void;
    ch(): SelectableChannel;
    close(arg0: ChannelPromise): void;
    closeForcibly(): void;
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): void;
    deregister(arg0: ChannelPromise): void;
    disconnect(arg0: ChannelPromise): void;
    finishConnect(): void;
    flush(): void;
    forceFlush(): void;
    localAddress(): SocketAddress;
    outboundBuffer(): ChannelOutboundBuffer;
    read(): void;
    recvBufAllocHandle(): RecvByteBufAllocator$Handle;
    remoteAddress(): SocketAddress;
    voidPromise(): ChannelPromise;
    write(arg0: Object, arg1: ChannelPromise): void;
}