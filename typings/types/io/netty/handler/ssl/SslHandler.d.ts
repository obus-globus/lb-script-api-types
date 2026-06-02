import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOutboundHandler } from '../../../../io/netty/channel/ChannelOutboundHandler.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { ByteToMessageDecoder } from '../../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { ResumptionController } from '../../../../io/netty/handler/ssl/ResumptionController.d.ts'
import type { SslHandler$LazyChannelPromise } from '../../../../io/netty/handler/ssl/SslHandler$LazyChannelPromise.d.ts'
import type { SslHandler$SslEngineType } from '../../../../io/netty/handler/ssl/SslHandler$SslEngineType.d.ts'
import type { SslHandler$SslTasksRunner } from '../../../../io/netty/handler/ssl/SslHandler$SslTasksRunner.d.ts'
import type { SslHandlerCoalescingBufferQueue } from '../../../../io/netty/handler/ssl/SslHandlerCoalescingBufferQueue.d.ts'
import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { Promise } from '../../../../io/netty/util/concurrent/Promise.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
import type { SSLEngineResult } from '../../../../javax/net/ssl/SSLEngineResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class SslHandler extends ByteToMessageDecoder implements ChannelOutboundHandler {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static isEncrypted(paramarg0: ByteBuf): boolean;
    static isEncrypted(paramarg0: ByteBuf, paramarg1: boolean): boolean;
    constructor(arg0: SSLEngine)
    constructor(arg0: SSLEngine, arg1: Executor)
    constructor(arg0: SSLEngine, arg1: boolean)
    constructor(arg0: SSLEngine, arg1: boolean, arg2: Executor)
    constructor(arg0: SSLEngine, arg1: boolean, arg2: Executor, arg3: ResumptionController)
    readonly closeNotifyFlushTimeoutMillis: number;
    readonly closeNotifyReadTimeoutMillis: number;
    // private ctx: ChannelHandlerContext;
    // private delegatedTaskExecutor: Executor;
    // private engine: SSLEngine;
    // private engineType: SslHandler$SslEngineType;
    // private handshakePromise: Promise<Channel>;
    readonly handshakeTimeoutMillis: number;
    // private jdkCompatibilityMode: boolean;
    // private packetLength: number;
    // private pendingUnencryptedWrites: SslHandlerCoalescingBufferQueue;
    // private resumptionController: ResumptionController;
    // private singleBuffer: ByteBuffer[];
    // private sslClosePromise: SslHandler$LazyChannelPromise;
    // private sslTaskRunner: SslHandler$SslTasksRunner;
    // private sslTaskRunnerForUnwrap: SslHandler$SslTasksRunner;
    // private startTls: boolean;
    // private state: number;
    // private unwrapInputCopy: ByteBuffer;
    wrapDataSize: number;
    // private allocate(arg0: ChannelHandlerContext, arg1: number): ByteBuf;
    // private allocateOutNetBuf(arg0: ChannelHandlerContext, arg1: number, arg2: number): ByteBuf;
    applicationProtocol(): string;
    // private applyHandshakeTimeout(): void;
    bind(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: ChannelPromise): void;
    channelActive(arg0: ChannelHandlerContext): void;
    channelInactive(arg0: ChannelHandlerContext): void;
    channelReadComplete(arg0: ChannelHandlerContext): void;
    // private channelReadComplete0(arg0: ChannelHandlerContext): void;
    // private clearState(arg0: number): void;
    close(): ChannelFuture;
    close(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    close(arg0: ChannelPromise): ChannelFuture;
    closeOutbound(): ChannelFuture;
    closeOutbound(arg0: ChannelPromise): ChannelFuture;
    // private closeOutbound0(arg0: ChannelPromise): void;
    // private closeOutboundAndChannel(arg0: ChannelHandlerContext, arg1: ChannelPromise, arg2: boolean): void;
    connect(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: SocketAddress, arg3: ChannelPromise): void;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    // private decodeJdkCompatible(arg0: ChannelHandlerContext, arg1: ByteBuf): void;
    // private decodeNonJdkCompatible(arg0: ChannelHandlerContext, arg1: ByteBuf): void;
    deregister(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    disconnect(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    engine(): SSLEngine;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    // private executeChannelRead(arg0: ChannelHandlerContext, arg1: ByteBuf): void;
    // private executeDelegatedTask(arg0: SslHandler$SslTasksRunner): void;
    // private executeDelegatedTask(arg0: boolean): void;
    // private executeNotifyClosePromise(arg0: ChannelHandlerContext): void;
    flush(arg0: ChannelHandlerContext): void;
    // private flush(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    // private flushIfNeeded(arg0: ChannelHandlerContext): void;
    // private forceFlush(arg0: ChannelHandlerContext): void;
    getCloseNotifyFlushTimeoutMillis(): number;
    getCloseNotifyReadTimeoutMillis(): number;
    getCloseNotifyTimeoutMillis(): number;
    getHandshakeTimeoutMillis(): number;
    // private getTaskRunner(arg0: boolean): SslHandler$SslTasksRunner;
    // private handleUnwrapThrowable(arg0: ChannelHandlerContext, arg1: Throwable): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved0(arg0: ChannelHandlerContext): void;
    // private handshake(arg0: boolean): void;
    handshakeFuture(): Future<Channel>;
    // private ignoreException(arg0: Throwable): boolean;
    // private isStateSet(arg0: number): boolean;
    // private notifyClosePromise(arg0: Throwable): void;
    read(arg0: ChannelHandlerContext): void;
    // private readIfNeeded(arg0: ChannelHandlerContext): void;
    // private releaseAndFailAll(arg0: ChannelHandlerContext, arg1: Throwable): void;
    renegotiate(): Future<Channel>;
    renegotiate(arg0: Promise<Channel>): Future<Channel>;
    // private renegotiateOnEventLoop(arg0: Promise<Channel>): void;
    // private runDelegatedTasks(arg0: boolean): boolean;
    // private safeClose(arg0: ChannelHandlerContext, arg1: ChannelFuture, arg2: ChannelPromise): void;
    setCloseNotifyFlushTimeout(arg0: number, arg1: TimeUnit): void;
    setCloseNotifyFlushTimeoutMillis(arg0: number): void;
    setCloseNotifyReadTimeout(arg0: number, arg1: TimeUnit): void;
    setCloseNotifyReadTimeoutMillis(arg0: number): void;
    setCloseNotifyTimeout(arg0: number, arg1: TimeUnit): void;
    setCloseNotifyTimeoutMillis(arg0: number): void;
    // private setHandshakeFailure(arg0: ChannelHandlerContext, arg1: Throwable): void;
    // private setHandshakeFailure(arg0: ChannelHandlerContext, arg1: Throwable, arg2: boolean, arg3: boolean, arg4: boolean): void;
    // private setHandshakeFailureTransportFailure(arg0: ChannelHandlerContext, arg1: Throwable): void;
    // private setHandshakeSuccess(): boolean;
    // private setHandshakeSuccessUnwrapMarkReentry(): boolean;
    setHandshakeTimeout(arg0: number, arg1: TimeUnit): void;
    setHandshakeTimeoutMillis(arg0: number): void;
    // private setOpensslEngineSocketFd(arg0: Channel): void;
    // private setState(arg0: number): void;
    setWrapDataSize(arg0: number): void;
    sslCloseFuture(): Future<Channel>;
    // private startHandshakeProcessing(arg0: boolean): void;
    // private unwrap(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: number): number;
    // private unwrapNonAppData(arg0: ChannelHandlerContext): number;
    // private wrap(arg0: ByteBufAllocator, arg1: SSLEngine, arg2: ByteBuf, arg3: ByteBuf): SSLEngineResult;
    // private wrap(arg0: ChannelHandlerContext, arg1: boolean): void;
    // private wrapAndFlush(arg0: ChannelHandlerContext): void;
    // private wrapMultiple(arg0: ByteBufAllocator, arg1: SSLEngine, arg2: ByteBuf, arg3: ByteBuf): SSLEngineResult;
    // private wrapNonAppData(arg0: ChannelHandlerContext, arg1: boolean): boolean;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}