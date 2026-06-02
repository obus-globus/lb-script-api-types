import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Turtle } from '../../../../../../net/minecraft/world/entity/animal/turtle/Turtle.d.ts'
export class Turtle$TurtleGoHomeGoal extends Goal {
    constructor(turtle: Turtle, speedModifier: number)
    // private closeToHomeTryTicks: number;
    // private speedModifier: number;
    // private stuck: boolean;
    // private turtle: Turtle;
    canContinueToUse(): boolean;
    canUse(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}