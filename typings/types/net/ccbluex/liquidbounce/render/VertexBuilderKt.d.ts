import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
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
    static addBoxFaces(vertexConsumer: VertexConsumer, pose: Matrix4fc, box: AABB, color: Color4b, verticesToUse: number): void;
    static addBoxOutlines(vertexConsumer: VertexConsumer, pose: Matrix4fc, box: AABB, color: Color4b, verticesToUse: number): void;
    static addShapeFaces(vertexConsumer: VertexConsumer, pose: Matrix4fc, shape: VoxelShape, color: Color4b): void;
    static addShapeOutlines(vertexConsumer: VertexConsumer, pose: Matrix4fc, shape: VoxelShape, color: Color4b): void;
    static addShapeSideFaces(vertexConsumer: VertexConsumer, pose: Matrix4fc, shape: VoxelShape, side: Direction, hitPos: Vec3, color: Color4b): void;
    static addShapeSideOutlines(vertexConsumer: VertexConsumer, pose: Matrix4fc, shape: VoxelShape, side: Direction, hitPos: Vec3, color: Color4b): void;
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
     *
     * @param origin a preferred origin; the lambda receives the resolved origin that must be used for relative vertex positions.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/render/VertexBuilder.kt#L233 | src/main/kotlin/net/ccbluex/liquidbounce/render/VertexBuilder.kt:233}
     */
    static buildMesh(cachedMeshStorage: CachedMeshStorage, pipeline: RenderPipeline, origin: BlockPos, block: (param0: Object, param1: Object, param2: Object) => void): void;
    static setColor(vertexConsumer: VertexConsumer, color: Color4b): VertexConsumer;
    static setNormal(vertexConsumer: VertexConsumer, pose: PoseStack$Pose, normalVector: Vec3f): VertexConsumer;
}