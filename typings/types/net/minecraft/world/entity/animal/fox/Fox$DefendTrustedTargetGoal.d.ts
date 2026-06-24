import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { NearestAttackableTargetGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/target/NearestAttackableTargetGoal.d.ts'
import type { TargetingConditions$Selector } from '../../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions$Selector.d.ts'
import type { Fox } from '../../../../../../net/minecraft/world/entity/animal/fox/Fox.d.ts'
export class Fox$DefendTrustedTargetGoal extends NearestAttackableTargetGoal<LivingEntity> {
    constructor(null_: Fox, targetType: Class<LivingEntity>, mustSee: boolean, mustReach: boolean, subselector: (param0: LivingEntity, param1: ServerLevel) => boolean)
    // private timestamp: number;
    // private trustedLastHurt: LivingEntity;
    // private trustedLastHurtBy: LivingEntity;
    canUse(): boolean;
    start(): void;
}