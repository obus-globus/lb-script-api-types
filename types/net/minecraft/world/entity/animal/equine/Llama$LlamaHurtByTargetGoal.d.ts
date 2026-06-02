import type { HurtByTargetGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/target/HurtByTargetGoal.d.ts'
import type { Llama } from '../../../../../../net/minecraft/world/entity/animal/equine/Llama.d.ts'
export class Llama$LlamaHurtByTargetGoal extends HurtByTargetGoal {
    constructor(llama: Llama)
    canContinueToUse(): boolean;
}