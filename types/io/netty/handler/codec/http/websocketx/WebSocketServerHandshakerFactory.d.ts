import type { Channel } from '../../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelPromise } from '../../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { HttpRequest } from '../../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { WebSocketDecoderConfig } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketDecoderConfig.d.ts'
import type { WebSocketServerHandshaker } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketServerHandshaker.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WebSocketServerHandshakerFactory extends Object {
    static resolveHandshaker(paramarg0: HttpRequest, paramarg1: string, paramarg2: string, paramarg3: WebSocketDecoderConfig): WebSocketServerHandshaker;
    static sendUnsupportedVersionResponse(paramarg0: Channel): ChannelFuture;
    static sendUnsupportedVersionResponse(paramarg0: Channel, paramarg1: ChannelPromise): ChannelFuture;
    static sendUnsupportedWebSocketVersionResponse(paramarg0: Channel): void;
    constructor(arg0: string, arg1: string, arg2: WebSocketDecoderConfig)
    constructor(arg0: string, arg1: string, arg2: boolean)
    constructor(arg0: string, arg1: string, arg2: boolean, arg3: number)
    constructor(arg0: string, arg1: string, arg2: boolean, arg3: number, arg4: boolean)
    // private decoderConfig: WebSocketDecoderConfig;
    // private subprotocols: string;
    // private webSocketURL: string;
    newHandshaker(arg0: HttpRequest): WebSocketServerHandshaker;
}