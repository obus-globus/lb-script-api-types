import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { AmphibiousPathNavigation } from '../../../../../../net/minecraft/world/entity/ai/navigation/AmphibiousPathNavigation.d.ts'
import type { Turtle } from '../../../../../../net/minecraft/world/entity/animal/turtle/Turtle.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export class Turtle$TurtlePathNavigation extends AmphibiousPathNavigation {
    constructor(mob: Turtle, level: Level)
    isStableDestination(pos: BlockPos): boolean;
}