import type { PoolArena$SizeClass } from '../../../io/netty/buffer/PoolArena$SizeClass.d.ts'
import type { PoolArenaMetric } from '../../../io/netty/buffer/PoolArenaMetric.d.ts'
import type { PoolChunk } from '../../../io/netty/buffer/PoolChunk.d.ts'
import type { PoolChunkMetric } from '../../../io/netty/buffer/PoolChunkMetric.d.ts'
import type { PoolSubpage } from '../../../io/netty/buffer/PoolSubpage.d.ts'
import type { PoolSubpageMetric } from '../../../io/netty/buffer/PoolSubpageMetric.d.ts'
import type { PoolThreadCache } from '../../../io/netty/buffer/PoolThreadCache.d.ts'
import type { PooledByteBuf } from '../../../io/netty/buffer/PooledByteBuf.d.ts'
import type { PooledByteBufAllocator } from '../../../io/netty/buffer/PooledByteBufAllocator.d.ts'
import type { SizeClasses } from '../../../io/netty/buffer/SizeClasses.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { AtomicInteger } from '../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { LongAdder } from '../../../java/util/concurrent/atomic/LongAdder.d.ts'
import type { ReentrantLock } from '../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class PoolArena<T extends Object | number | string | boolean> extends Object implements PoolArenaMetric {
    constructor(arg0: PooledByteBufAllocator, arg1: SizeClasses)
    // private activeBytesHuge: LongAdder;
    // private allocationsHuge: LongAdder;
    // private allocationsNormal: number;
    // private allocationsSmall: LongAdder;
    // private chunkListMetrics: PoolChunkMetric[][];
    // private deallocationsHuge: LongAdder;
    // private deallocationsNormal: number;
    // private deallocationsSmall: number;
    // private lock: ReentrantLock;
    // private numThreadCaches: AtomicInteger;
    // private parent: PooledByteBufAllocator;
    // private pooledChunkAllocations: number;
    // private pooledChunkDeallocations: number;
    // private q000: T[];
    // private q025: T[];
    // private q050: T[];
    // private q075: T[];
    // private q100: T[];
    // private qInit: T[];
    // private sizeClass: SizeClasses;
    // private smallSubpagePools: PoolSubpage<T>[];
    // private allocate(arg0: PoolThreadCache, arg1: PooledByteBuf<T>, arg2: number): void;
    allocate(arg0: PoolThreadCache, arg1: number, arg2: number): PooledByteBuf<T>;
    // private allocateHuge(arg0: PooledByteBuf<T>, arg1: number): void;
    // private allocateNormal(arg0: PooledByteBuf<T>, arg1: number, arg2: number, arg3: PoolThreadCache): void;
    chunkLists(): PoolChunkMetric[][];
    destroyChunk(arg0: PoolChunk<T>): void;
    // private destroyPoolChunkLists(arg0: T[][]): void;
    finalize(): void;
    free(arg0: PoolChunk<T>, arg1: ByteBuffer, arg2: number, arg3: number, arg4: PoolThreadCache): void;
    freeChunk(arg0: PoolChunk<T>, arg1: number, arg2: number, arg3: PoolArena$SizeClass, arg4: ByteBuffer, arg5: boolean): void;
    // private incSmallAllocation(): void;
    isDirect(): boolean;
    lock(): void;
    memoryCopy(arg0: T, arg1: number, arg2: PooledByteBuf<T>, arg3: number): void;
    newByteBuf(arg0: number): PooledByteBuf<T>;
    newChunk(arg0: number, arg1: number, arg2: number, arg3: number): PoolChunk<T>;
    // private newSubpagePoolArray(arg0: number): PoolSubpage<T>[];
    // private newSubpagePoolHead(arg0: number): PoolSubpage<T>;
    newUnpooledChunk(arg0: number): PoolChunk<T>;
    normalizeSize(arg0: number): number;
    numActiveAllocations(): number;
    numActiveBytes(): number;
    numActiveChunks(): number;
    numActiveHugeAllocations(): number;
    numActiveNormalAllocations(): number;
    numActiveSmallAllocations(): number;
    numActiveTinyAllocations(): number;
    numAllocations(): number;
    numChunkAllocations(): number;
    numChunkDeallocations(): number;
    numChunkLists(): number;
    numDeallocations(): number;
    numHugeAllocations(): number;
    numHugeDeallocations(): number;
    numNormalAllocations(): number;
    numNormalDeallocations(): number;
    numPinnedBytes(): number;
    numSmallAllocations(): number;
    numSmallDeallocations(): number;
    numSmallSubpages(): number;
    numThreadCaches(): number;
    numTinyAllocations(): number;
    numTinyDeallocations(): number;
    numTinySubpages(): number;
    pageIdx2size(arg0: number): number;
    pageIdx2sizeCompute(arg0: number): number;
    pages2pageIdx(arg0: number): number;
    pages2pageIdxFloor(arg0: number): number;
    reallocate(arg0: PooledByteBuf<T>, arg1: number): void;
    size2SizeIdx(arg0: number): number;
    sizeIdx2size(arg0: number): number;
    sizeIdx2sizeCompute(arg0: number): number;
    smallSubpages(): PoolSubpageMetric[];
    // private tcacheAllocateNormal(arg0: PoolThreadCache, arg1: PooledByteBuf<T>, arg2: number, arg3: number): void;
    // private tcacheAllocateSmall(arg0: PoolThreadCache, arg1: PooledByteBuf<T>, arg2: number, arg3: number): void;
    tinySubpages(): PoolSubpageMetric[];
    toString(): string;
    unlock(): void;
}