import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { AvoidEntityGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/AvoidEntityGoal.d.ts'
import type { Rabbit } from '../../../../../../net/minecraft/world/entity/animal/rabbit/Rabbit.d.ts'
export class Rabbit$RabbitAvoidEntityGoal<T extends LivingEntity> extends AvoidEntityGoal<T> {
    constructor(rabbit: Rabbit, avoidClass: Class<T>, maxDist: number, walkSpeedModifier: number, sprintSpeedModifier: number)
    // private rabbit: Rabbit;
    canUse(): boolean;
}