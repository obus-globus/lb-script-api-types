import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AdvancementNode } from '../../../../net/minecraft/advancements/AdvancementNode.d.ts'
export interface AdvancementVisibilityEvaluator$Output extends Object{
    accept(advancement: AdvancementNode, visible: boolean): void;
}