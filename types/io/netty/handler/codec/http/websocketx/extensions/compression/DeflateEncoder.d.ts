import type { ByteBuf } from '../../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { EmbeddedChannel } from '../../../../../../../../io/netty/channel/embedded/EmbeddedChannel.d.ts'
import type { WebSocketFrame } from '../../../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrame.d.ts'
import type { WebSocketExtensionEncoder } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionEncoder.d.ts'
import type { WebSocketExtensionFilter } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionFilter.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export abstract class DeflateEncoder extends WebSocketExtensionEncoder {
    constructor(arg0: number, arg1: number, arg2: boolean, arg3: WebSocketExtensionFilter)
    // private compressionLevel: number;
    // private encoder: EmbeddedChannel;
    // private extensionEncoderFilter: WebSocketExtensionFilter;
    // private noContext: boolean;
    // private windowSize: number;
    // private cleanup(): void;
    // private compressContent(arg0: ChannelHandlerContext, arg1: WebSocketFrame): ByteBuf;
    encode(arg0: ChannelHandlerContext, arg1: WebSocketFrame, arg2: Object[]): void;
    extensionEncoderFilter(): WebSocketExtensionFilter;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    removeFrameTail(arg0: WebSocketFrame): boolean;
    rsv(arg0: WebSocketFrame): number;
}