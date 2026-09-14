import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DoubleFaceConsumer } from '../../../../../net/ccbluex/liquidbounce/utils/math/DoubleFaceConsumer.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Shapes$DoubleLineConsumer } from '../../../../../net/minecraft/world/phys/shapes/Shapes$DoubleLineConsumer.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class ShapeExtensionsKt extends Object {
    static allEmpty(self: VoxelShape[]): boolean;
    static anyNotEmpty(self: VoxelShape[]): boolean;
    /**
     * @returns null if shape is empty
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeExtensions.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeExtensions.kt:53}
     */
    static boundsOrNull(self: VoxelShape): AABB | null;
    static clipAllBoxes(self: VoxelShape, base: BlockPos, from: Vec3, to: Vec3): Vec3[];
    static distanceToSqr(self: VoxelShape, position: Vec3): number;
    static forAllFaces(self: VoxelShape, action: DoubleFaceConsumer): void;
    static forAllSideFaces(self: VoxelShape, side: Direction, hitPos: Vec3, action: DoubleFaceConsumer): void;
    static forAllSideOutlineEdges(self: VoxelShape, side: Direction, hitPos: Vec3, action: Shapes$DoubleLineConsumer): void;
    static ifEmpty(self: VoxelShape, defaultValue: () => VoxelShape): VoxelShape;
    static intersects(self: VoxelShape, aabb: AABB): boolean;
    static orEmpty(self: VoxelShape | null): VoxelShape;
    /**
     * Shrinks a {@link VoxelShape} by the specified amounts on selected axes.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeExtensions.kt#L172 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeExtensions.kt:172}
     */
    static shrink(self: VoxelShape, x: number, y: number, z: number): VoxelShape;
    static toAabbs(self: VoxelShape, destination: AABB[]): void;
    /**
     * Order: bigger first
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeExtensions.kt#L77 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeExtensions.kt:77}
     */
    static toSortedAabbs(self: VoxelShape): AABB[];
}