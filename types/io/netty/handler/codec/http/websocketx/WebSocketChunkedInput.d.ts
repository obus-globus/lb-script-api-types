import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { WebSocketFrame } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrame.d.ts'
import type { ChunkedInput } from '../../../../../../io/netty/handler/stream/ChunkedInput.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WebSocketChunkedInput extends Object implements ChunkedInput<WebSocketFrame> {
    constructor(arg0: ChunkedInput<ByteBuf>)
    constructor(arg0: ChunkedInput<ByteBuf>, arg1: number)
    // private input: ChunkedInput<ByteBuf>;
    // private rsv: number;
    close(): void;
    isEndOfInput(): boolean;
    length(): number;
    progress(): number;
    readChunk(arg0: ByteBufAllocator): WebSocketFrame;
    readChunk(arg0: ChannelHandlerContext): WebSocketFrame;
}