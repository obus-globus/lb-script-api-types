import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { WorldChangeEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { AABB } from '../../../../../../../net/minecraft/world/phys/AABB.d.ts'
/**
 * Block Outline module
 *
 * Changes the way Minecraft highlights blocks.
 *
 * TODO: Implement GUI Information Panel
 *
 * @see MixinLevelRenderer.cancelBlockOutline
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b7cc679e71b1bc95d19a1e1535f79a1c2164149e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleBlockOutline.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleBlockOutline.kt:53}
 */
export class ModuleBlockOutline extends ClientModule {
    static INSTANCE: ModuleBlockOutline;
    // private color: Color4b;
    // private /*not mapped: */ getColor(): Color4b;
    // private currentPosition: AABB | null;
    // private lastChange: number;
    // private outlineColor: Color4b;
    // private /*not mapped: */ getOutlineColor(): Color4b;
    // private previousPosition: AABB | null;
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private sideOnly: boolean;
    // private /*not mapped: */ getSideOnly(): boolean;
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    // private boxWithBoundsX(box: AABB, x: number): AABB;
    // private boxWithBoundsY(box: AABB, y: number): AABB;
    // private boxWithBoundsZ(box: AABB, z: number): AABB;
    // private flatBox(box: AABB, side: Direction): AABB;
    // private resetPositions(): void;
}