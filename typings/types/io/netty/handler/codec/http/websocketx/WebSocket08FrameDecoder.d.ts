import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder } from '../../../../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { CorruptedWebSocketFrameException } from '../../../../../../io/netty/handler/codec/http/websocketx/CorruptedWebSocketFrameException.d.ts'
import type { WebSocket08FrameDecoder$State } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocket08FrameDecoder$State.d.ts'
import type { WebSocketCloseStatus } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketCloseStatus.d.ts'
import type { WebSocketDecoderConfig } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketDecoderConfig.d.ts'
import type { WebSocketFrameDecoder } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrameDecoder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WebSocket08FrameDecoder extends ByteToMessageDecoder implements WebSocketFrameDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor(arg0: WebSocketDecoderConfig)
    constructor(arg0: boolean, arg1: boolean, arg2: number)
    constructor(arg0: boolean, arg1: boolean, arg2: number, arg3: boolean)
    // private config: WebSocketDecoderConfig;
    // private fragmentedFramesCount: number;
    // private frameFinalFlag: boolean;
    // private frameMasked: boolean;
    // private frameOpcode: number;
    // private framePayloadLen1: number;
    // private framePayloadLength: number;
    // private frameRsv: number;
    // private mask: number;
    // private receivedClosingHandshake: boolean;
    // private state: WebSocket08FrameDecoder$State;
    checkCloseFrameBody(arg0: ChannelHandlerContext, arg1: ByteBuf): void;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    // private protocolViolation(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: CorruptedWebSocketFrameException): void;
    // private protocolViolation(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: WebSocketCloseStatus, arg3: string): void;
    // private protocolViolation(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: string): void;
    // private unmask(arg0: ByteBuf): void;
}