import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPlacementTarget } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockPlacementTarget.d.ts'
import type { HotbarItemSlot } from '../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockHitResult } from '../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
export class PlacementPlan extends Object {
    constructor(targetPos: BlockPos, placementTarget: BlockPlacementTarget, hotbarItemSlot: HotbarItemSlot)
    readonly hotbarItemSlot: HotbarItemSlot;
    readonly placementTarget: BlockPlacementTarget;
    readonly targetPos: BlockPos;
    doesCorrespondTo(rayTraceResult: BlockHitResult, sideMustMatch: boolean): boolean;
}