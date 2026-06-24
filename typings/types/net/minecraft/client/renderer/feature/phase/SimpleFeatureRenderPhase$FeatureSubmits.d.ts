import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FeatureRendererType } from '../../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { SubmitNode } from '../../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
export class SimpleFeatureRenderPhase$FeatureSubmits<Submit extends SubmitNode> extends Object {
    private constructor(featureType: FeatureRendererType<Submit>)
    // private batches: Map<Object, Submit[]>;
    // private featureType: FeatureRendererType<Submit>;
    // private unbatched: Submit[];
    add(submit: Submit): void;
    addUnchecked(submit: SubmitNode): void;
    clear(): void;
    isEmpty(): boolean;
}