import type { PanicGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/PanicGoal.d.ts'
import type { AbstractHorse } from '../../../../../../net/minecraft/world/entity/animal/equine/AbstractHorse.d.ts'
export class AbstractHorse$MountPanicGoal extends PanicGoal {
    static WATER_CHECK_DISTANCE_VERTICAL: number;
    constructor(null_: AbstractHorse, speedModifier: number)
    shouldPanic(): boolean;
}