import type { UniformInt } from '../../../../../../net/minecraft/util/valueproviders/UniformInt.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { RangedCrossbowAttackGoal$CrossbowState } from '../../../../../../net/minecraft/world/entity/ai/goal/RangedCrossbowAttackGoal$CrossbowState.d.ts'
import type { CrossbowAttackMob } from '../../../../../../net/minecraft/world/entity/monster/CrossbowAttackMob.d.ts'
import type { Monster } from '../../../../../../net/minecraft/world/entity/monster/Monster.d.ts'
import type { RangedAttackMob } from '../../../../../../net/minecraft/world/entity/monster/RangedAttackMob.d.ts'
export class RangedCrossbowAttackGoal<T extends Monster & RangedAttackMob & CrossbowAttackMob> extends Goal {
    static PATHFINDING_DELAY_RANGE: UniformInt;
    constructor(mob: T, speedModifier: number, attackRadius: number)
    // private attackDelay: number;
    // private attackRadiusSqr: number;
    // private crossbowState: RangedCrossbowAttackGoal$CrossbowState;
    // private mob: T;
    // private seeTime: number;
    // private speedModifier: number;
    // private updatePathDelay: number;
    canContinueToUse(): boolean;
    // private canRun(): boolean;
    canUse(): boolean;
    // private isHoldingCrossbow(): boolean;
    // private isValidTarget(): boolean;
    requiresUpdateEveryTick(): boolean;
    stop(): void;
    tick(): void;
}