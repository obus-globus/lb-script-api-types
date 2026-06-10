import type { BiPredicate } from '../../../../../../../java/util/function/BiPredicate.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkAccess } from '../../../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
export interface LithiumMoveToBlockGoal extends Object {
    lithium$findNearestBlock(arg0: (param0: BlockState) => boolean, arg1: (param0: ChunkAccess, param1: BlockPos$MutableBlockPos) => boolean, arg2: boolean): boolean;
}