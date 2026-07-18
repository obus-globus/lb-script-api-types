import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelFutureListener } from '../../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { DecoratingHttp2ConnectionEncoder } from '../../../../../io/netty/handler/codec/http2/DecoratingHttp2ConnectionEncoder.d.ts'
import type { Http2ConnectionEncoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionEncoder.d.ts'
import type { Http2LifecycleManager } from '../../../../../io/netty/handler/codec/http2/Http2LifecycleManager.d.ts'
export class Http2ControlFrameLimitEncoder extends DecoratingHttp2ConnectionEncoder {
    constructor(arg0: Http2ConnectionEncoder, arg1: number)
    // private lifecycleManager: Http2LifecycleManager;
    // private limitReached: boolean;
    // private maxOutstandingControlFrames: number;
    // private outstandingControlFrames: number;
    // private outstandingControlFramesListener: ChannelFutureListener;
    // private handleOutstandingControlFrames(arg0: ChannelHandlerContext, arg1: ChannelPromise): ChannelPromise;
    lifecycleManager(arg0: Http2LifecycleManager): void;
    writePing(arg0: ChannelHandlerContext, arg1: boolean, arg2: number, arg3: ChannelPromise): ChannelFuture;
    writeRstStream(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: ChannelPromise): ChannelFuture;
    writeSettingsAck(arg0: ChannelHandlerContext, arg1: ChannelPromise): ChannelFuture;
}