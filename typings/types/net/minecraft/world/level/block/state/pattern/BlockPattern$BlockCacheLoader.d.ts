import type { Function } from '../../../../../../../com/google/common/base/Function.d.ts'
import type { Supplier } from '../../../../../../../com/google/common/base/Supplier.d.ts'
import type { CacheLoader } from '../../../../../../../com/google/common/cache/CacheLoader.d.ts'
import type { Executor } from '../../../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LevelReader } from '../../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { BlockInWorld } from '../../../../../../../net/minecraft/world/level/block/state/pattern/BlockInWorld.d.ts'
export class BlockPattern$BlockCacheLoader extends CacheLoader<BlockPos, BlockInWorld> {
    static asyncReloading<K extends unknown, V extends unknown>(paramloader: CacheLoader<K, V>, paramexecutor: Executor): CacheLoader<K, V>;
    static from<K extends unknown, V extends unknown>(paramfunction: (param0: K) => V): CacheLoader<K, V>;
    static from<V extends unknown>(paramsupplier: () => V): CacheLoader<Object, V>;
    constructor(level: LevelReader, loadChunks: boolean)
    // private level: LevelReader;
    // private loadChunks: boolean;
    load(key: BlockPos): BlockInWorld;
}