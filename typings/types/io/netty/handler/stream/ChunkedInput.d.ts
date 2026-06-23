import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ChunkedInput<B extends unknown> extends Object{
    close(): void;
    isEndOfInput(): boolean;
    length(): number;
    progress(): number;
    readChunk(arg0: ByteBufAllocator): B;
    readChunk(arg0: ChannelHandlerContext): B;
}