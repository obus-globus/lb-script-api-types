import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { NearestAttackableTargetGoal } from '../../../../../../../net/minecraft/world/entity/ai/goal/target/NearestAttackableTargetGoal.d.ts'
import type { TargetingConditions$Selector } from '../../../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions$Selector.d.ts'
import type { Raider } from '../../../../../../../net/minecraft/world/entity/raid/Raider.d.ts'
export class NearestAttackableWitchTargetGoal<T extends LivingEntity> extends NearestAttackableTargetGoal<T> {
    constructor(raider: Raider, targetType: Class<T>, randomInterval: number, mustSee: boolean, mustReach: boolean, subselector: (param0: LivingEntity, param1: ServerLevel) => boolean)
    readonly canAttack: boolean;
    canUse(): boolean;
    setCanAttack(canAttack: boolean): void;
}