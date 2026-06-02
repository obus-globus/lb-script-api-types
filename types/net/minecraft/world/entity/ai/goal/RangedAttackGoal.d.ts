import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { RangedAttackMob } from '../../../../../../net/minecraft/world/entity/monster/RangedAttackMob.d.ts'
export class RangedAttackGoal extends Goal {
    constructor(mob: RangedAttackMob, speedModifier: number, attackInterval: number, attackRadius: number)
    constructor(mob: RangedAttackMob, speedModifier: number, attackIntervalMin: number, attackIntervalMax: number, attackRadius: number)
    // private attackIntervalMax: number;
    // private attackIntervalMin: number;
    // private attackRadius: number;
    // private attackRadiusSqr: number;
    // private attackTime: number;
    // private mob: Mob;
    // private rangedAttackMob: RangedAttackMob;
    // private seeTime: number;
    // private speedModifier: number;
    // private target: LivingEntity;
    canContinueToUse(): boolean;
    canUse(): boolean;
    requiresUpdateEveryTick(): boolean;
    stop(): void;
    tick(): void;
}