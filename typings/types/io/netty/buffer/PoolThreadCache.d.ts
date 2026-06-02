import type { PoolArena } from '../../../io/netty/buffer/PoolArena.d.ts'
import type { PoolArena$SizeClass } from '../../../io/netty/buffer/PoolArena$SizeClass.d.ts'
import type { PoolChunk } from '../../../io/netty/buffer/PoolChunk.d.ts'
import type { PoolThreadCache$FreeOnFinalize } from '../../../io/netty/buffer/PoolThreadCache$FreeOnFinalize.d.ts'
import type { PoolThreadCache$MemoryRegionCache } from '../../../io/netty/buffer/PoolThreadCache$MemoryRegionCache.d.ts'
import type { PooledByteBuf } from '../../../io/netty/buffer/PooledByteBuf.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { AtomicBoolean } from '../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class PoolThreadCache extends Object {
    constructor(arg0: PoolArena<number[]>, arg1: PoolArena<ByteBuffer>, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean)
    // private allocations: number;
    // private directArena: PoolArena<ByteBuffer>;
    // private freeOnFinalize: PoolThreadCache$FreeOnFinalize;
    // private freeSweepAllocationThreshold: number;
    // private freed: AtomicBoolean;
    // private heapArena: PoolArena<number[]>;
    // private normalDirectCaches: PoolThreadCache$MemoryRegionCache<ByteBuffer>[];
    // private normalHeapCaches: PoolThreadCache$MemoryRegionCache<number[]>[];
    // private smallSubPageDirectCaches: PoolThreadCache$MemoryRegionCache<ByteBuffer>[];
    // private smallSubPageHeapCaches: PoolThreadCache$MemoryRegionCache<number[]>[];
    add(arg0: PoolArena<Object>, arg1: PoolChunk<Object>, arg2: ByteBuffer, arg3: number, arg4: number, arg5: PoolArena$SizeClass): boolean;
    // private allocate(arg0: PoolThreadCache$MemoryRegionCache<Object>, arg1: PooledByteBuf<Object>, arg2: number): boolean;
    allocateNormal(arg0: PoolArena<Object>, arg1: PooledByteBuf<Object>, arg2: number, arg3: number): boolean;
    allocateSmall(arg0: PoolArena<Object>, arg1: PooledByteBuf<Object>, arg2: number, arg3: number): boolean;
    // private cache(arg0: PoolArena<Object>, arg1: number, arg2: PoolArena$SizeClass): PoolThreadCache$MemoryRegionCache<Object>;
    // private cacheForNormal(arg0: PoolArena<Object>, arg1: number): PoolThreadCache$MemoryRegionCache<Object>;
    // private cacheForSmall(arg0: PoolArena<Object>, arg1: number): PoolThreadCache$MemoryRegionCache<Object>;
    free(arg0: boolean): void;
    trim(): void;
}