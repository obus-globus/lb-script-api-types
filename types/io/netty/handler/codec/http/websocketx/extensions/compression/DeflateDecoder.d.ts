import type { ByteBuf } from '../../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { EmbeddedChannel } from '../../../../../../../../io/netty/channel/embedded/EmbeddedChannel.d.ts'
import type { WebSocketFrame } from '../../../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrame.d.ts'
import type { WebSocketExtensionDecoder } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionDecoder.d.ts'
import type { WebSocketExtensionFilter } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionFilter.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export abstract class DeflateDecoder extends WebSocketExtensionDecoder {
    constructor(arg0: boolean, arg1: WebSocketExtensionFilter, arg2: number)
    // private decoder: EmbeddedChannel;
    // private extensionDecoderFilter: WebSocketExtensionFilter;
    // private maxAllocation: number;
    // private noContext: boolean;
    appendFrameTail(arg0: WebSocketFrame): boolean;
    channelInactive(arg0: ChannelHandlerContext): void;
    // private cleanup(): void;
    decode(arg0: ChannelHandlerContext, arg1: WebSocketFrame, arg2: Object[]): void;
    // private decompressContent(arg0: ChannelHandlerContext, arg1: WebSocketFrame): ByteBuf;
    extensionDecoderFilter(): WebSocketExtensionFilter;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    newRsv(arg0: WebSocketFrame): number;
}