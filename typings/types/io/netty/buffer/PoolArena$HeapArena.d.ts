import type { PoolArena } from '../../../io/netty/buffer/PoolArena.d.ts'
import type { PoolChunk } from '../../../io/netty/buffer/PoolChunk.d.ts'
import type { PooledByteBuf } from '../../../io/netty/buffer/PooledByteBuf.d.ts'
import type { PooledByteBufAllocator } from '../../../io/netty/buffer/PooledByteBufAllocator.d.ts'
import type { SizeClasses } from '../../../io/netty/buffer/SizeClasses.d.ts'
import type { AtomicReference } from '../../../java/util/concurrent/atomic/AtomicReference.d.ts'
export class PoolArena$HeapArena extends PoolArena<number[]> {
    constructor(arg0: PooledByteBufAllocator, arg1: SizeClasses)
    // private lastDestroyedChunk: AtomicReference<PoolChunk<number[]>>;
    destroyChunk(arg0: PoolChunk<number[]>): void;
    isDirect(): boolean;
    memoryCopy(arg0: number[], arg1: number, arg2: PooledByteBuf<number[]>, arg3: number): void;
    newByteBuf(arg0: number): PooledByteBuf<number[]>;
    newChunk(arg0: number, arg1: number, arg2: number, arg3: number): PoolChunk<number[]>;
    newUnpooledChunk(arg0: number): PoolChunk<number[]>;
}