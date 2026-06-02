import type { Channel } from '../../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { FullHttpRequest } from '../../../../../../io/netty/handler/codec/http/FullHttpRequest.d.ts'
import type { FullHttpResponse } from '../../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { CloseWebSocketFrame } from '../../../../../../io/netty/handler/codec/http/websocketx/CloseWebSocketFrame.d.ts'
import type { WebSocketDecoderConfig } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketDecoderConfig.d.ts'
import type { WebSocketFrameDecoder } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrameDecoder.d.ts'
import type { WebSocketFrameEncoder } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrameEncoder.d.ts'
import type { WebSocketServerHandshaker } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketServerHandshaker.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class WebSocketServerHandshaker00 extends WebSocketServerHandshaker {
    static SUB_PROTOCOL_WILDCARD: string;
    constructor(arg0: string, arg1: string, arg2: WebSocketDecoderConfig)
    constructor(arg0: string, arg1: string, arg2: number)
    close(arg0: Channel, arg1: CloseWebSocketFrame, arg2: ChannelPromise): ChannelFuture;
    close(arg0: ChannelHandlerContext, arg1: CloseWebSocketFrame, arg2: ChannelPromise): ChannelFuture;
    newHandshakeResponse(arg0: FullHttpRequest, arg1: Map$Entry<string, string>[]): FullHttpResponse;
    newWebSocketEncoder(): WebSocketFrameEncoder;
    newWebsocketDecoder(): WebSocketFrameDecoder;
}