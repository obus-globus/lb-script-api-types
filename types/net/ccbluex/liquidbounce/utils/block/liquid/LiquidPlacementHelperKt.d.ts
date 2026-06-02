import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PlacementPlan } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/PlacementPlan.d.ts'
import type { HotbarItemSlot } from '../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class LiquidPlacementHelperKt extends Object {
    static planPlacementAtPos(paramarg0: BlockPos, paramarg1: HotbarItemSlot, paramarg2: Vec3): PlacementPlan;
}