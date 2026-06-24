import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FeatureRenderPhase$Output } from '../../../../../../net/minecraft/client/renderer/feature/phase/FeatureRenderPhase$Output.d.ts'
import type { SubmitNode } from '../../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
export interface FeatureRenderPhase<Submit extends SubmitNode> extends Object {
    isEmpty(): boolean;
    sortInto(output: (param0: SubmitNode, param1: boolean) => void): void;
    submit(submit: Submit): void;
}