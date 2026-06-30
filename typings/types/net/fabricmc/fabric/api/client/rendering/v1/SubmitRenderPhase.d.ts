import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SubmitNodeCollection } from '../../../../../../../net/minecraft/client/renderer/SubmitNodeCollection.d.ts'
import type { FeatureRenderPhase } from '../../../../../../../net/minecraft/client/renderer/feature/phase/FeatureRenderPhase.d.ts'
import type { SubmitNode } from '../../../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
export class SubmitRenderPhase<T extends SubmitNode> extends Object {
    constructor(arg0: (param0: SubmitNodeCollection) => FeatureRenderPhase<T>)
    // private phaseGetter: (param0: SubmitNodeCollection) => FeatureRenderPhase<T>;
    submit(arg0: SubmitNodeCollection, arg1: T): void;
}