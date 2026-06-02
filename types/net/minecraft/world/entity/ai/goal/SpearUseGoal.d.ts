import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { SpearUseGoal$SpearUseState } from '../../../../../../net/minecraft/world/entity/ai/goal/SpearUseGoal$SpearUseState.d.ts'
import type { Monster } from '../../../../../../net/minecraft/world/entity/monster/Monster.d.ts'
export class SpearUseGoal<T extends Monster> extends Goal {
    constructor(mob: T, speedModifierWhenCharging: number, speedModifierWhenRepositioning: number, approachDistance: number, targetInRangeRadius: number)
    // private approachDistanceSq: number;
    // private mob: T;
    // private speedModifierWhenCharging: number;
    // private speedModifierWhenRepositioning: number;
    // private state: SpearUseGoal$SpearUseState;
    // private targetInRangeRadiusSq: number;
    // private ableToAttack(): boolean;
    canContinueToUse(): boolean;
    canUse(): boolean;
    // private getKineticWeaponUseDuration(): number;
    start(): void;
    stop(): void;
    tick(): void;
}