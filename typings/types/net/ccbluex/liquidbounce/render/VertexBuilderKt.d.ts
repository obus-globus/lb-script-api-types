import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { PoseStack$Pose } from '../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { VertexConsumer } from '../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CachedMeshStorage } from '../../../../net/ccbluex/liquidbounce/render/CachedMeshStorage.d.ts'
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
    static addBoxFaces(self: VertexConsumer, pose: Matrix4fc, box: AABB, color: Color4b | null, verticesToUse: number): void;
    static addBoxOutlines(self: VertexConsumer, pose: Matrix4fc, box: AABB, color: Color4b | null, verticesToUse: number): void;
    static addShapeFaces(self: VertexConsumer, pose: Matrix4fc, shape: VoxelShape, color: Color4b | null): void;
    static addShapeOutlines(self: VertexConsumer, pose: Matrix4fc, shape: VoxelShape, color: Color4b | null): void;
    static addShapeSideFaces(self: VertexConsumer, pose: Matrix4fc, shape: VoxelShape, side: Direction, hitPos: Vec3, color: Color4b | null): void;
    static addShapeSideOutlines(self: VertexConsumer, pose: Matrix4fc, shape: VoxelShape, side: Direction, hitPos: Vec3, color: Color4b | null): void;
    static addVertex(self: VertexConsumer, pose: PoseStack$Pose, x: number, y: number, z: number): VertexConsumer;
    static addVertex(self: VertexConsumer, pose: PoseStack$Pose, pos: Vec3f): VertexConsumer;
    static addVertex(self: VertexConsumer, pose: PoseStack$Pose, pos: Vec3): VertexConsumer;
    static addVertex(self: VertexConsumer, pose: PoseStack$Pose, pos: Vector3fc): VertexConsumer;
    static addVertex(self: VertexConsumer, pose: Matrix4fc, x: number, y: number, z: number): VertexConsumer;
    static addVertex(self: VertexConsumer, pose: Matrix4fc, pos: Vec3f): VertexConsumer;
    static addVertex(self: VertexConsumer, pose: Matrix4fc, pos: Vec3): VertexConsumer;
    static addVertex(self: VertexConsumer, pose: Matrix4fc, pos: Vector3fc): VertexConsumer;
    /**
     * Build new mesh data and upload it.
     *
     * @param origin a preferred origin; the lambda receives the resolved origin that must be used for relative vertex positions.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/render/VertexBuilder.kt#L233 | src/main/kotlin/net/ccbluex/liquidbounce/render/VertexBuilder.kt:233}
     */
    static buildMesh(self: CachedMeshStorage, pipeline: RenderPipeline, origin: BlockPos, block: (param0: VertexConsumer, param1: PoseStack, param2: BlockPos) => void): void;
    static setColor(self: VertexConsumer, color: Color4b): VertexConsumer;
    static setNormal(self: VertexConsumer, pose: PoseStack$Pose, normalVector: Vec3f): VertexConsumer;
}