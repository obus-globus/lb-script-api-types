import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { WorldRenderEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { BlockCuller } from '../../../../../../net/ccbluex/liquidbounce/utils/render/placement/BlockCuller.d.ts'
import type { BlockCuller$Owner } from '../../../../../../net/ccbluex/liquidbounce/utils/render/placement/BlockCuller$Owner.d.ts'
import type { PlacementRenderer } from '../../../../../../net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
/**
 * A renderer instance that can be added to a {@link PlacementRenderer}, it contains the core logic.
 * Culling is handled in each handler for its boxes individually.
 *
 * This class is not thread-safe. You can use it on the render thread. (the most recommended way)
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderHandler.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderHandler.kt:44}
 */
export class PlacementRenderHandler extends Object implements BlockCuller$Owner {
    constructor(placementRenderer: PlacementRenderer, id: number)
    // private blockPosCache: BlockPos$MutableBlockPos;
    // private blockPosCacheList: (Object | null)[];
    // private culler: BlockCuller;
    // private currentList: JavaMap<any, any>;
    readonly id: number;
    // private inList: JavaMap<any, any>;
    // private outList: JavaMap<any, any>;
    // private placementRenderer: PlacementRenderer;
    /**
     * Adds a block to be rendered. First it will make an appear-animation, then
     * it will continue to get rendered until it's removed or the world changes.
     *
     * @param pos The position, can be {@link BlockPos.MutableBlockPos}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderHandler.kt#L195 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderHandler.kt:195}
     */
    addBlock(pos: BlockPos, update: boolean, box: AABB): void;
    /**
     * Removes all stored positions.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderHandler.kt#L291 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderHandler.kt:291}
     */
    clear(): void;
    /**
     * Puts all currently rendered positions in the out-animation state and keeps it being rendered until
     * all animations have been finished even though the module might be already disabled.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderHandler.kt#L271 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderHandler.kt:271}
     */
    clearSilently(): void;
    /**
     * Checks whether the position (in long value) is rendered.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderHandler.kt#L185 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderHandler.kt:185}
     */
    contains(pos: number): boolean;
    // private getBox(expand: number, box: AABB): AABB;
    isFinished(): boolean;
    /**
     * Removes a block from the rendering, it will get an out animation tho.
     *
     * @param pos The position, can be {@link BlockPos.MutableBlockPos}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderHandler.kt#L212 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderHandler.kt:212}
     */
    removeBlock(pos: BlockPos): void;
    render(event: WorldRenderEvent, time: number): void;
    /**
     * Updates all culling data.
     *
     * This can be useful to reduce overhead when adding a bunch of positions,
     * so that positions don't get updated multiple times.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderHandler.kt#L236 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderHandler.kt:236}
     */
    updateAll(): void;
    /**
     * Updates the box of {@link pos} to {@link box}.
     *
     * This method won't affect positions that are in the state of fading out.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderHandler.kt#L255 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderHandler.kt:255}
     */
    updateBox(pos: BlockPos, box: AABB): void;
    // private updateNeighbors(pos: BlockPos): void;
}