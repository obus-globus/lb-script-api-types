import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FeatureRenderPhase } from '../../../../../../net/minecraft/client/renderer/feature/phase/FeatureRenderPhase.d.ts'
import type { FeatureRenderPhase$Output } from '../../../../../../net/minecraft/client/renderer/feature/phase/FeatureRenderPhase$Output.d.ts'
import type { SubmitNode } from '../../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
import type { TranslucentSubmit } from '../../../../../../net/minecraft/client/renderer/feature/submit/TranslucentSubmit.d.ts'
export class TranslucentFeatureRenderPhase extends Object implements FeatureRenderPhase<TranslucentSubmit> {
    constructor()
    // private distances: (Object | null)[];
    // private submits: TranslucentSubmit[];
    isEmpty(): boolean;
    // private sortIndices(): number[];
    sortInto(output: (param0: SubmitNode, param1: boolean) => void): void;
    submit(submit: TranslucentSubmit): void;
}