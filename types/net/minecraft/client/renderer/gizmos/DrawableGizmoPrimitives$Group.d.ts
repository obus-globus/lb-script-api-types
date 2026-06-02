import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MultiBufferSource } from '../../../../../net/minecraft/client/renderer/MultiBufferSource.d.ts'
import type { DrawableGizmoPrimitives$Line } from '../../../../../net/minecraft/client/renderer/gizmos/DrawableGizmoPrimitives$Line.d.ts'
import type { DrawableGizmoPrimitives$Point } from '../../../../../net/minecraft/client/renderer/gizmos/DrawableGizmoPrimitives$Point.d.ts'
import type { DrawableGizmoPrimitives$Quad } from '../../../../../net/minecraft/client/renderer/gizmos/DrawableGizmoPrimitives$Quad.d.ts'
import type { DrawableGizmoPrimitives$Text } from '../../../../../net/minecraft/client/renderer/gizmos/DrawableGizmoPrimitives$Text.d.ts'
import type { DrawableGizmoPrimitives$TriangleFan } from '../../../../../net/minecraft/client/renderer/gizmos/DrawableGizmoPrimitives$TriangleFan.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export class DrawableGizmoPrimitives$Group extends Record {
    // private lines: DrawableGizmoPrimitives$Line[];
    // private opaque: boolean;
    // private points: DrawableGizmoPrimitives$Point[];
    // private quads: DrawableGizmoPrimitives$Quad[];
    // private texts: DrawableGizmoPrimitives$Text[];
    // private triangleFans: DrawableGizmoPrimitives$TriangleFan[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    lines(): DrawableGizmoPrimitives$Line[];
    opaque(): boolean;
    points(): DrawableGizmoPrimitives$Point[];
    quads(): DrawableGizmoPrimitives$Quad[];
    render(poseStack: PoseStack, bufferSource: MultiBufferSource, camera: CameraRenderState, modelViewMatrix: Matrix4fc): void;
    // private renderLines(poseStack: PoseStack, bufferSource: MultiBufferSource, camera: CameraRenderState, modelViewMatrix: Matrix4fc): void;
    // private renderPoints(poseStack: PoseStack, bufferSource: MultiBufferSource, camera: CameraRenderState): void;
    // private renderQuads(poseStack: PoseStack, bufferSource: MultiBufferSource, camera: CameraRenderState): void;
    // private renderTexts(poseStack: PoseStack, bufferSource: MultiBufferSource, camera: CameraRenderState): void;
    // private renderTriangleFans(poseStack: PoseStack, bufferSource: MultiBufferSource, camera: CameraRenderState): void;
    texts(): DrawableGizmoPrimitives$Text[];
    toString(): string;
    triangleFans(): DrawableGizmoPrimitives$TriangleFan[];
}