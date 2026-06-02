import type { Channel } from '../../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOutboundInvoker } from '../../../../../../io/netty/channel/ChannelOutboundInvoker.d.ts'
import type { ChannelPromise } from '../../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { FullHttpRequest } from '../../../../../../io/netty/handler/codec/http/FullHttpRequest.d.ts'
import type { FullHttpResponse } from '../../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { HttpRequest } from '../../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { CloseWebSocketFrame } from '../../../../../../io/netty/handler/codec/http/websocketx/CloseWebSocketFrame.d.ts'
import type { WebSocketDecoderConfig } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketDecoderConfig.d.ts'
import type { WebSocketFrameDecoder } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrameDecoder.d.ts'
import type { WebSocketFrameEncoder } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrameEncoder.d.ts'
import type { WebSocketVersion } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketVersion.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export abstract class WebSocketServerHandshaker extends Object {
    static SUB_PROTOCOL_WILDCARD: string;
    constructor(arg0: WebSocketVersion, arg1: string, arg2: string, arg3: WebSocketDecoderConfig)
    constructor(arg0: WebSocketVersion, arg1: string, arg2: string, arg3: number)
    // private decoderConfig: WebSocketDecoderConfig;
    // private selectedSubprotocol: string;
    // private subprotocols: string[];
    // private uri: string;
    // private version: WebSocketVersion;
    close(arg0: Channel, arg1: CloseWebSocketFrame): ChannelFuture;
    close(arg0: Channel, arg1: CloseWebSocketFrame, arg2: ChannelPromise): ChannelFuture;
    close(arg0: ChannelHandlerContext, arg1: CloseWebSocketFrame): ChannelFuture;
    close(arg0: ChannelHandlerContext, arg1: CloseWebSocketFrame, arg2: ChannelPromise): ChannelFuture;
    // private close0(arg0: ChannelOutboundInvoker, arg1: CloseWebSocketFrame, arg2: ChannelPromise): ChannelFuture;
    decoderConfig(): WebSocketDecoderConfig;
    handshake(arg0: Channel, arg1: FullHttpRequest): ChannelFuture;
    handshake(arg0: Channel, arg1: FullHttpRequest, arg2: Map$Entry<string, string>[], arg3: ChannelPromise): ChannelFuture;
    handshake(arg0: Channel, arg1: HttpRequest): ChannelFuture;
    handshake(arg0: Channel, arg1: HttpRequest, arg2: Map$Entry<string, string>[], arg3: ChannelPromise): ChannelFuture;
    maxFramePayloadLength(): number;
    newHandshakeResponse(arg0: FullHttpRequest, arg1: Map$Entry<string, string>[]): FullHttpResponse;
    newWebSocketEncoder(): WebSocketFrameEncoder;
    newWebsocketDecoder(): WebSocketFrameDecoder;
    selectSubprotocol(arg0: string): string;
    selectedSubprotocol(): string;
    subprotocols(): string[];
    uri(): string;
    version(): WebSocketVersion;
}