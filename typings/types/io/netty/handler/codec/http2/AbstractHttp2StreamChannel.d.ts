import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { Channel } from '../../../../../io/netty/channel/Channel.d.ts'
import type { Channel$Unsafe } from '../../../../../io/netty/channel/Channel$Unsafe.d.ts'
import type { ChannelConfig } from '../../../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelFutureListener } from '../../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { ChannelHandler } from '../../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelId } from '../../../../../io/netty/channel/ChannelId.d.ts'
import type { ChannelMetadata } from '../../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelProgressivePromise } from '../../../../../io/netty/channel/ChannelProgressivePromise.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { AbstractHttp2StreamChannel$Http2ChannelUnsafe } from '../../../../../io/netty/handler/codec/http2/AbstractHttp2StreamChannel$Http2ChannelUnsafe.d.ts'
import type { AbstractHttp2StreamChannel$Http2StreamChannelConfig } from '../../../../../io/netty/handler/codec/http2/AbstractHttp2StreamChannel$Http2StreamChannelConfig.d.ts'
import type { AbstractHttp2StreamChannel$ReadStatus } from '../../../../../io/netty/handler/codec/http2/AbstractHttp2StreamChannel$ReadStatus.d.ts'
import type { Http2Error } from '../../../../../io/netty/handler/codec/http2/Http2Error.d.ts'
import type { Http2Frame } from '../../../../../io/netty/handler/codec/http2/Http2Frame.d.ts'
import type { Http2FrameCodec$DefaultHttp2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameCodec$DefaultHttp2FrameStream.d.ts'
import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { Http2StreamChannel } from '../../../../../io/netty/handler/codec/http2/Http2StreamChannel.d.ts'
import type { Http2StreamChannelId } from '../../../../../io/netty/handler/codec/http2/Http2StreamChannelId.d.ts'
import type { DefaultAttributeMap } from '../../../../../io/netty/util/DefaultAttributeMap.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export abstract class AbstractHttp2StreamChannel extends DefaultAttributeMap implements Http2StreamChannel {
    constructor(arg0: Http2FrameCodec$DefaultHttp2FrameStream, arg1: number, arg2: ChannelHandler)
    // private channelId: Http2StreamChannelId;
    // private closePromise: ChannelPromise;
    // private config: AbstractHttp2StreamChannel$Http2StreamChannelConfig;
    // private fireChannelWritabilityChangedTask: () => void;
    // private firstFrameWritten: boolean;
    // private flowControlledBytes: number;
    // private inboundBuffer: Object[];
    // private outboundClosed: boolean;
    // private pipeline: Map$Entry<string, ChannelHandler>[];
    // private readCompletePending: boolean;
    // private readStatus: AbstractHttp2StreamChannel$ReadStatus;
    readonly registered: boolean;
    // private stream: Http2FrameCodec$DefaultHttp2FrameStream;
    // private totalPendingSize: number;
    // private unsafe: AbstractHttp2StreamChannel$Http2ChannelUnsafe;
    // private unwritable: number;
    // private windowUpdateFrameWriteListener: ChannelFutureListener;
    addChannelToReadCompletePendingQueue(): void;
    alloc(): ByteBufAllocator;
    bind(arg0: SocketAddress): ChannelFuture;
    bind(arg0: SocketAddress, arg1: ChannelPromise): ChannelFuture;
    bytesBeforeUnwritable(): number;
    bytesBeforeWritable(): number;
    close(): ChannelFuture;
    close(arg0: ChannelPromise): ChannelFuture;
    closeFuture(): ChannelFuture;
    closeOutbound(): void;
    closeWithError(arg0: Http2Error): void;
    compareTo(arg0: Channel): number;
    config(): ChannelConfig;
    connect(arg0: SocketAddress): ChannelFuture;
    connect(arg0: SocketAddress, arg1: ChannelPromise): ChannelFuture;
    connect(arg0: SocketAddress, arg1: SocketAddress): ChannelFuture;
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): ChannelFuture;
    // private decrementPendingOutboundBytes(arg0: number, arg1: boolean): void;
    deregister(): ChannelFuture;
    deregister(arg0: ChannelPromise): ChannelFuture;
    disconnect(): ChannelFuture;
    disconnect(arg0: ChannelPromise): ChannelFuture;
    equals(arg0: Object | null): boolean;
    eventLoop(): (Object | null)[];
    // private fireChannelWritabilityChanged(arg0: boolean): void;
    fireChildRead(arg0: Http2Frame): void;
    fireChildReadComplete(): void;
    flush(): Channel;
    flush0(arg0: ChannelHandlerContext): void;
    hashCode(): number;
    id(): ChannelId;
    // private incrementPendingOutboundBytes(arg0: number, arg1: boolean): void;
    isActive(): boolean;
    isOpen(): boolean;
    isParentReadInProgress(): boolean;
    isRegistered(): boolean;
    isWritable(): boolean;
    localAddress(): SocketAddress;
    // private maybeAddChannelToReadCompletePendingQueue(): void;
    metadata(): ChannelMetadata;
    newFailedFuture(arg0: Throwable): ChannelFuture;
    newProgressivePromise(): ChannelProgressivePromise;
    newPromise(): ChannelPromise;
    newSucceededFuture(): ChannelFuture;
    parent(): Channel;
    parentContext(): ChannelHandlerContext;
    pipeline(): Map$Entry<string, ChannelHandler>[];
    read(): Channel;
    remoteAddress(): SocketAddress;
    // private setUnwritable(arg0: boolean): void;
    // private setWritable(arg0: boolean): void;
    stream(): Http2FrameStream;
    streamClosed(): void;
    toString(): string;
    trySetWritable(): void;
    unsafe(): Channel$Unsafe;
    voidPromise(): ChannelPromise;
    write(arg0: Object): ChannelFuture;
    write(arg0: Object, arg1: ChannelPromise): ChannelFuture;
    write0(arg0: ChannelHandlerContext, arg1: Object): ChannelFuture;
    writeAndFlush(arg0: Object): ChannelFuture;
    writeAndFlush(arg0: Object, arg1: ChannelPromise): ChannelFuture;
}