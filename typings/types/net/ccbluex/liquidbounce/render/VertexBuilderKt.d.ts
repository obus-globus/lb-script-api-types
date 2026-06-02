import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { PoseStack$Pose } from '../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { VertexConsumer } from '../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function3 } from '../../../../kotlin/jvm/functions/Function3.d.ts'
import type { StaticMeshStorage } from '../../../../net/ccbluex/liquidbounce/render/StaticMeshStorage.d.ts'
import type { Color4b } from '../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Vec3f } from '../../../../net/ccbluex/liquidbounce/render/engine/type/Vec3f.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { Matrix4fc } from '../../../../org/joml/Matrix4fc.d.ts'
import type { Vector3fc } from '../../../../org/joml/Vector3fc.d.ts'
export class VertexBuilderKt extends Object {
    static addBoxFaces(paramarg0: VertexConsumer, paramarg1: Matrix4fc, paramarg2: AABB, paramarg3: Color4b, paramarg4: number): void;
    static addBoxOutlines(paramarg0: VertexConsumer, paramarg1: Matrix4fc, paramarg2: AABB, paramarg3: Color4b, paramarg4: number): void;
    static addShapeFaces(paramarg0: VertexConsumer, paramarg1: Matrix4fc, paramarg2: VoxelShape, paramarg3: Color4b): void;
    static addShapeOutlines(paramarg0: VertexConsumer, paramarg1: Matrix4fc, paramarg2: VoxelShape, paramarg3: Color4b): void;
    static addShapeSideFaces(paramarg0: VertexConsumer, paramarg1: Matrix4fc, paramarg2: VoxelShape, paramarg3: Direction, paramarg4: Vec3, paramarg5: Color4b): void;
    static addShapeSideOutlines(paramarg0: VertexConsumer, paramarg1: Matrix4fc, paramarg2: VoxelShape, paramarg3: Direction, paramarg4: Vec3, paramarg5: Color4b): void;
    static addVertex(paramarg0: VertexConsumer, paramarg1: PoseStack$Pose, paramarg2: number, paramarg3: number, paramarg4: number): VertexConsumer;
    static addVertex(paramarg0: VertexConsumer, paramarg1: PoseStack$Pose, paramarg2: Vec3f): VertexConsumer;
    static addVertex(paramarg0: VertexConsumer, paramarg1: PoseStack$Pose, paramarg2: Vec3): VertexConsumer;
    static addVertex(paramarg0: VertexConsumer, paramarg1: PoseStack$Pose, paramarg2: Vector3fc): VertexConsumer;
    static addVertex(paramarg0: VertexConsumer, paramarg1: Matrix4fc, paramarg2: number, paramarg3: number, paramarg4: number): VertexConsumer;
    static addVertex(paramarg0: VertexConsumer, paramarg1: Matrix4fc, paramarg2: Vec3f): VertexConsumer;
    static addVertex(paramarg0: VertexConsumer, paramarg1: Matrix4fc, paramarg2: Vec3): VertexConsumer;
    static addVertex(paramarg0: VertexConsumer, paramarg1: Matrix4fc, paramarg2: Vector3fc): VertexConsumer;
    /**
     * Build new mesh data and upload it.
     * This method is designed for lazy building so {@link rotate} defaults to true.
     *
     * @param origin a preferred origin; the lambda receives the resolved origin that must be used for relative vertex positions.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/VertexBuilder.kt#L227 | src/main/kotlin/net/ccbluex/liquidbounce/render/VertexBuilder.kt:227}
     */
    static buildMesh(paramarg0: StaticMeshStorage, paramarg1: RenderPipeline, paramarg2: boolean, paramarg3: BlockPos, paramarg4: Function3<Object, Object, Object, void>): void;
    static setColor(paramarg0: VertexConsumer, paramarg1: Color4b): VertexConsumer;
    static setNormal(paramarg0: VertexConsumer, paramarg1: PoseStack$Pose, paramarg2: Vec3f): VertexConsumer;
}