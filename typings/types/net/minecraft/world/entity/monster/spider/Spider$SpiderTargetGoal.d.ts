import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { NearestAttackableTargetGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/target/NearestAttackableTargetGoal.d.ts'
import type { Spider } from '../../../../../../net/minecraft/world/entity/monster/spider/Spider.d.ts'
export class Spider$SpiderTargetGoal<T extends LivingEntity> extends NearestAttackableTargetGoal<T> {
    constructor(mob: Spider, targetType: Class<T>)
    canUse(): boolean;
}