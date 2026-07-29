import type { BooleanDoubleImmutablePair } from '../../../../../../../it/unimi/dsi/fastutil/booleans/BooleanDoubleImmutablePair.d.ts'
import type { DoubleLongPair } from '../../../../../../../it/unimi/dsi/fastutil/doubles/DoubleLongPair.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleHoleFiller$Features } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/ModuleHoleFiller$Features.d.ts'
import type { ModuleHoleFiller$HoleContext } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/ModuleHoleFiller$HoleContext.d.ts'
import type { Hole } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/hole/Hole.d.ts'
import type { HoleManagerSubscriber } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/hole/HoleManagerSubscriber.d.ts'
import type { BlockPlacer } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.d.ts'
import type { Filter } from '../../../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BoundingBox } from '../../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
/**
 * Module HoleFiller
 *
 * Automatically fills holes.
 *
 * @author ccetl
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleHoleFiller.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleHoleFiller.kt:58}
 */
export class ModuleHoleFiller extends ClientModule implements HoleManagerSubscriber {
    static INSTANCE: ModuleHoleFiller;
    // private blocks: Block[];
    // private /*not mapped: */ getBlocks(): Block[];
    // private features: ModuleHoleFiller$Features[];
    // private /*not mapped: */ getFeatures(): ModuleHoleFiller$Features[];
    // private fillArea: number;
    // private /*not mapped: */ getFillArea(): number;
    // private filter: Filter;
    // private /*not mapped: */ getFilter(): Filter;
    // private placer: BlockPlacer;
    // private /*not mapped: */ getRange(): number;
    // private targetUpdater: EventHook<RotationUpdateEvent>;
    // private collectHolesSimple(holeContext: ModuleHoleFiller$HoleContext): void;
    // private collectHolesSmart(range: number, holeContext: ModuleHoleFiller$HoleContext, availableItems: number): void;
    // private getAvailableItemsCount(): number;
    horizontalDistance(): number;
    // private isMovingTowardsHole(hole: Hole, entity: Entity): BooleanDoubleImmutablePair;
    // private isValidHole(hole: Hole, entity: Entity, region: BoundingBox, selfInHole: boolean, selfRegion: BoundingBox): BooleanDoubleImmutablePair;
    // private iterateHoles(holeContext: ModuleHoleFiller$HoleContext, checkedHoles: Hole[], entity: Entity, remainingItems: number, found: DoubleLongPair[]): number;
    onDisabled(): void;
    onEnabled(): void;
    verticalDistance(): number;
}