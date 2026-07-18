import type { ChannelHandler } from '../../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { AbstractHttp2StreamChannel } from '../../../../../io/netty/handler/codec/http2/AbstractHttp2StreamChannel.d.ts'
import type { Http2ChannelDuplexHandler } from '../../../../../io/netty/handler/codec/http2/Http2ChannelDuplexHandler.d.ts'
import type { Http2GoAwayFrame } from '../../../../../io/netty/handler/codec/http2/Http2GoAwayFrame.d.ts'
import type { Http2StreamChannel } from '../../../../../io/netty/handler/codec/http2/Http2StreamChannel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class Http2MultiplexHandler extends Http2ChannelDuplexHandler {
    constructor(arg0: ChannelHandler)
    constructor(arg0: ChannelHandler, arg1: ChannelHandler)
    // private ctx: ChannelHandlerContext;
    // private idCount: number;
    // private inboundStreamHandler: ChannelHandler;
    // private parentReadInProgress: boolean;
    // private readCompletePendingQueue: AbstractHttp2StreamChannel[];
    // private upgradeStreamHandler: ChannelHandler;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    channelReadComplete(arg0: ChannelHandlerContext): void;
    channelWritabilityChanged(arg0: ChannelHandlerContext): void;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    // private fireExceptionCaughtForActiveStream(arg0: Throwable): void;
    handlerAdded0(arg0: ChannelHandlerContext): void;
    handlerRemoved0(arg0: ChannelHandlerContext): void;
    newOutboundStream(): Http2StreamChannel;
    // private onHttp2GoAwayFrame(arg0: ChannelHandlerContext, arg1: Http2GoAwayFrame): void;
    // private processPendingReadCompleteQueue(): void;
    userEventTriggered(arg0: ChannelHandlerContext, arg1: Object): void;
}