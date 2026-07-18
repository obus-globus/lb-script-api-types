import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { Http2Connection } from '../../../../../io/netty/handler/codec/http2/Http2Connection.d.ts'
import type { Http2FrameListener } from '../../../../../io/netty/handler/codec/http2/Http2FrameListener.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InboundHttpToHttp2Adapter extends ChannelInboundHandlerAdapter {
    constructor(arg0: Http2Connection, arg1: Http2FrameListener)
    // private connection: Http2Connection;
    // private listener: Http2FrameListener;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
}