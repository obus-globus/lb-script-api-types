import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { SubmitNode } from '../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
import type { DrawableGizmoPrimitives$Group } from '../../../../../net/minecraft/client/renderer/gizmos/DrawableGizmoPrimitives$Group.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
export class GizmoFeatureRenderer$Submit extends Record implements SubmitNode {
    constructor(group: DrawableGizmoPrimitives$Group, camera: CameraRenderState)
    // private camera: CameraRenderState;
    // private group: DrawableGizmoPrimitives$Group;
    camera(): CameraRenderState;
    equals(o: Object | null): boolean;
    featureType(): FeatureRendererType<GizmoFeatureRenderer$Submit>;
    group(): DrawableGizmoPrimitives$Group;
    hashCode(): number;
    toString(): string;
}