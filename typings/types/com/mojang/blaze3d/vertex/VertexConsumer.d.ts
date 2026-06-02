import type { PoseStack$Pose } from '../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { QuadInstance } from '../../../../com/mojang/blaze3d/vertex/QuadInstance.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BakedQuad } from '../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { Matrix3x2fc } from '../../../../org/joml/Matrix3x2fc.d.ts'
import type { Matrix4fc } from '../../../../org/joml/Matrix4fc.d.ts'
import type { Vector3fc } from '../../../../org/joml/Vector3fc.d.ts'
export interface VertexConsumer extends Object{
    addVertex(pose: PoseStack$Pose, x: number, y: number, z: number): VertexConsumer;
    addVertex(pose: PoseStack$Pose, position: Vector3fc): VertexConsumer;
    addVertex(x: number, y: number, z: number): VertexConsumer;
    addVertex(x: number, y: number, z: number, color: number, u: number, v: number, overlayCoords: number, lightCoords: number, nx: number, ny: number, nz: number): void;
    addVertex(arg0: Matrix4fc, arg1: number, arg2: number, arg3: number): VertexConsumer;
    addVertex(position: Vector3fc): VertexConsumer;
    addVertexWith2DPose(pose: Matrix3x2fc, x: number, y: number): VertexConsumer;
    putBakedQuad(pose: PoseStack$Pose, quad: BakedQuad, instance: QuadInstance): void;
    putBlockBakedQuad(x: number, y: number, z: number, quad: BakedQuad, instance: QuadInstance): void;
    setColor(r: number, g: number, b: number, a: number): VertexConsumer;
    setColor(color: number): VertexConsumer;
    setColor(r: number, g: number, b: number, a: number): VertexConsumer;
    setLight(packedLightCoords: number): VertexConsumer;
    setLineWidth(width: number): VertexConsumer;
    setNormal(arg0: PoseStack$Pose, arg1: number, arg2: number, arg3: number): VertexConsumer;
    setNormal(pose: PoseStack$Pose, normal: Vector3fc): VertexConsumer;
    setNormal(x: number, y: number, z: number): VertexConsumer;
    setOverlay(packedOverlayCoords: number): VertexConsumer;
    setUv(u: number, v: number): VertexConsumer;
    setUv1(u: number, v: number): VertexConsumer;
    setUv2(u: number, v: number): VertexConsumer;
}