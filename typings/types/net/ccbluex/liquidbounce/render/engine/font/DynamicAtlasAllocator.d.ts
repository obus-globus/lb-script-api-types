import type { Dimension } from '../../../../../../java/awt/Dimension.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AtlasSlice } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/AtlasSlice.d.ts'
import type { AtlasSliceHandle } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/AtlasSliceHandle.d.ts'
export class DynamicAtlasAllocator extends Object {
    constructor(dimension: Dimension, verticalCutSize: number, minDimension: Dimension)
    readonly availableSlices: AtlasSlice[];
    readonly dimension: Dimension;
    /**
     * The minimal dimension of a slice. If a cut would be smaller than this, it will be made available.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/DynamicAtlasAllocator.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/DynamicAtlasAllocator.kt:35}
     */
    readonly minDimension: Dimension;
    /**
     * In order to reduce the fragmentation the allocator will cut the texture into slices.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/DynamicAtlasAllocator.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/DynamicAtlasAllocator.kt:31}
     */
    readonly verticalCutSize: number;
    allocate(dimension: Dimension): AtlasSliceHandle | null;
    free(handle: AtlasSliceHandle): void;
    // private removeChildrenRecursively(highestUnallocatedParent: AtlasSlice): void;
    // private tryCutSlice(slice: AtlasSlice, dimension: Dimension): AtlasSlice[] | null;
    updateParentAllocationStatusRecursively(parent: AtlasSlice): AtlasSlice | null;
}