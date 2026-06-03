import type { PoseStack$Pose } from '../../../../../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { QuadInstance } from '../../../../../../../../../com/mojang/blaze3d/vertex/QuadInstance.d.ts'
import type { VertexConsumer } from '../../../../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ChunkModelBuilder } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/buffers/ChunkModelBuilder.d.ts'
import type { Material } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/material/Material.d.ts'
import type { TranslucentGeometryCollector } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/TranslucentGeometryCollector.d.ts'
import type { ChunkVertexEncoder$Vertex } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexEncoder$Vertex.d.ts'
import type { BlockSensitiveBufferBuilder } from '../../../../../../../../../net/irisshaders/iris/vertices/BlockSensitiveBufferBuilder.d.ts'
import type { BakedQuad } from '../../../../../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { Matrix3x2fc } from '../../../../../../../../../org/joml/Matrix3x2fc.d.ts'
import type { Matrix4fc } from '../../../../../../../../../org/joml/Matrix4fc.d.ts'
import type { Vector3fc } from '../../../../../../../../../org/joml/Vector3fc.d.ts'
export class ChunkVertexConsumer extends Object implements VertexConsumer, BlockSensitiveBufferBuilder {
    constructor(arg0: ChunkModelBuilder)
    // private collector: TranslucentGeometryCollector;
    // private material: Material;
    // private modelBuilder: ChunkModelBuilder;
    // private vertexIndex: number;
    // private vertices: ChunkVertexEncoder$Vertex[];
    // private writtenAttributes: number;
    addVertex(pose: PoseStack$Pose, x: number, y: number, z: number): VertexConsumer;
    addVertex(pose: PoseStack$Pose, position: Vector3fc): VertexConsumer;
    addVertex(x: number, y: number, z: number, color: number, u: number, v: number, overlayCoords: number, lightCoords: number, nx: number, ny: number, nz: number): void;
    addVertex(arg0: Matrix4fc, arg1: number, arg2: number, arg3: number): VertexConsumer;
    addVertex(position: Vector3fc): VertexConsumer;
    addVertex(pose: PoseStack$Pose, x: number, y: number, z: number): VertexConsumer;
    addVertex(pose: PoseStack$Pose, position: Vector3fc): VertexConsumer;
    addVertex(arg0: number, arg1: number, arg2: number): VertexConsumer;
    addVertex(x: number, y: number, z: number, color: number, u: number, v: number, overlayCoords: number, lightCoords: number, nx: number, ny: number, nz: number): void;
    addVertex(arg0: Matrix4fc, arg1: number, arg2: number, arg3: number): VertexConsumer;
    addVertex(position: Vector3fc): VertexConsumer;
    addVertexWith2DPose(pose: Matrix3x2fc, x: number, y: number): VertexConsumer;
    beginBlock(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    // private calculateNormal(): number;
    endBlock(): void;
    ignoreMidBlock(arg0: boolean): void;
    overrideBlock(arg0: number): void;
    potentiallyEndVertex(): VertexConsumer;
    putBakedQuad(pose: PoseStack$Pose, quad: BakedQuad, instance: QuadInstance): void;
    putBlockBakedQuad(x: number, y: number, z: number, quad: BakedQuad, instance: QuadInstance): void;
    restoreBlock(): void;
    setColor(r: number, g: number, b: number, a: number): VertexConsumer;
    setColor(arg0: number, arg1: number, arg2: number, arg3: number): VertexConsumer;
    setColor(arg0: number): VertexConsumer;
    setColor(arg0: number, arg1: number, arg2: number, arg3: number): VertexConsumer;
    setData(arg0: Material, arg1: TranslucentGeometryCollector): void;
    setLight(packedLightCoords: number): VertexConsumer;
    setLight(arg0: number): VertexConsumer;
    setLineWidth(arg0: number): VertexConsumer;
    setNormal(arg0: PoseStack$Pose, arg1: number, arg2: number, arg3: number): VertexConsumer;
    setNormal(pose: PoseStack$Pose, normal: Vector3fc): VertexConsumer;
    setNormal(arg0: PoseStack$Pose, arg1: number, arg2: number, arg3: number): VertexConsumer;
    setNormal(pose: PoseStack$Pose, normal: Vector3fc): VertexConsumer;
    setNormal(arg0: number, arg1: number, arg2: number): VertexConsumer;
    setOverlay(packedOverlayCoords: number): VertexConsumer;
    setOverlay(arg0: number): VertexConsumer;
    setUv(arg0: number, arg1: number): VertexConsumer;
    setUv1(arg0: number, arg1: number): VertexConsumer;
    setUv2(arg0: number, arg1: number): VertexConsumer;
}