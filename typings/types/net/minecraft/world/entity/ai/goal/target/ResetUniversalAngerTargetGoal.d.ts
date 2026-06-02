import type { Mob } from '../../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { NeutralMob } from '../../../../../../../net/minecraft/world/entity/NeutralMob.d.ts'
import type { Goal } from '../../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
export class ResetUniversalAngerTargetGoal<T extends Mob & NeutralMob> extends Goal {
    constructor(mob: T, alertOthersOfSameType: boolean)
    // private alertOthersOfSameType: boolean;
    // private lastHurtByPlayerTimestamp: number;
    // private mob: T;
    canUse(): boolean;
    // private getNearbyMobsOfSameType(): Mob[];
    start(): void;
    // private wasHurtByPlayer(): boolean;
}