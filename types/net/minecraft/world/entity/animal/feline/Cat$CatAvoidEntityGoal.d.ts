import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { AvoidEntityGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/AvoidEntityGoal.d.ts'
import type { Cat } from '../../../../../../net/minecraft/world/entity/animal/feline/Cat.d.ts'
export class Cat$CatAvoidEntityGoal<T extends LivingEntity> extends AvoidEntityGoal<T> {
    constructor(cat: Cat, avoidClass: Class<T>, maxDist: number, walkSpeedModifier: number, sprintSpeedModifier: number)
    // private cat: Cat;
    canContinueToUse(): boolean;
    canUse(): boolean;
}