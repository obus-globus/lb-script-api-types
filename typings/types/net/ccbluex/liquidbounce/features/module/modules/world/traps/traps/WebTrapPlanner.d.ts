import type { EventListener } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { BlockChangeIntent } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/traps/BlockChangeIntent.d.ts'
import type { TrapPlanner } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/traps/traps/TrapPlanner.d.ts'
import type { WebTrapPlanner$WebIntentData } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/traps/traps/WebTrapPlanner$WebIntentData.d.ts'
import type { BlockPlacementTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockPlacementTarget.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { LivingEntity } from '../../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Item } from '../../../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockHitResult } from '../../../../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class WebTrapPlanner extends TrapPlanner<WebTrapPlanner$WebIntentData> {
    constructor(parent: EventListener)
    // private trapItems: Item[];
    // private /*not mapped: */ getTrapItems(): Item[];
    // private trapWorthyBlocks: Block[];
    // private /*not mapped: */ getTrapWorthyBlocks(): Block[];
    // private generatePlacementInfo(targetPos: Vec3, target: LivingEntity, slot: HotbarItemSlot): BlockPlacementTarget | null;
    onIntentFulfilled(intent: BlockChangeIntent<WebTrapPlanner$WebIntentData>): void;
    plan(enemies: LivingEntity[]): BlockChangeIntent<WebTrapPlanner$WebIntentData> | null;
    validate(plan: BlockChangeIntent<WebTrapPlanner$WebIntentData>, raycast: BlockHitResult): boolean;
}