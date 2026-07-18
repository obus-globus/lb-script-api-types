import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Channel } from '../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelHandler } from '../../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOption } from '../../../../../io/netty/channel/ChannelOption.d.ts'
import type { Http2StreamChannel } from '../../../../../io/netty/handler/codec/http2/Http2StreamChannel.d.ts'
import type { AttributeKey } from '../../../../../io/netty/util/AttributeKey.d.ts'
import type { Future } from '../../../../../io/netty/util/concurrent/Future.d.ts'
import type { Promise } from '../../../../../io/netty/util/concurrent/Promise.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Http2StreamChannelBootstrap extends Object {
    constructor(arg0: Channel)
    // private attrs: JavaMap<AttributeKey<Object>, Object>;
    // private channel: Channel;
    // private handler: ChannelHandler;
    // private multiplexCtx: ChannelHandlerContext;
    // private options: JavaMap<ChannelOption<Object>, Object>;
    attr<T extends unknown>(arg0: AttributeKey<T>, arg1: T): Http2StreamChannelBootstrap;
    // private findCtx(): ChannelHandlerContext;
    handler(arg0: ChannelHandler): Http2StreamChannelBootstrap;
    // private init(arg0: Channel): void;
    open(): Future<Http2StreamChannel>;
    open(arg0: Promise<Http2StreamChannel>): Future<Http2StreamChannel>;
    open0(arg0: ChannelHandlerContext, arg1: Promise<Http2StreamChannel>): void;
    option<T extends unknown>(arg0: ChannelOption<T>, arg1: T): Http2StreamChannelBootstrap;
}