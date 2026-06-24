import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { UnpooledUnsafeDirectByteBuf } from '../../../io/netty/buffer/UnpooledUnsafeDirectByteBuf.d.ts'
import type { CleanableDirectBuffer } from '../../../io/netty/util/internal/CleanableDirectBuffer.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
export class UnpooledUnsafeNoCleanerDirectByteBuf extends UnpooledUnsafeDirectByteBuf {
    constructor(arg0: ByteBufAllocator, arg1: number, arg2: number)
    allocateDirect(arg0: number): ByteBuffer;
    capacity(): number;
    capacity(arg0: number): ByteBuf;
    freeDirect(arg0: ByteBuffer): void;
    reallocateDirect(arg0: CleanableDirectBuffer, arg1: number): CleanableDirectBuffer;
}