import type { GroundPathNavigation } from '../../../../../../net/minecraft/world/entity/ai/navigation/GroundPathNavigation.d.ts'
import type { Creaking } from '../../../../../../net/minecraft/world/entity/monster/creaking/Creaking.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { PathFinder } from '../../../../../../net/minecraft/world/level/pathfinder/PathFinder.d.ts'
export class Creaking$CreakingPathNavigation extends GroundPathNavigation {
    constructor(null_: Creaking, mob: Creaking, level: Level)
    createPathFinder(maxVisitedNodes: number): PathFinder;
    tick(): void;
}