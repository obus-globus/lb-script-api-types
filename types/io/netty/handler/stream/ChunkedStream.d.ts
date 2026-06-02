import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChunkedInput } from '../../../../io/netty/handler/stream/ChunkedInput.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { PushbackInputStream } from '../../../../java/io/PushbackInputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ChunkedStream extends Object implements ChunkedInput<ByteBuf> {
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: number)
    // private chunkSize: number;
    // private closed: boolean;
    // private in: PushbackInputStream;
    // private offset: number;
    close(): void;
    isEndOfInput(): boolean;
    length(): number;
    progress(): number;
    readChunk(arg0: ByteBufAllocator): ByteBuf;
    readChunk(arg0: ChannelHandlerContext): ByteBuf;
    transferredBytes(): number;
}