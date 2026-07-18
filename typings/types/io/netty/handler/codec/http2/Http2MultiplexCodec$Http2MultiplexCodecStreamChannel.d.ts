import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandler } from '../../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { AbstractHttp2StreamChannel } from '../../../../../io/netty/handler/codec/http2/AbstractHttp2StreamChannel.d.ts'
import type { Http2FrameCodec$DefaultHttp2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameCodec$DefaultHttp2FrameStream.d.ts'
import type { Http2MultiplexCodec } from '../../../../../io/netty/handler/codec/http2/Http2MultiplexCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Http2MultiplexCodec$Http2MultiplexCodecStreamChannel extends AbstractHttp2StreamChannel {
    constructor(null_: Http2MultiplexCodec, arg1: Http2FrameCodec$DefaultHttp2FrameStream, arg2: ChannelHandler)
    addChannelToReadCompletePendingQueue(): void;
    flush0(arg0: ChannelHandlerContext): void;
    isParentReadInProgress(): boolean;
    parentContext(): ChannelHandlerContext;
    write0(arg0: ChannelHandlerContext, arg1: Object): ChannelFuture;
}