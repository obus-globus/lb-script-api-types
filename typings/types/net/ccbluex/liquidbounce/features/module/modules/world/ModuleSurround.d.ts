import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { KeyboardKeyEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/KeyboardKeyEvent.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerNetworkMovementTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerNetworkMovementTickEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleSurround$DisableOn } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/ModuleSurround$DisableOn.d.ts'
import type { ModuleSurround$Features } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/ModuleSurround$Features.d.ts'
import type { BlockPlacer } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.d.ts'
import type { Filter } from '../../../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { InputBind } from '../../../../../../../net/ccbluex/liquidbounce/utils/input/InputBind.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction$Axis } from '../../../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { AABB } from '../../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vector2d } from '../../../../../../../org/joml/Vector2d.d.ts'
/**
 * Surround module
 *
 * Builds safe holes.
 *
 * @author ccetl
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleSurround.kt#L66 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleSurround.kt:66}
 */
export class ModuleSurround extends ClientModule {
    static INSTANCE: ModuleSurround;
    // private DEFAULT_BLOCKS: Block[];
    // private addExtraLayer: InputBind;
    // private /*not mapped: */ getAddExtraLayer(): InputBind;
    // private addExtraLayerBlocks: boolean;
    // private blockUpdateHandler: EventHook<PacketEvent>;
    // private blocks: Block[];
    // private /*not mapped: */ getBlocks(): Block[];
    // private centerPos: Vector2d;
    // private disableOn: ModuleSurround$DisableOn[];
    // private /*not mapped: */ getDisableOn(): ModuleSurround$DisableOn[];
    // private features: ModuleSurround$Features[];
    // private /*not mapped: */ getFeatures(): ModuleSurround$Features[];
    // private filter: Filter;
    // private /*not mapped: */ getFilter(): Filter;
    // private instant: boolean;
    // private /*not mapped: */ getInstant(): boolean;
    readonly keyHandler: EventHook<KeyboardKeyEvent>;
    // private placer: BlockPlacer;
    // private startY: number;
    // private targetUpdater: EventHook<RotationUpdateEvent>;
    // private tickMoveHandler: EventHook<PlayerNetworkMovementTickEvent>;
    // private getEntitySurround(entity: Entity, list: BlockPos[], blocked: BlockPos[], y: number, down: boolean): void;
    // private getMax(boundingBox: AABB, axis: Direction$Axis): number;
    onDisabled(): void;
    onEnabled(): void;
}