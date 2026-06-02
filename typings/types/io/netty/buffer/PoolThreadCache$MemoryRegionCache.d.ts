import type { PoolArena$SizeClass } from '../../../io/netty/buffer/PoolArena$SizeClass.d.ts'
import type { PoolChunk } from '../../../io/netty/buffer/PoolChunk.d.ts'
import type { PoolThreadCache } from '../../../io/netty/buffer/PoolThreadCache.d.ts'
import type { PoolThreadCache$MemoryRegionCache$Entry } from '../../../io/netty/buffer/PoolThreadCache$MemoryRegionCache$Entry.d.ts'
import type { PooledByteBuf } from '../../../io/netty/buffer/PooledByteBuf.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class PoolThreadCache$MemoryRegionCache<T extends Object | number | string | boolean> extends Object {
    constructor(arg0: number, arg1: PoolArena$SizeClass)
    // private allocations: number;
    // private queue: PoolThreadCache$MemoryRegionCache$Entry<T>[];
    // private size: number;
    // private sizeClass: PoolArena$SizeClass;
    add(arg0: PoolChunk<T>, arg1: ByteBuffer, arg2: number, arg3: number): boolean;
    allocate(arg0: PooledByteBuf<T>, arg1: number, arg2: PoolThreadCache): boolean;
    free(arg0: boolean): number;
    // private free(arg0: number, arg1: boolean): number;
    // private freeEntry(arg0: PoolThreadCache$MemoryRegionCache$Entry<Object>, arg1: boolean): void;
    initBuf(arg0: PoolChunk<T>, arg1: ByteBuffer, arg2: number, arg3: PooledByteBuf<T>, arg4: number, arg5: PoolThreadCache): void;
    trim(): void;
}