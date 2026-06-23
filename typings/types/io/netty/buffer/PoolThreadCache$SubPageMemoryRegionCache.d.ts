import type { PoolChunk } from '../../../io/netty/buffer/PoolChunk.d.ts'
import type { PoolThreadCache } from '../../../io/netty/buffer/PoolThreadCache.d.ts'
import type { PoolThreadCache$MemoryRegionCache } from '../../../io/netty/buffer/PoolThreadCache$MemoryRegionCache.d.ts'
import type { PooledByteBuf } from '../../../io/netty/buffer/PooledByteBuf.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class PoolThreadCache$SubPageMemoryRegionCache<T extends unknown> extends PoolThreadCache$MemoryRegionCache<T> {
    constructor(arg0: number)
    initBuf(arg0: PoolChunk<T>, arg1: ByteBuffer, arg2: number, arg3: PooledByteBuf<T>, arg4: number, arg5: PoolThreadCache): void;
}