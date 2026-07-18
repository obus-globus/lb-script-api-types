import type { ChannelHandler } from '../../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { AbstractHttp2StreamChannel } from '../../../../../io/netty/handler/codec/http2/AbstractHttp2StreamChannel.d.ts'
import type { Http2FrameCodec$DefaultHttp2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameCodec$DefaultHttp2FrameStream.d.ts'
import type { Http2MultiplexHandler } from '../../../../../io/netty/handler/codec/http2/Http2MultiplexHandler.d.ts'
export class Http2MultiplexHandler$Http2MultiplexHandlerStreamChannel extends AbstractHttp2StreamChannel {
    constructor(null_: Http2MultiplexHandler, arg1: Http2FrameCodec$DefaultHttp2FrameStream, arg2: ChannelHandler)
    addChannelToReadCompletePendingQueue(): void;
    isParentReadInProgress(): boolean;
    parentContext(): ChannelHandlerContext;
}