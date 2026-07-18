import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Http2DataFrame } from '../../../../../io/netty/handler/codec/http2/Http2DataFrame.d.ts'
import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { ChunkedInput } from '../../../../../io/netty/handler/stream/ChunkedInput.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Http2DataChunkedInput extends Object implements ChunkedInput<Http2DataFrame> {
    constructor(arg0: ChunkedInput<ByteBuf>, arg1: Http2FrameStream)
    // private endStreamSent: boolean;
    // private input: ChunkedInput<ByteBuf>;
    // private stream: Http2FrameStream;
    close(): void;
    isEndOfInput(): boolean;
    length(): number;
    progress(): number;
    readChunk(arg0: ByteBufAllocator): Http2DataFrame;
    readChunk(arg0: ChannelHandlerContext): Http2DataFrame;
}