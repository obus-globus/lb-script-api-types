import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { PoiManager } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiManager.d.ts'
export interface PoiOrdering extends Object{
    checkOrderOrThrow(arg0: BlockPos, arg1: PoiManager, arg2: BlockPos[]): void;
    compare(arg0: BlockPos, arg1: PoiManager, arg2: BlockPos, arg3: BlockPos): number;
    getAsComparator(arg0: BlockPos, arg1: PoiManager): (param0: BlockPos) => kotlin.Boolean;
    isOrdered(arg0: BlockPos, arg1: PoiManager, arg2: BlockPos[]): boolean;
}