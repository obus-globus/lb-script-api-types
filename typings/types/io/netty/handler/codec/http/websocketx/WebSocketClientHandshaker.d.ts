import type { Channel } from '../../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOutboundInvoker } from '../../../../../../io/netty/channel/ChannelOutboundInvoker.d.ts'
import type { ChannelPromise } from '../../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { FullHttpRequest } from '../../../../../../io/netty/handler/codec/http/FullHttpRequest.d.ts'
import type { FullHttpResponse } from '../../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { HttpResponse } from '../../../../../../io/netty/handler/codec/http/HttpResponse.d.ts'
import type { CloseWebSocketFrame } from '../../../../../../io/netty/handler/codec/http/websocketx/CloseWebSocketFrame.d.ts'
import type { WebSocketFrameDecoder } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrameDecoder.d.ts'
import type { WebSocketFrameEncoder } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrameEncoder.d.ts'
import type { WebSocketVersion } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketVersion.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export abstract class WebSocketClientHandshaker extends Object {
    constructor(arg0: URI, arg1: WebSocketVersion, arg2: string, arg3: Map$Entry<string, string>[], arg4: number)
    constructor(arg0: URI, arg1: WebSocketVersion, arg2: string, arg3: Map$Entry<string, string>[], arg4: number, arg5: number)
    constructor(arg0: URI, arg1: WebSocketVersion, arg2: string, arg3: Map$Entry<string, string>[], arg4: number, arg5: number, arg6: boolean)
    constructor(arg0: URI, arg1: WebSocketVersion, arg2: string, arg3: Map$Entry<string, string>[], arg4: number, arg5: number, arg6: boolean, arg7: boolean)
    // private absoluteUpgradeUrl: boolean;
    // private actualSubprotocol: string;
    // private customHeaders: Map$Entry<string, string>[];
    // private expectedSubprotocol: string;
    // private forceCloseComplete: boolean;
    // private forceCloseInit: number;
    // private forceCloseTimeoutMillis: number;
    // private generateOriginHeader: boolean;
    readonly handshakeComplete: boolean;
    // private maxFramePayloadLength: number;
    // private uri: URI;
    // private version: WebSocketVersion;
    actualSubprotocol(): string;
    close(arg0: Channel, arg1: CloseWebSocketFrame): ChannelFuture;
    close(arg0: Channel, arg1: CloseWebSocketFrame, arg2: ChannelPromise): ChannelFuture;
    close(arg0: ChannelHandlerContext, arg1: CloseWebSocketFrame): ChannelFuture;
    close(arg0: ChannelHandlerContext, arg1: CloseWebSocketFrame, arg2: ChannelPromise): ChannelFuture;
    // private close0(arg0: ChannelOutboundInvoker, arg1: Channel, arg2: CloseWebSocketFrame, arg3: ChannelPromise): ChannelFuture;
    expectedSubprotocol(): string;
    finishHandshake(arg0: Channel, arg1: FullHttpResponse): void;
    forceCloseTimeoutMillis(): number;
    handshake(arg0: Channel): ChannelFuture;
    handshake(arg0: Channel, arg1: ChannelPromise): ChannelFuture;
    isForceCloseComplete(): boolean;
    isHandshakeComplete(): boolean;
    maxFramePayloadLength(): number;
    newHandshakeRequest(): FullHttpRequest;
    newWebSocketEncoder(): WebSocketFrameEncoder;
    newWebsocketDecoder(): WebSocketFrameDecoder;
    processHandshake(arg0: Channel, arg1: HttpResponse): ChannelFuture;
    processHandshake(arg0: Channel, arg1: HttpResponse, arg2: ChannelPromise): ChannelFuture;
    // private setActualSubprotocol(arg0: string): void;
    setForceCloseTimeoutMillis(arg0: number): WebSocketClientHandshaker;
    // private setHandshakeComplete(): void;
    upgradeUrl(arg0: URI): string;
    uri(): URI;
    verify(arg0: FullHttpResponse): void;
    version(): WebSocketVersion;
}