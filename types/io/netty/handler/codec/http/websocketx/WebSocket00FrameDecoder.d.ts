import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { ReplayingDecoder } from '../../../../../../io/netty/handler/codec/ReplayingDecoder.d.ts'
import type { WebSocketDecoderConfig } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketDecoderConfig.d.ts'
import type { WebSocketFrame } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrame.d.ts'
import type { WebSocketFrameDecoder } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrameDecoder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WebSocket00FrameDecoder extends ReplayingDecoder<void> implements WebSocketFrameDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor()
    constructor(arg0: WebSocketDecoderConfig)
    constructor(arg0: number)
    // private maxFrameSize: number;
    // private receivedClosingHandshake: boolean;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    // private decodeBinaryFrame(arg0: ChannelHandlerContext, arg1: number, arg2: ByteBuf): WebSocketFrame;
    // private decodeTextFrame(arg0: ChannelHandlerContext, arg1: ByteBuf): WebSocketFrame;
}