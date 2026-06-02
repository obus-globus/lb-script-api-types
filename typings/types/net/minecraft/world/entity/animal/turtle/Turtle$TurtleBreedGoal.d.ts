import type { BreedGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/BreedGoal.d.ts'
import type { Turtle } from '../../../../../../net/minecraft/world/entity/animal/turtle/Turtle.d.ts'
export class Turtle$TurtleBreedGoal extends BreedGoal {
    constructor(turtle: Turtle, speedModifier: number)
    // private turtle: Turtle;
    breed(): void;
    canUse(): boolean;
}