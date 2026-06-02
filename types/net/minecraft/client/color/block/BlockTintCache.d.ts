import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { ReentrantReadWriteLock } from '../../../../../java/util/concurrent/locks/ReentrantReadWriteLock.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockTintCache$CacheData } from '../../../../../net/minecraft/client/color/block/BlockTintCache$CacheData.d.ts'
import type { BlockTintCache$LatestCacheInfo } from '../../../../../net/minecraft/client/color/block/BlockTintCache$LatestCacheInfo.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
export class BlockTintCache extends Object {
    constructor(source: (param0: BlockPos) => kotlin.Int)
    // private cache: Long2ObjectLinkedOpenHashMap<BlockTintCache$CacheData>;
    // private latestChunkOnThread: ThreadLocal<BlockTintCache$LatestCacheInfo>;
    // private lock: ReentrantReadWriteLock;
    // private source: (param0: BlockPos) => kotlin.Int;
    // private findOrCreateChunkCache(x: number, z: number): BlockTintCache$CacheData;
    getColor(pos: BlockPos): number;
    invalidateAll(): void;
    invalidateForChunk(chunkX: number, chunkZ: number): void;
}