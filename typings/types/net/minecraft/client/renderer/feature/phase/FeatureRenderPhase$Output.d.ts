import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FeatureRendererType } from '../../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { SubmitNode } from '../../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
export interface FeatureRenderPhase$Output extends Object{
    accept(submit: SubmitNode, strictlyOrdered: boolean): void;
    acceptFeatureGroup<Submit extends SubmitNode>(featureType: FeatureRendererType<Submit>, submits: Submit[], strictlyOrdered: boolean): void;
}