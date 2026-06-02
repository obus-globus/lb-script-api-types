import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChunkedInput } from '../../../../io/netty/handler/stream/ChunkedInput.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { RandomAccessFile } from '../../../../java/io/RandomAccessFile.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ChunkedFile extends Object implements ChunkedInput<ByteBuf> {
    constructor(arg0: File)
    constructor(arg0: File, arg1: number)
    constructor(arg0: RandomAccessFile)
    constructor(arg0: RandomAccessFile, arg1: number)
    constructor(arg0: RandomAccessFile, arg1: number, arg2: number, arg3: number)
    // private chunkSize: number;
    // private endOffset: number;
    // private file: RandomAccessFile;
    // private offset: number;
    // private startOffset: number;
    close(): void;
    currentOffset(): number;
    endOffset(): number;
    isEndOfInput(): boolean;
    length(): number;
    progress(): number;
    readChunk(arg0: ByteBufAllocator): ByteBuf;
    readChunk(arg0: ChannelHandlerContext): ByteBuf;
    startOffset(): number;
}