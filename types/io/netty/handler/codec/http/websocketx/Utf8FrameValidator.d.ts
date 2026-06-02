import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { CorruptedWebSocketFrameException } from '../../../../../../io/netty/handler/codec/http/websocketx/CorruptedWebSocketFrameException.d.ts'
import type { Utf8Validator } from '../../../../../../io/netty/handler/codec/http/websocketx/Utf8Validator.d.ts'
import type { WebSocketFrame } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrame.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class Utf8FrameValidator extends ChannelInboundHandlerAdapter {
    constructor()
    constructor(arg0: boolean)
    // private closeOnProtocolViolation: boolean;
    // private fragmentedFramesCount: number;
    // private utf8Validator: Utf8Validator;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    // private checkUTF8String(arg0: ByteBuf): void;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    // private protocolViolation(arg0: ChannelHandlerContext, arg1: WebSocketFrame, arg2: CorruptedWebSocketFrameException): void;
}