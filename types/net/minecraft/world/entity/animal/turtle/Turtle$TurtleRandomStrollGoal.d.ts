import type { RandomStrollGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/RandomStrollGoal.d.ts'
import type { Turtle } from '../../../../../../net/minecraft/world/entity/animal/turtle/Turtle.d.ts'
export class Turtle$TurtleRandomStrollGoal extends RandomStrollGoal {
    static DEFAULT_INTERVAL: number;
    private constructor(turtle: Turtle, speedModifier: number, interval: number)
    // private turtle: Turtle;
    canUse(): boolean;
}