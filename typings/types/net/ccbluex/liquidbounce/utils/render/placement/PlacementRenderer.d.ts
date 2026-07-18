import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { ToggleableValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { Color4b } from '../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Easing } from '../../../../../../net/ccbluex/liquidbounce/utils/math/Easing.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
/**
 * Render boxes, manages fade-in/-out and culling.
 *
 * Modules that want to provide a color not set in here can simply extend this class, register all settings except for
 * the color settings, and override the color getters as needed.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.kt:42}
 */
export class PlacementRenderer extends ToggleableValueGroup {
    constructor(name: string, enabled: boolean, module: EventListener, keep: boolean, clump: boolean, defaultColor: Color4b)
    readonly clump: boolean;
    readonly colorSetting: Color4b;
    readonly endSize: number;
    readonly endSizeCurve: Easing;
    readonly fadeInCurve: Easing;
    readonly fadeOutCurve: Easing;
    readonly inTime: number;
    readonly keep: boolean;
    readonly module: EventListener;
    // private outAnimationsFinished: boolean;
    readonly outTime: number;
    readonly outlineColorSetting: Color4b;
    // private placementRenderHandlers: JavaMap<any, any>;
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private repeatable: EventHook<GameTickEvent>;
    /**
     * Only run when the module and this is enabled or out-animations are running.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.kt#L190 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.kt:190}
     */
    readonly running: boolean;
    readonly startSize: number;
    readonly startSizeCurve: Easing;
    readonly worldChangeHandler: EventHook<WorldChangeEvent>;
    /**
     * Adds a block to be rendered. First it will make an appear-animation, then
     * it will continue to get rendered until it's removed or the world changes.
     *
     * @param pos The position, can be {@link BlockPos.MutableBlockPos}.
     * @param handlerId To which handler the block should be added.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.kt#L103 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.kt:103}
     */
    addBlock(pos: BlockPos, update: boolean, box: AABB, handlerId: number): void;
    /**
     * Puts all currently rendered positions in the out-animation state and keeps it being rendered until
     * all animations have been finished even though the module might be already disabled.
     *
     * Performed on all handlers in this renderer.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.kt#L167 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.kt:167}
     */
    clearSilently(): void;
    /**
     * Returns the box color.
     *
     * @param id The handler requesting the color.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.kt#L198 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.kt:198}
     */
    getColor(id: number): Color4b;
    /**
     * Returns the outline color.
     *
     * @param id The handler requesting the color.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.kt#L205 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.kt:205}
     */
    getOutlineColor(id: number): Color4b;
    onDisabled(): void;
    /**
     * Removes a block from the rendering, it will get an out animation tho.
     *
     * @param pos The position, can be {@link BlockPos.MutableBlockPos}.
     * @param handlerId From which handler the block should be removed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.kt#L119 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.kt:119}
     */
    removeBlock(pos: BlockPos, handlerId: number): void;
    /**
     * Updates all culling data.
     *
     * This can be useful to reduce overhead when adding a bunch of positions,
     * so that positions don't get updated multiple times.
     *
     * @param handlerId On which handler the update should be performed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.kt#L136 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.kt:136}
     */
    updateAll(handlerId: number): void;
    /**
     * Updates the box of {@link pos} to {@link box}.
     *
     * This method won't affect positions that are in the state of fading out.
     *
     * @param handlerId On which handler the update should be performed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.kt#L152 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.kt:152}
     */
    updateBox(pos: BlockPos, box: AABB, handlerId: number): void;
}