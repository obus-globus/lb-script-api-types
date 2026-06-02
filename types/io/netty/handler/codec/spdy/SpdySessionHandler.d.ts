import type { ChannelDuplexHandler } from '../../../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelFutureListener } from '../../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { SpdySession } from '../../../../../io/netty/handler/codec/spdy/SpdySession.d.ts'
import type { SpdySessionStatus } from '../../../../../io/netty/handler/codec/spdy/SpdySessionStatus.d.ts'
import type { SpdyStreamStatus } from '../../../../../io/netty/handler/codec/spdy/SpdyStreamStatus.d.ts'
import type { SpdyVersion } from '../../../../../io/netty/handler/codec/spdy/SpdyVersion.d.ts'
import type { AtomicInteger } from '../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class SpdySessionHandler extends ChannelDuplexHandler {
    constructor(arg0: SpdyVersion, arg1: boolean)
    // private closeSessionFutureListener: ChannelFutureListener;
    // private initialReceiveWindowSize: number;
    // private initialSendWindowSize: number;
    // private initialSessionReceiveWindowSize: number;
    // private lastGoodStreamId: number;
    // private localConcurrentStreams: number;
    // private minorVersion: number;
    // private pings: AtomicInteger;
    // private receivedGoAwayFrame: boolean;
    // private remoteConcurrentStreams: number;
    // private sentGoAwayFrame: boolean;
    // private server: boolean;
    // private spdySession: SpdySession;
    // private acceptStream(arg0: number, arg1: number, arg2: boolean, arg3: boolean): boolean;
    channelInactive(arg0: ChannelHandlerContext): void;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    close(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    // private halfCloseStream(arg0: number, arg1: boolean, arg2: ChannelFuture): void;
    // private handleOutboundMessage(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
    // private isRemoteInitiatedId(arg0: number): boolean;
    // private issueSessionError(arg0: ChannelHandlerContext, arg1: SpdySessionStatus): void;
    // private issueStreamError(arg0: ChannelHandlerContext, arg1: number, arg2: SpdyStreamStatus): void;
    // private removeStream(arg0: number, arg1: ChannelFuture): void;
    // private sendGoAwayFrame(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    // private sendGoAwayFrame(arg0: ChannelHandlerContext, arg1: SpdySessionStatus): ChannelFuture;
    setSessionReceiveWindowSize(arg0: number): void;
    // private updateInitialReceiveWindowSize(arg0: number): void;
    // private updateInitialSendWindowSize(arg0: number): void;
    // private updateSendWindowSize(arg0: ChannelHandlerContext, arg1: number, arg2: number): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}