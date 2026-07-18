import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { Channel } from '../../../../../io/netty/channel/Channel.d.ts'
import type { Channel$Unsafe } from '../../../../../io/netty/channel/Channel$Unsafe.d.ts'
import type { ChannelConfig } from '../../../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelId } from '../../../../../io/netty/channel/ChannelId.d.ts'
import type { ChannelMetadata } from '../../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOption } from '../../../../../io/netty/channel/ChannelOption.d.ts'
import type { ChannelProgressivePromise } from '../../../../../io/netty/channel/ChannelProgressivePromise.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface Http2StreamChannel extends Channel, Object{
    alloc(): ByteBufAllocator;
    bind(arg0: SocketAddress): ChannelFuture;
    bind(arg0: SocketAddress, arg1: ChannelPromise): ChannelFuture;
    bytesBeforeUnwritable(): number;
    bytesBeforeWritable(): number;
    close(): ChannelFuture;
    close(arg0: ChannelPromise): ChannelFuture;
    closeFuture(): ChannelFuture;
    config(): ChannelConfig;
    connect(arg0: SocketAddress): ChannelFuture;
    connect(arg0: SocketAddress, arg1: ChannelPromise): ChannelFuture;
    connect(arg0: SocketAddress, arg1: SocketAddress): ChannelFuture;
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): ChannelFuture;
    deregister(): ChannelFuture;
    deregister(arg0: ChannelPromise): ChannelFuture;
    disconnect(): ChannelFuture;
    disconnect(arg0: ChannelPromise): ChannelFuture;
    flush(): Channel;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    id(): ChannelId;
    isActive(): boolean;
    isOpen(): boolean;
    isRegistered(): boolean;
    isWritable(): boolean;
    localAddress(): SocketAddress;
    metadata(): ChannelMetadata;
    newFailedFuture(arg0: Throwable): ChannelFuture;
    newProgressivePromise(): ChannelProgressivePromise;
    newPromise(): ChannelPromise;
    newSucceededFuture(): ChannelFuture;
    parent(): Channel;
    read(): Channel;
    remoteAddress(): SocketAddress;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
    stream(): Http2FrameStream;
    unsafe(): Channel$Unsafe;
    voidPromise(): ChannelPromise;
    write(arg0: Object): ChannelFuture;
    write(arg0: Object, arg1: ChannelPromise): ChannelFuture;
    writeAndFlush(arg0: Object): ChannelFuture;
    writeAndFlush(arg0: Object, arg1: ChannelPromise): ChannelFuture;
}