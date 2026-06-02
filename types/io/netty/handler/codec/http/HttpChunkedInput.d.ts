import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { HttpContent } from '../../../../../io/netty/handler/codec/http/HttpContent.d.ts'
import type { LastHttpContent } from '../../../../../io/netty/handler/codec/http/LastHttpContent.d.ts'
import type { ChunkedInput } from '../../../../../io/netty/handler/stream/ChunkedInput.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HttpChunkedInput extends Object implements ChunkedInput<HttpContent> {
    constructor(arg0: ChunkedInput<ByteBuf>)
    constructor(arg0: ChunkedInput<ByteBuf>, arg1: LastHttpContent)
    // private input: ChunkedInput<ByteBuf>;
    // private lastHttpContent: LastHttpContent;
    // private sentLastChunk: boolean;
    close(): void;
    isEndOfInput(): boolean;
    length(): number;
    progress(): number;
    readChunk(arg0: ByteBufAllocator): HttpContent;
    readChunk(arg0: ChannelHandlerContext): HttpContent;
}