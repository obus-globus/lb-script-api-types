import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { TargetGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/target/TargetGoal.d.ts'
import type { Llama } from '../../../../../../net/minecraft/world/entity/animal/equine/Llama.d.ts'
export class TraderLlama$TraderLlamaDefendWanderingTraderGoal extends TargetGoal {
    constructor(tameAnimal: Llama)
    // private llama: Llama;
    // private ownerLastHurtBy: LivingEntity;
    // private timestamp: number;
    canUse(): boolean;
    start(): void;
}