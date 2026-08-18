import type { Comparator } from '../../../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventListener } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { BlockChangeIntent } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/traps/BlockChangeIntent.d.ts'
import type { BlockIntentProvider } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/traps/BlockIntentProvider.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { EntityDimensions } from '../../../../../../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { LivingEntity } from '../../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Item } from '../../../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { AABB } from '../../../../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export abstract class TrapPlanner<T extends unknown> extends ToggleableValueGroup implements BlockIntentProvider<T> {
    constructor(parent: EventListener, name: string, enabled: boolean)
    // private /*not mapped: */ getTrapItems(): Item[];
    // private /*not mapped: */ getTrapWorthyBlocks(): Block[];
    // private findOffsetsBetween(startBox: AABB, endBox: AABB, offsetPos: BlockPos, mustBeOnGround: boolean): BlockPos[];
    protected findOffsetsForTarget(pos: Vec3, dims: EntityDimensions, velocity: Vec3, mustBeOnGround: boolean): BlockPos[];
    protected findSlotForTrap(): HotbarItemSlot | null;
    /**
     * Called during simulated tick event
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7419c75563c98eff050759c8dc8d8c35ed59d950/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/traps/traps/TrapPlanner.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/traps/traps/TrapPlanner.kt:59}
     */
    plan(enemies: LivingEntity[]): BlockChangeIntent<T> | null;
    protected targetOverlapComparator(origin: BlockPos, orderedOffsets: BlockPos[], eyePos: Vec3): (param0: BlockPos, param1: BlockPos) => number;
}