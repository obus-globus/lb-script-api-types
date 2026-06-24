import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { FeatureFrameContext } from '../../../../../net/minecraft/client/renderer/feature/FeatureFrameContext.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { GizmoFeatureRenderer$Submit } from '../../../../../net/minecraft/client/renderer/feature/GizmoFeatureRenderer$Submit.d.ts'
import type { RenderTypeFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/RenderTypeFeatureRenderer.d.ts'
import type { DrawableGizmoPrimitives$Line } from '../../../../../net/minecraft/client/renderer/gizmos/DrawableGizmoPrimitives$Line.d.ts'
import type { DrawableGizmoPrimitives$Point } from '../../../../../net/minecraft/client/renderer/gizmos/DrawableGizmoPrimitives$Point.d.ts'
import type { DrawableGizmoPrimitives$Quad } from '../../../../../net/minecraft/client/renderer/gizmos/DrawableGizmoPrimitives$Quad.d.ts'
import type { DrawableGizmoPrimitives$Text } from '../../../../../net/minecraft/client/renderer/gizmos/DrawableGizmoPrimitives$Text.d.ts'
import type { DrawableGizmoPrimitives$TriangleFan } from '../../../../../net/minecraft/client/renderer/gizmos/DrawableGizmoPrimitives$TriangleFan.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export class GizmoFeatureRenderer extends RenderTypeFeatureRenderer<GizmoFeatureRenderer$Submit> {
    static TYPE: FeatureRendererType<GizmoFeatureRenderer$Submit>;
    constructor()
    // private poseStack: PoseStack;
    buildGroup(context: FeatureFrameContext, submits: GizmoFeatureRenderer$Submit[]): void;
    // private buildLines(lines: DrawableGizmoPrimitives$Line[], camera: CameraRenderState, modelViewMatrix: Matrix4fc, opaque: boolean): void;
    // private buildPoints(points: DrawableGizmoPrimitives$Point[], camera: CameraRenderState): void;
    // private buildQuads(quads: DrawableGizmoPrimitives$Quad[], camera: CameraRenderState): void;
    // private buildTexts(texts: DrawableGizmoPrimitives$Text[], camera: CameraRenderState, font: Font): void;
    // private buildTriangleFans(triangleFans: DrawableGizmoPrimitives$TriangleFan[], camera: CameraRenderState): void;
}