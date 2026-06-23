import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockEntity } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface BlockApiLookup$BlockApiProvider<A extends unknown, C extends unknown> extends Object{
    find(arg0: Level, arg1: BlockPos, arg2: BlockState, arg3: BlockEntity, arg4: C): A;
}