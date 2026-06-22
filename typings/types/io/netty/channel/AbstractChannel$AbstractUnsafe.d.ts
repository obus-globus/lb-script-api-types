import type { Channel$Unsafe } from '../../../io/netty/channel/Channel$Unsafe.d.ts'
import type { ChannelHandler } from '../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelOutboundBuffer } from '../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { RecvByteBufAllocator$Handle } from '../../../io/netty/channel/RecvByteBufAllocator$Handle.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { ClosedChannelException } from '../../../java/nio/channels/ClosedChannelException.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export abstract class AbstractChannel$AbstractUnsafe extends Object implements Channel$Unsafe {
    constructor(null_: AbstractChannel$AbstractUnsafe)
    // private inFlush0: boolean;
    // private neverRegistered: boolean;
    // private outboundBuffer: ChannelOutboundBuffer;
    // private recvHandle: RecvByteBufAllocator$Handle;
    annotateConnectException(arg0: Throwable, arg1: SocketAddress): Throwable;
    // private assertEventLoop(): void;
    beginRead(): void;
    bind(arg0: SocketAddress, arg1: ChannelPromise): void;
    close(arg0: ChannelPromise): void;
    close(arg0: ChannelPromise, arg1: Throwable, arg2: ClosedChannelException): void;
    closeForcibly(): void;
    closeIfClosed(): void;
    // private closeOutboundBufferForShutdown(arg0: Map$Entry<string, ChannelHandler>[], arg1: ChannelOutboundBuffer, arg2: Throwable): void;
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): void;
    deregister(arg0: ChannelPromise): void;
    // private deregister(arg0: ChannelPromise, arg1: boolean): void;
    disconnect(arg0: ChannelPromise): void;
    // private doClose0(arg0: ChannelPromise): void;
    ensureOpen(arg0: ChannelPromise): boolean;
    // private fireChannelInactiveAndDeregister(arg0: boolean): void;
    flush(): void;
    flush0(): void;
    handleWriteError(arg0: Throwable): void;
    // private invokeLater(arg0: () => void): void;
    localAddress(): SocketAddress;
    // private newClosedChannelException(arg0: Throwable, arg1: string): ClosedChannelException;
    outboundBuffer(): ChannelOutboundBuffer;
    prepareToClose(): Executor;
    recvBufAllocHandle(): RecvByteBufAllocator$Handle;
    register(arg0: (Object | null)[], arg1: ChannelPromise): void;
    // private register0(arg0: ChannelPromise): void;
    remoteAddress(): SocketAddress;
    safeSetFailure(arg0: ChannelPromise, arg1: Throwable): void;
    safeSetSuccess(arg0: ChannelPromise): void;
    shutdownOutput(arg0: ChannelPromise): void;
    // private shutdownOutput(arg0: ChannelPromise, arg1: Throwable): void;
    voidPromise(): ChannelPromise;
    write(arg0: Object, arg1: ChannelPromise): void;
}