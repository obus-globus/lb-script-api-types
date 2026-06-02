import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { UnpooledUnsafeDirectByteBuf } from '../../../io/netty/buffer/UnpooledUnsafeDirectByteBuf.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
export class WrappedUnpooledUnsafeDirectByteBuf extends UnpooledUnsafeDirectByteBuf {
    constructor(arg0: ByteBufAllocator, arg1: number, arg2: number, arg3: boolean)
    freeDirect(arg0: ByteBuffer): void;
}