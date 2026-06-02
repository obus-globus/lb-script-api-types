import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChunkedInput } from '../../../../io/netty/handler/stream/ChunkedInput.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { ReadableByteChannel } from '../../../../java/nio/channels/ReadableByteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ChunkedNioStream extends Object implements ChunkedInput<ByteBuf> {
    constructor(arg0: ReadableByteChannel)
    constructor(arg0: ReadableByteChannel, arg1: number)
    // private byteBuffer: ByteBuffer;
    // private chunkSize: number;
    // private in: ReadableByteChannel;
    // private offset: number;
    close(): void;
    isEndOfInput(): boolean;
    length(): number;
    progress(): number;
    readChunk(arg0: ByteBufAllocator): ByteBuf;
    readChunk(arg0: ChannelHandlerContext): ByteBuf;
    transferredBytes(): number;
}