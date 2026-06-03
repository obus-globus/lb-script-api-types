import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { SwappedByteBuf } from '../../../io/netty/buffer/SwappedByteBuf.d.ts'
import type { WrappedByteBuf } from '../../../io/netty/buffer/WrappedByteBuf.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class UnreleasableByteBuf extends WrappedByteBuf {
    constructor(arg0: ByteBuf)
    // private swappedBuf: SwappedByteBuf;
    asReadOnly(): ByteBuf;
    duplicate(): ByteBuf;
    order(): ByteOrder;
    order(arg0: ByteOrder): ByteBuf;
    readRetainedSlice(arg0: number): ByteBuf;
    readSlice(arg0: number): ByteBuf;
    release(): boolean;
    release(arg0: number): boolean;
    retain(): ByteBuf;
    retain(arg0: number): ByteBuf;
    retainedDuplicate(): ByteBuf;
    retainedSlice(): ByteBuf;
    retainedSlice(arg0: number, arg1: number): ByteBuf;
    slice(): ByteBuf;
    slice(arg0: number, arg1: number): ByteBuf;
    touch(): ByteBuf;
    touch(arg0: Object): ByteBuf;
}