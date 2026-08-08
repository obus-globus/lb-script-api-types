import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Http2FrameListener } from '../../../../../io/netty/handler/codec/http2/Http2FrameListener.d.ts'
import type { Http2FrameListenerDecorator } from '../../../../../io/netty/handler/codec/http2/Http2FrameListenerDecorator.d.ts'
import type { Ticker } from '../../../../../io/netty/util/concurrent/Ticker.d.ts'
export class Http2MaxRstFrameListener extends Http2FrameListenerDecorator {
    constructor(arg0: Http2FrameListener, arg1: number, arg2: number, arg3: Ticker)
    // private lastRstFrameNano: number;
    // private maxRstFramesPerWindow: number;
    // private nanosPerWindow: number;
    // private receivedRstInWindow: number;
    // private ticker: Ticker;
    onRstStreamRead(arg0: ChannelHandlerContext, arg1: number, arg2: number): void;
}