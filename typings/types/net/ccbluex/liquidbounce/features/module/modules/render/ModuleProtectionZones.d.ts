import type { Sequence } from '../../../../../../../kotlin/sequences/Sequence.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { AABB } from '../../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * ProtectionZones module
 *
 * Allows you to see areas protected by protection blocks and suggests optimal placement spots.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleProtectionZones.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleProtectionZones.kt:55}
 */
export class ModuleProtectionZones extends ClientModule {
    static INSTANCE: ModuleProtectionZones;
    // private DEFAULT_CENTER_OUTLINE: Color4b;
    // private DEFAULT_INDICATOR_FILL: Color4b;
    // private DEFAULT_INDICATOR_OUTLINE: Color4b;
    // private DEFAULT_ZONE_FILL: Color4b;
    // private DEFAULT_ZONE_OUTLINE: Color4b;
    // private HIGHLIGHT_RADIUS: number;
    // private protBlocks: Block[];
    // private /*not mapped: */ getProtBlocks(): Block[];
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private computeZones(centers: BlockPos[], world: Level): AABB[];
    // private findHighlightIndex(zones: AABB[], playerPos: Vec3): number | null;
    // private isHoldingProtBlock(): boolean;
    // private nearestCenters(centers: Sequence<BlockPos>, limit: number, playerPos: Vec3): BlockPos[];
    onDisabled(): void;
    onEnabled(): void;
    // private snapToGrid(value: number, origin: number, step: number): number;
}