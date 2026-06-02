import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { PatrollingMonster } from '../../../../../net/minecraft/world/entity/monster/PatrollingMonster.d.ts'
export class PatrollingMonster$LongDistancePatrolGoal<T extends PatrollingMonster> extends Goal {
    constructor(mob: T, speedModifier: number, leaderSpeedModifier: number)
    // private cooldownUntil: number;
    // private leaderSpeedModifier: number;
    // private mob: T;
    // private speedModifier: number;
    canUse(): boolean;
    // private findPatrolCompanions(): PatrollingMonster[];
    // private moveRandomly(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}