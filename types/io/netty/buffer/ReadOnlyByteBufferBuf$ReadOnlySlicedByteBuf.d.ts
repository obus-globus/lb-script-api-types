import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { SlicedByteBuf } from '../../../io/netty/buffer/SlicedByteBuf.d.ts'
export class ReadOnlyByteBufferBuf$ReadOnlySlicedByteBuf extends SlicedByteBuf {
    constructor(arg0: ByteBuf, arg1: number, arg2: number)
    asReadOnly(): ByteBuf;
    duplicate(): ByteBuf;
    ensureWritable(arg0: number, arg1: boolean): number;
    isWritable(): boolean;
    isWritable(arg0: number): boolean;
    slice(arg0: number, arg1: number): ByteBuf;
}