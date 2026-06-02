import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { AvoidEntityGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/AvoidEntityGoal.d.ts'
import type { Panda } from '../../../../../../net/minecraft/world/entity/animal/panda/Panda.d.ts'
export class Panda$PandaAvoidGoal<T extends LivingEntity> extends AvoidEntityGoal<T> {
    constructor(panda: Panda, avoidClass: Class<T>, maxDist: number, walkSpeedModifier: number, sprintSpeedModifier: number)
    // private panda: Panda;
    canUse(): boolean;
}