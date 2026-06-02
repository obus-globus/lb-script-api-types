import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockApiCacheImpl } from '../../../../../../net/fabricmc/fabric/impl/lookup/block/BlockApiCacheImpl.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
export interface ServerLevelCache extends Object{
    fabric_invalidateCache(arg0: BlockPos): void;
    fabric_registerCache(arg0: BlockPos, arg1: BlockApiCacheImpl<Object, Object>): void;
}