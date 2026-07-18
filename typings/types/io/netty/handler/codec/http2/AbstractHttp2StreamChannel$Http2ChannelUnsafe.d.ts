import type { Channel } from '../../../../../io/netty/channel/Channel.d.ts'
import type { Channel$Unsafe } from '../../../../../io/netty/channel/Channel$Unsafe.d.ts'
import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelOutboundBuffer } from '../../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { RecvByteBufAllocator$Handle } from '../../../../../io/netty/channel/RecvByteBufAllocator$Handle.d.ts'
import type { VoidChannelPromise } from '../../../../../io/netty/channel/VoidChannelPromise.d.ts'
import type { AbstractHttp2StreamChannel } from '../../../../../io/netty/handler/codec/http2/AbstractHttp2StreamChannel.d.ts'
import type { Http2Error } from '../../../../../io/netty/handler/codec/http2/Http2Error.d.ts'
import type { Http2Frame } from '../../../../../io/netty/handler/codec/http2/Http2Frame.d.ts'
import type { Http2StreamFrame } from '../../../../../io/netty/handler/codec/http2/Http2StreamFrame.d.ts'
import type { Http2WindowUpdateFrame } from '../../../../../io/netty/handler/codec/http2/Http2WindowUpdateFrame.d.ts'
import type { Future } from '../../../../../io/netty/util/concurrent/Future.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class AbstractHttp2StreamChannel$Http2ChannelUnsafe extends Object implements Channel$Unsafe {
    private constructor(null_: AbstractHttp2StreamChannel)
    // private closeInitiated: boolean;
    // private readEOS: boolean;
    // private receivedEndOfStream: boolean;
    // private recvHandle: RecvByteBufAllocator$Handle;
    // private sentEndOfStream: boolean;
    // private unsafeVoidPromise: VoidChannelPromise;
    // private writeDoneAndNoFlush: boolean;
    beginRead(): void;
    bind(arg0: SocketAddress, arg1: ChannelPromise): void;
    close(arg0: ChannelPromise): void;
    // private close(arg0: ChannelPromise, arg1: Http2Error): void;
    closeForcibly(): void;
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): void;
    deregister(arg0: ChannelPromise): void;
    disconnect(arg0: ChannelPromise): void;
    doBeginRead(): void;
    doRead0(arg0: Http2Frame, arg1: RecvByteBufAllocator$Handle): void;
    // private fireChannelInactiveAndDeregister(arg0: ChannelPromise, arg1: boolean): void;
    // private firstWriteComplete(arg0: Future<Object>, arg1: ChannelPromise): void;
    flush(): void;
    // private invokeLater(arg0: Channel, arg1: () => void): void;
    // private isEndOfStream(arg0: Http2Frame): boolean;
    localAddress(): SocketAddress;
    notifyReadComplete(arg0: RecvByteBufAllocator$Handle, arg1: boolean, arg2: boolean): void;
    outboundBuffer(): ChannelOutboundBuffer;
    // private pollQueuedMessage(): Object;
    readEOS(): void;
    recvBufAllocHandle(): RecvByteBufAllocator$Handle;
    register(arg0: (Object | null)[], arg1: ChannelPromise): void;
    remoteAddress(): SocketAddress;
    // private resetReadStatus(): void;
    // private safeSetSuccess(arg0: ChannelPromise): void;
    // private updateLocalWindowIfNeeded(): boolean;
    updateLocalWindowIfNeededAndFlush(): void;
    // private validateStreamFrame(arg0: Http2StreamFrame): Http2StreamFrame;
    voidPromise(): ChannelPromise;
    // private wrapStreamClosedError(arg0: Throwable): Throwable;
    write(arg0: Object, arg1: ChannelPromise): void;
    // private writeComplete(arg0: Future<Object>, arg1: ChannelPromise): void;
    // private writeHttp2StreamFrame(arg0: Http2StreamFrame, arg1: ChannelPromise): void;
    // private writeWindowUpdateFrame(arg0: Http2WindowUpdateFrame): ChannelFuture;
}