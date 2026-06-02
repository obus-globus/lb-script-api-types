import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface FeetBlockCachingEntity extends Object{
    lithium$OnFeetBlockCacheDeleted(): void;
    lithium$OnFeetBlockCacheSet(arg0: BlockState): void;
    lithium$SetClimbingMobCachingSectionUpdateBehavior(arg0: boolean): void;
    lithium$getCachedFeetBlockState(): BlockState;
}