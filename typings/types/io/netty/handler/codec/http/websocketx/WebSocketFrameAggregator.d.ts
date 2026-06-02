import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandler } from '../../../../../../io/netty/channel/ChannelHandler.d.ts'
import type { MessageAggregator } from '../../../../../../io/netty/handler/codec/MessageAggregator.d.ts'
import type { ContinuationWebSocketFrame } from '../../../../../../io/netty/handler/codec/http/websocketx/ContinuationWebSocketFrame.d.ts'
import type { WebSocketFrame } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrame.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class WebSocketFrameAggregator extends MessageAggregator<WebSocketFrame, WebSocketFrame, ContinuationWebSocketFrame, WebSocketFrame> {
    constructor(arg0: number)
    beginAggregation(arg0: WebSocketFrame, arg1: ByteBuf): WebSocketFrame;
    closeAfterContinueResponse(arg0: Object): boolean;
    ignoreContentAfterContinueResponse(arg0: Object): boolean;
    isAggregated(arg0: WebSocketFrame): boolean;
    isContentLengthInvalid(arg0: WebSocketFrame, arg1: number): boolean;
    isContentMessage(arg0: WebSocketFrame): boolean;
    isLastContentMessage(arg0: ContinuationWebSocketFrame): boolean;
    isStartMessage(arg0: WebSocketFrame): boolean;
    newContinueResponse(arg0: WebSocketFrame, arg1: number, arg2: Map$Entry<string, ChannelHandler>[]): Object;
}