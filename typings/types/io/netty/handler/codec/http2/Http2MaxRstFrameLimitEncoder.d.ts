import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { DecoratingHttp2ConnectionEncoder } from '../../../../../io/netty/handler/codec/http2/DecoratingHttp2ConnectionEncoder.d.ts'
import type { Http2ConnectionEncoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionEncoder.d.ts'
import type { Http2LifecycleManager } from '../../../../../io/netty/handler/codec/http2/Http2LifecycleManager.d.ts'
import type { Ticker } from '../../../../../io/netty/util/concurrent/Ticker.d.ts'
export class Http2MaxRstFrameLimitEncoder extends DecoratingHttp2ConnectionEncoder {
    constructor(arg0: Http2ConnectionEncoder, arg1: number, arg2: number)
    constructor(arg0: Http2ConnectionEncoder, arg1: number, arg2: number, arg3: Ticker)
    // private lastRstFrameNano: number;
    // private lifecycleManager: Http2LifecycleManager;
    // private maxRstFramesPerWindow: number;
    // private nanosPerWindow: number;
    // private sendRstInWindow: number;
    // private ticker: Ticker;
    // private countRstFrameErrorCode(arg0: number): boolean;
    lifecycleManager(arg0: Http2LifecycleManager): void;
    writeRstStream(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: ChannelPromise): ChannelFuture;
}