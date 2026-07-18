import type { ChannelHandler } from '../../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { FullHttpResponse } from '../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { HttpClientUpgradeHandler$UpgradeCodec } from '../../../../../io/netty/handler/codec/http/HttpClientUpgradeHandler$UpgradeCodec.d.ts'
import type { HttpRequest } from '../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { Http2ConnectionHandler } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionHandler.d.ts'
import type { Http2FrameCodec } from '../../../../../io/netty/handler/codec/http2/Http2FrameCodec.d.ts'
import type { Http2MultiplexHandler } from '../../../../../io/netty/handler/codec/http2/Http2MultiplexHandler.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class Http2ClientUpgradeCodec extends Object implements HttpClientUpgradeHandler$UpgradeCodec {
    constructor(arg0: Http2ConnectionHandler)
    constructor(arg0: Http2ConnectionHandler, arg1: Http2MultiplexHandler)
    constructor(arg0: Http2FrameCodec, arg1: ChannelHandler)
    constructor(arg0: string, arg1: Http2ConnectionHandler)
    constructor(arg0: string, arg1: Http2ConnectionHandler, arg2: Http2MultiplexHandler)
    constructor(arg0: string, arg1: Http2FrameCodec, arg2: ChannelHandler)
    // private connectionHandler: Http2ConnectionHandler;
    // private handlerName: string;
    // private http2MultiplexHandler: ChannelHandler;
    // private upgradeToHandler: ChannelHandler;
    // private getSettingsHeaderValue(arg0: ChannelHandlerContext): CharSequence;
    protocol(): CharSequence;
    setUpgradeHeaders(arg0: ChannelHandlerContext, arg1: HttpRequest): CharSequence[];
    upgradeTo(arg0: ChannelHandlerContext, arg1: FullHttpResponse): void;
}