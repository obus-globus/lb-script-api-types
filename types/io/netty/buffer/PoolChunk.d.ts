import type { ChunkInfo } from '../../../io/netty/buffer/ChunkInfo.d.ts'
import type { IntPriorityQueue } from '../../../io/netty/buffer/IntPriorityQueue.d.ts'
import type { PoolArena } from '../../../io/netty/buffer/PoolArena.d.ts'
import type { PoolChunkMetric } from '../../../io/netty/buffer/PoolChunkMetric.d.ts'
import type { PoolSubpage } from '../../../io/netty/buffer/PoolSubpage.d.ts'
import type { PoolThreadCache } from '../../../io/netty/buffer/PoolThreadCache.d.ts'
import type { PooledByteBuf } from '../../../io/netty/buffer/PooledByteBuf.d.ts'
import type { CleanableDirectBuffer } from '../../../io/netty/util/internal/CleanableDirectBuffer.d.ts'
import type { LongLongHashMap } from '../../../io/netty/util/internal/LongLongHashMap.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongAdder } from '../../../java/util/concurrent/atomic/LongAdder.d.ts'
import type { ReentrantLock } from '../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class PoolChunk<T extends Object | number | string | boolean> extends Object implements ChunkInfo, PoolChunkMetric {
    constructor(arg0: PoolArena<T>, arg1: CleanableDirectBuffer, arg2: Object, arg3: T, arg4: number)
    constructor(arg0: PoolArena<T>, arg1: CleanableDirectBuffer, arg2: Object, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number)
    // private arena: PoolArena<T>;
    // private base: Object;
    // private cachedNioBuffers: ByteBuffer[];
    // private chunkSize: number;
    // private cleanable: CleanableDirectBuffer;
    // private freeBytes: number;
    // private maxPageIdx: number;
    // private memory: T;
    // private next: PoolChunk<T>;
    // private pageShifts: number;
    // private pageSize: number;
    // private parent: T[];
    // private pinnedBytes: LongAdder;
    // private prev: PoolChunk<T>;
    // private runsAvail: IntPriorityQueue[];
    // private runsAvailLock: ReentrantLock;
    // private runsAvailMap: LongLongHashMap;
    // private subpages: PoolSubpage<T>[];
    // private unpooled: boolean;
    allocate(arg0: PooledByteBuf<T>, arg1: number, arg2: number, arg3: PoolThreadCache): boolean;
    // private allocateRun(arg0: number): number;
    // private allocateSubpage(arg0: number, arg1: PoolSubpage<T>): number;
    // private calculateRunSize(arg0: number): number;
    capacity(): number;
    chunkSize(): number;
    // private collapseNext(arg0: number): number;
    // private collapsePast(arg0: number): number;
    // private collapseRuns(arg0: number): number;
    decrementPinnedMemory(arg0: number): void;
    destroy(): void;
    free(arg0: number, arg1: number, arg2: ByteBuffer): void;
    freeBytes(): number;
    // private getAvailRunByOffset(arg0: number): number;
    incrementPinnedMemory(arg0: number): void;
    initBuf(arg0: PooledByteBuf<T>, arg1: ByteBuffer, arg2: number, arg3: number, arg4: PoolThreadCache, arg5: boolean): void;
    initBufWithSubpage(arg0: PooledByteBuf<T>, arg1: ByteBuffer, arg2: number, arg3: number, arg4: PoolThreadCache, arg5: boolean): void;
    // private insertAvailRun(arg0: number, arg1: number, arg2: number): void;
    // private insertAvailRun0(arg0: number, arg1: number): void;
    isDirect(): boolean;
    memoryAddress(): number;
    pinnedBytes(): number;
    // private removeAvailRun(arg0: number): void;
    // private removeAvailRun0(arg0: number): void;
    // private runFirstBestFit(arg0: number): number;
    // private splitLargeRun(arg0: number, arg1: number): number;
    toString(): string;
    usage(): number;
    // private usage(arg0: number): number;
}