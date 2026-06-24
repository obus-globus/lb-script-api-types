import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FeatureFrameContext } from '../../../../../net/minecraft/client/renderer/feature/FeatureFrameContext.d.ts'
import type { FeatureRendererMap } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererMap.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { SubmitNode } from '../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
export class FeatureRenderDispatcher$PreparedGroup<Submit extends SubmitNode> extends Object {
    constructor(featureGroupIndex: number, featureType: FeatureRendererType<Submit>, strictlyOrdered: boolean, fromInclusive: number, toInclusive: number)
    // private featureGroupIndex: number;
    // private featureType: FeatureRendererType<Submit>;
    // private fromInclusive: number;
    // private strictlyOrdered: boolean;
    // private toInclusive: number;
    execute(context: FeatureFrameContext, featureRenderers: FeatureRendererMap, submits: SubmitNode[]): void;
    prepare(context: FeatureFrameContext, featureRenderers: FeatureRendererMap, submits: SubmitNode[]): void;
    // private sliceUnchecked(submits: SubmitNode[]): Submit[];
}