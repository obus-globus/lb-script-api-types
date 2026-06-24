import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FeatureRendererType } from '../../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { SubmitNode } from '../../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
export interface BatchableSubmit extends Object, SubmitNode{
    batchKey(): Object;
    featureType(): FeatureRendererType<BatchableSubmit>;
}