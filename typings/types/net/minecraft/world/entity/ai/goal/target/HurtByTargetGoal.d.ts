import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { PathfinderMob } from '../../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { TargetGoal } from '../../../../../../../net/minecraft/world/entity/ai/goal/target/TargetGoal.d.ts'
export class HurtByTargetGoal extends TargetGoal {
    constructor(mob: PathfinderMob, ignoreDamageFromTheseTypes: Class<Object>[])
    // private alertSameType: boolean;
    // private timestamp: number;
    // private toIgnoreAlert: Class<Object>[];
    // private toIgnoreDamage: Class<Object>[];
    alertOther(other: Mob, hurtByMob: LivingEntity): void;
    alertOthers(): void;
    canUse(): boolean;
    setAlertOthers(exceptTheseTypes: Class<Object>[]): HurtByTargetGoal;
    start(): void;
}