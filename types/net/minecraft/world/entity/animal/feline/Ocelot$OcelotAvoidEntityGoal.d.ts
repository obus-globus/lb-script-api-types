import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { AvoidEntityGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/AvoidEntityGoal.d.ts'
import type { Ocelot } from '../../../../../../net/minecraft/world/entity/animal/feline/Ocelot.d.ts'
export class Ocelot$OcelotAvoidEntityGoal<T extends LivingEntity> extends AvoidEntityGoal<T> {
    constructor(ocelot: Ocelot, avoidClass: Class<T>, maxDist: number, walkSpeedModifier: number, sprintSpeedModifier: number)
    // private ocelot: Ocelot;
    canContinueToUse(): boolean;
    canUse(): boolean;
}