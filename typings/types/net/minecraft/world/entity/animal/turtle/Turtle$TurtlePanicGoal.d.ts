import type { PanicGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/PanicGoal.d.ts'
import type { Turtle } from '../../../../../../net/minecraft/world/entity/animal/turtle/Turtle.d.ts'
export class Turtle$TurtlePanicGoal extends PanicGoal {
    static WATER_CHECK_DISTANCE_VERTICAL: number;
    constructor(turtle: Turtle, speedModifier: number)
    canUse(): boolean;
}