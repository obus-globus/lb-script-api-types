import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelDuplexHandler } from '../../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelFutureListener } from '../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { PendingWriteQueue } from '../../../../io/netty/channel/PendingWriteQueue.d.ts'
import type { ProxyHandler$LazyChannelPromise } from '../../../../io/netty/handler/proxy/ProxyHandler$LazyChannelPromise.d.ts'
import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export abstract class ProxyHandler extends ChannelDuplexHandler {
    constructor(arg0: SocketAddress)
    // private connectPromise: ProxyHandler$LazyChannelPromise;
    // private connectTimeoutFuture: Future<Object>;
    readonly connectTimeoutMillis: number;
    // private ctx: ChannelHandlerContext;
    // private destinationAddress: SocketAddress;
    // private finished: boolean;
    // private flushedPrematurely: boolean;
    // private pendingWrites: PendingWriteQueue;
    // private proxyAddress: SocketAddress;
    // private suppressChannelReadComplete: boolean;
    // private writeListener: ChannelFutureListener;
    addCodec(arg0: ChannelHandlerContext): void;
    // private addPendingWrite(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
    authScheme(): string;
    // private cancelConnectTimeoutFuture(): void;
    channelActive(arg0: ChannelHandlerContext): void;
    channelInactive(arg0: ChannelHandlerContext): void;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    channelReadComplete(arg0: ChannelHandlerContext): void;
    connect(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: SocketAddress, arg3: ChannelPromise): void;
    connectFuture(): Future<Channel>;
    connectTimeoutMillis(): number;
    destinationAddress<T extends SocketAddress>(): T;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    exceptionMessage(arg0: string): string;
    // private failPendingWrites(arg0: Throwable): void;
    // private failPendingWritesAndClose(arg0: Throwable): void;
    flush(arg0: ChannelHandlerContext): void;
    handleResponse(arg0: ChannelHandlerContext, arg1: Object): boolean;
    handlerAdded(arg0: ChannelHandlerContext): void;
    isConnected(): boolean;
    newInitialMessage(arg0: ChannelHandlerContext): Object;
    protocol(): string;
    proxyAddress<T extends SocketAddress>(): T;
    removeDecoder(arg0: ChannelHandlerContext): void;
    removeEncoder(arg0: ChannelHandlerContext): void;
    // private safeRemoveDecoder(): boolean;
    // private safeRemoveEncoder(): boolean;
    // private sendInitialMessage(arg0: ChannelHandlerContext): void;
    sendToProxyServer(arg0: Object): void;
    // private setConnectFailure(arg0: Throwable): void;
    // private setConnectSuccess(): void;
    setConnectTimeoutMillis(arg0: number): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
    // private writePendingWrites(): void;
}