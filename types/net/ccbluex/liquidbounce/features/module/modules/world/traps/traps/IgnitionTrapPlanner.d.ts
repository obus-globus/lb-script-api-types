import type { EventListener } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { BlockChangeIntent } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/traps/BlockChangeIntent.d.ts'
import type { IgnitionTrapPlanner$IgnitionIntentData } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/traps/traps/IgnitionTrapPlanner$IgnitionIntentData.d.ts'
import type { TrapPlanner } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/traps/traps/TrapPlanner.d.ts'
import type { BlockPlacementTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockPlacementTarget.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { LivingEntity } from '../../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Item } from '../../../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockHitResult } from '../../../../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class IgnitionTrapPlanner extends TrapPlanner<IgnitionTrapPlanner$IgnitionIntentData> {
    constructor(parent: EventListener)
    // private trapItems: Item[];
    // private /*not mapped: */ getTrapItems(): Item[];
    // private trapWorthyBlocks: Block[];
    // private /*not mapped: */ getTrapWorthyBlocks(): Block[];
    // private generatePlacementInfo(targetPos: Vec3, target: LivingEntity, slot: HotbarItemSlot): BlockPlacementTarget | null;
    onIntentFulfilled(intent: BlockChangeIntent<IgnitionTrapPlanner$IgnitionIntentData>): void;
    plan(enemies: LivingEntity[]): BlockChangeIntent<IgnitionTrapPlanner$IgnitionIntentData> | null;
    validate(plan: BlockChangeIntent<IgnitionTrapPlanner$IgnitionIntentData>, raycast: BlockHitResult): boolean;
}