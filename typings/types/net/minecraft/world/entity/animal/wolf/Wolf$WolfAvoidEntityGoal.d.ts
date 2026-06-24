import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { AvoidEntityGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/AvoidEntityGoal.d.ts'
import type { Llama } from '../../../../../../net/minecraft/world/entity/animal/equine/Llama.d.ts'
import type { Wolf } from '../../../../../../net/minecraft/world/entity/animal/wolf/Wolf.d.ts'
export class Wolf$WolfAvoidEntityGoal<T extends LivingEntity> extends AvoidEntityGoal<T> {
    constructor(null_: Wolf, wolf: Wolf, avoidClass: Class<T>, maxDist: number, walkSpeedModifier: number, sprintSpeedModifier: number)
    // private wolf: Wolf;
    // private avoidLlama(llama: Llama): boolean;
    canUse(): boolean;
    start(): void;
    tick(): void;
}