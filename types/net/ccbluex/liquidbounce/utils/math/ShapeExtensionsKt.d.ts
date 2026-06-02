import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../../kotlin/jvm/functions/Function0.d.ts'
import type { DoubleFaceConsumer } from '../../../../../net/ccbluex/liquidbounce/utils/math/DoubleFaceConsumer.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Shapes$DoubleLineConsumer } from '../../../../../net/minecraft/world/phys/shapes/Shapes$DoubleLineConsumer.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class ShapeExtensionsKt extends Object {
    static allEmpty(paramarg0: (Object | null)[]): boolean;
    static anyNotEmpty(paramarg0: (Object | null)[]): boolean;
    /**
     * @returns null if shape is empty
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeExtensions.kt#L56 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeExtensions.kt:56}
     */
    static boundsOrNull(paramarg0: VoxelShape): AABB;
    static clipAllBoxes(paramarg0: VoxelShape, paramarg1: BlockPos, paramarg2: Vec3, paramarg3: Vec3): Vec3[];
    static distanceToSqr(paramarg0: VoxelShape, paramarg1: Vec3): number;
    static forAllFaces(paramarg0: VoxelShape, paramarg1: DoubleFaceConsumer): void;
    static forAllSideFaces(paramarg0: VoxelShape, paramarg1: Direction, paramarg2: Vec3, paramarg3: DoubleFaceConsumer): void;
    static forAllSideOutlineEdges(paramarg0: VoxelShape, paramarg1: Direction, paramarg2: Vec3, paramarg3: Shapes$DoubleLineConsumer): void;
    static ifEmpty(paramarg0: VoxelShape, paramarg1: Function0<Object>): VoxelShape;
    static mergeAdjacentVoxelShapes(paramarg0: E[]): (Object | null)[];
    static orEmpty(paramarg0: VoxelShape): VoxelShape;
    /**
     * Shrinks a VoxelShape by the specified amounts on selected axes.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeExtensions.kt#L165 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeExtensions.kt:165}
     */
    static shrink(paramarg0: VoxelShape, paramarg1: number, paramarg2: number, paramarg3: number): VoxelShape;
    static toAabbs(paramarg0: VoxelShape, paramarg1: E[]): void;
    /**
     * Order: bigger first
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeExtensions.kt#L80 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeExtensions.kt:80}
     */
    static toSortedAabbs(paramarg0: VoxelShape): AABB[];
}