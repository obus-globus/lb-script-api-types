import type { MeleeAttackGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/MeleeAttackGoal.d.ts'
import type { Spider } from '../../../../../../net/minecraft/world/entity/monster/spider/Spider.d.ts'
export class Spider$SpiderAttackGoal extends MeleeAttackGoal {
    constructor(mob: Spider)
    canContinueToUse(): boolean;
    canUse(): boolean;
}