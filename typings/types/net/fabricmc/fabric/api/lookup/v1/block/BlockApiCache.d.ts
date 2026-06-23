import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockApiLookup } from '../../../../../../../net/fabricmc/fabric/api/lookup/v1/block/BlockApiLookup.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { BlockEntity } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface BlockApiCache<A extends unknown, C extends unknown> extends Object{
    find(arg0: C): A;
    find(arg0: BlockState, arg1: C): A;
    getBlockEntity(): BlockEntity;
    getLevel(): ServerLevel;
    getLookup(): BlockApiLookup<A, C>;
    getPos(): BlockPos;
}