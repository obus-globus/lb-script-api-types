import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DoubleFaceConsumer } from '../../../../../net/ccbluex/liquidbounce/utils/math/DoubleFaceConsumer.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Shapes$DoubleLineConsumer } from '../../../../../net/minecraft/world/phys/shapes/Shapes$DoubleLineConsumer.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class ShapeExtensionsKt extends Object {
    static allEmpty(iterable: VoxelShape[]): boolean;
    static anyNotEmpty(iterable: VoxelShape[]): boolean;
    /**
     * @returns null if shape is empty
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeExtensions.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeExtensions.kt:54}
     */
    static boundsOrNull(voxelShape: VoxelShape): AABB;
    static clipAllBoxes(voxelShape: VoxelShape, base: BlockPos, from: Vec3, to: Vec3): Vec3[];
    static distanceToSqr(voxelShape: VoxelShape, position: Vec3): number;
    static forAllFaces(voxelShape: VoxelShape, action: DoubleFaceConsumer): void;
    static forAllSideFaces(voxelShape: VoxelShape, side: Direction, hitPos: Vec3, action: DoubleFaceConsumer): void;
    static forAllSideOutlineEdges(voxelShape: VoxelShape, side: Direction, hitPos: Vec3, action: Shapes$DoubleLineConsumer): void;
    static ifEmpty(voxelShape: VoxelShape, defaultValue: () => VoxelShape): VoxelShape;
    static orEmpty(paramarg0: VoxelShape): VoxelShape;
    /**
     * Shrinks a {@link VoxelShape} by the specified amounts on selected axes.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeExtensions.kt#L164 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeExtensions.kt:164}
     */
    static shrink(voxelShape: VoxelShape, x: number, y: number, z: number): VoxelShape;
    static toAabbs(voxelShape: VoxelShape, destination: Object[]): void;
    /**
     * Order: bigger first
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeExtensions.kt#L78 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/ShapeExtensions.kt:78}
     */
    static toSortedAabbs(voxelShape: VoxelShape): AABB[];
}