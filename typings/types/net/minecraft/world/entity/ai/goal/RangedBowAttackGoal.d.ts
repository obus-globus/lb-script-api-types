import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Monster } from '../../../../../../net/minecraft/world/entity/monster/Monster.d.ts'
import type { RangedAttackMob } from '../../../../../../net/minecraft/world/entity/monster/RangedAttackMob.d.ts'
export class RangedBowAttackGoal<T extends Monster & RangedAttackMob> extends Goal {
    constructor(mob: T, speedModifier: number, attackIntervalMin: number, attackRadius: number)
    // private attackIntervalMin: number;
    // private attackRadiusSqr: number;
    // private attackTime: number;
    // private mob: T;
    // private seeTime: number;
    // private speedModifier: number;
    // private strafingBackwards: boolean;
    // private strafingClockwise: boolean;
    // private strafingTime: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    isHoldingBow(): boolean;
    requiresUpdateEveryTick(): boolean;
    setMinAttackInterval(ticks: number): void;
    start(): void;
    stop(): void;
    tick(): void;
}