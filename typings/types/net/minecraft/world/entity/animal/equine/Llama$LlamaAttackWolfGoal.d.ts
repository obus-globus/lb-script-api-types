import type { NearestAttackableTargetGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/target/NearestAttackableTargetGoal.d.ts'
import type { Llama } from '../../../../../../net/minecraft/world/entity/animal/equine/Llama.d.ts'
import type { Wolf } from '../../../../../../net/minecraft/world/entity/animal/wolf/Wolf.d.ts'
export class Llama$LlamaAttackWolfGoal extends NearestAttackableTargetGoal<Wolf> {
    constructor(llama: Llama)
    getFollowDistance(): number;
}