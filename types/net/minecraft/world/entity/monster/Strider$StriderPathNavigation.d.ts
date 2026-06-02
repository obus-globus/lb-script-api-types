import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { GroundPathNavigation } from '../../../../../net/minecraft/world/entity/ai/navigation/GroundPathNavigation.d.ts'
import type { Strider } from '../../../../../net/minecraft/world/entity/monster/Strider.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { PathFinder } from '../../../../../net/minecraft/world/level/pathfinder/PathFinder.d.ts'
import type { PathType } from '../../../../../net/minecraft/world/level/pathfinder/PathType.d.ts'
export class Strider$StriderPathNavigation extends GroundPathNavigation {
    constructor(mob: Strider, level: Level)
    createPathFinder(maxVisitedNodes: number): PathFinder;
    hasValidPathType(pathType: PathType): boolean;
    isStableDestination(pos: BlockPos): boolean;
}