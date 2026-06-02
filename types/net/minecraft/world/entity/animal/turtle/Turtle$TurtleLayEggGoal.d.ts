import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { MoveToBlockGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/MoveToBlockGoal.d.ts'
import type { Turtle } from '../../../../../../net/minecraft/world/entity/animal/turtle/Turtle.d.ts'
import type { LevelReader } from '../../../../../../net/minecraft/world/level/LevelReader.d.ts'
export class Turtle$TurtleLayEggGoal extends MoveToBlockGoal {
    constructor(turtle: Turtle, speedModifier: number)
    // private turtle: Turtle;
    canContinueToUse(): boolean;
    canUse(): boolean;
    isValidTarget(level: LevelReader, pos: BlockPos): boolean;
    tick(): void;
}