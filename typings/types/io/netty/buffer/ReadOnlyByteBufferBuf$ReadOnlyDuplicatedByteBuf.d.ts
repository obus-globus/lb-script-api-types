import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { DuplicatedByteBuf } from '../../../io/netty/buffer/DuplicatedByteBuf.d.ts'
export class ReadOnlyByteBufferBuf$ReadOnlyDuplicatedByteBuf extends DuplicatedByteBuf {
    constructor(arg0: ByteBuf)
    asReadOnly(): ByteBuf;
    duplicate(): ByteBuf;
    ensureWritable(arg0: number): ByteBuf;
    ensureWritable(arg0: number, arg1: boolean): number;
    isWritable(): boolean;
    isWritable(arg0: number): boolean;
    slice(): ByteBuf;
    slice(arg0: number, arg1: number): ByteBuf;
}