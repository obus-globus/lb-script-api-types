import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { HurtByTargetGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/target/HurtByTargetGoal.d.ts'
import type { Panda } from '../../../../../../net/minecraft/world/entity/animal/panda/Panda.d.ts'
export class Panda$PandaHurtByTargetGoal extends HurtByTargetGoal {
    constructor(mob: Panda, ...ignoreDamageFromTheseTypes: Class<Object>[])
    // private panda: Panda;
    alertOther(other: Mob, hurtByMob: LivingEntity): void;
    canContinueToUse(): boolean;
}