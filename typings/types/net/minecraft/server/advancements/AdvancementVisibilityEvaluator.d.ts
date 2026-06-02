import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AdvancementNode } from '../../../../net/minecraft/advancements/AdvancementNode.d.ts'
import type { AdvancementVisibilityEvaluator$Output } from '../../../../net/minecraft/server/advancements/AdvancementVisibilityEvaluator$Output.d.ts'
export class AdvancementVisibilityEvaluator extends Object {
    static evaluateVisibility(paramnode: AdvancementNode, paramisDone: (param0: AdvancementNode) => kotlin.Boolean, paramoutput: (param0: AdvancementNode, param1: boolean) => void): void;
    constructor()
}