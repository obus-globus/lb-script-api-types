import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FeatureRenderPhase } from '../../../../../../net/minecraft/client/renderer/feature/phase/FeatureRenderPhase.d.ts'
import type { FeatureRenderPhase$Output } from '../../../../../../net/minecraft/client/renderer/feature/phase/FeatureRenderPhase$Output.d.ts'
import type { SimpleFeatureRenderPhase$FeatureSubmits } from '../../../../../../net/minecraft/client/renderer/feature/phase/SimpleFeatureRenderPhase$FeatureSubmits.d.ts'
import type { SubmitNode } from '../../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
export class SimpleFeatureRenderPhase extends Object implements FeatureRenderPhase<SubmitNode> {
    constructor()
    // private submitsByFeature: SimpleFeatureRenderPhase$FeatureSubmits<any>[];
    clear(): void;
    isEmpty(): boolean;
    sortInto(output: (param0: SubmitNode, param1: boolean) => void): void;
    submit(submit: SubmitNode): void;
}