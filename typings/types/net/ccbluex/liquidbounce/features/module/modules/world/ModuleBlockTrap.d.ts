import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleBlockTrap$DoublePlace } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockTrap$DoublePlace.d.ts'
import type { ModuleBlockTrap$PlaceAt } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockTrap$PlaceAt.d.ts'
import type { ModuleBlockTrap$PlacePriority } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockTrap$PlacePriority.d.ts'
import type { BlockPlacer } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.d.ts'
import type { Filter } from '../../../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { TargetTracker } from '../../../../../../../net/ccbluex/liquidbounce/utils/combat/TargetTracker.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
/**
 * Module BlockTrap
 *
 * Traps enemies in blocks.
 *
 * @author ccetl
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockTrap.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockTrap.kt:51}
 */
export class ModuleBlockTrap extends ClientModule {
    static INSTANCE: ModuleBlockTrap;
    // private blockUpdateHandler: EventHook<PacketEvent>;
    // private blocks: Block[];
    // private /*not mapped: */ getBlocks(): Block[];
    // private doublePlace: ModuleBlockTrap$DoublePlace[];
    // private /*not mapped: */ getDoublePlace(): ModuleBlockTrap$DoublePlace[];
    // private filter: Filter;
    // private /*not mapped: */ getFilter(): Filter;
    // private instant: boolean;
    // private /*not mapped: */ getInstant(): boolean;
    // private placeAt: ModuleBlockTrap$PlaceAt[];
    // private /*not mapped: */ getPlaceAt(): ModuleBlockTrap$PlaceAt[];
    // private placePriority: ModuleBlockTrap$PlacePriority;
    // private /*not mapped: */ getPlacePriority(): ModuleBlockTrap$PlacePriority;
    // private placer: BlockPlacer;
    // private rotationUpdateHandler: EventHook<RotationUpdateEvent>;
    // private targetTracker: TargetTracker;
    // private findTrapPlan(target: Entity): BlockPos[];
    onDisabled(): void;
    // private tweakPlan(currentPlan: BlockPos[], lowestY: number, highestY: number): BlockPos[];
}