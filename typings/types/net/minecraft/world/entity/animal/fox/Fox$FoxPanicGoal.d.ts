import type { PanicGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/PanicGoal.d.ts'
import type { Fox } from '../../../../../../net/minecraft/world/entity/animal/fox/Fox.d.ts'
export class Fox$FoxPanicGoal extends PanicGoal {
    static WATER_CHECK_DISTANCE_VERTICAL: number;
    constructor(null_: Fox, speedModifier: number)
    shouldPanic(): boolean;
}