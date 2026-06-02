import type { AmphibiousPathNavigation } from '../../../../../../net/minecraft/world/entity/ai/navigation/AmphibiousPathNavigation.d.ts'
import type { Frog } from '../../../../../../net/minecraft/world/entity/animal/frog/Frog.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { PathFinder } from '../../../../../../net/minecraft/world/level/pathfinder/PathFinder.d.ts'
import type { PathType } from '../../../../../../net/minecraft/world/level/pathfinder/PathType.d.ts'
export class Frog$FrogPathNavigation extends AmphibiousPathNavigation {
    constructor(mob: Frog, level: Level)
    canCutCorner(pathType: PathType): boolean;
    createPathFinder(maxVisitedNodes: number): PathFinder;
}