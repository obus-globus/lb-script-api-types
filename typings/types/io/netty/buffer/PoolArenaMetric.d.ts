import type { PoolChunkMetric } from '../../../io/netty/buffer/PoolChunkMetric.d.ts'
import type { PoolSubpageMetric } from '../../../io/netty/buffer/PoolSubpageMetric.d.ts'
import type { SizeClassesMetric } from '../../../io/netty/buffer/SizeClassesMetric.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface PoolArenaMetric extends SizeClassesMetric, Object{
    chunkLists(): PoolChunkMetric[][];
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
    size2SizeIdx(arg0: number): number;
    sizeIdx2size(arg0: number): number;
    sizeIdx2sizeCompute(arg0: number): number;
    smallSubpages(): PoolSubpageMetric[];
    tinySubpages(): PoolSubpageMetric[];
}