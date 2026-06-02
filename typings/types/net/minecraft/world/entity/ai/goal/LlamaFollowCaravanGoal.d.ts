import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Llama } from '../../../../../../net/minecraft/world/entity/animal/equine/Llama.d.ts'
export class LlamaFollowCaravanGoal extends Goal {
    constructor(llama: Llama, speedModifier: number)
    // private distCheckCounter: number;
    llama: Llama;
    // private speedModifier: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    // private firstIsLeashed(currentMob: Llama, counter: number): boolean;
    stop(): void;
    tick(): void;
}