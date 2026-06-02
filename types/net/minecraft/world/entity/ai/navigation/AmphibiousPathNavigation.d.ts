import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { PathNavigation } from '../../../../../../net/minecraft/world/entity/ai/navigation/PathNavigation.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { PathFinder } from '../../../../../../net/minecraft/world/level/pathfinder/PathFinder.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class AmphibiousPathNavigation extends PathNavigation {
    constructor(mob: Mob, level: Level)
    canMoveDirectly(startPos: Vec3, stopPos: Vec3): boolean;
    canNavigateGround(): boolean;
    canUpdatePath(): boolean;
    createPathFinder(maxVisitedNodes: number): PathFinder;
    getGroundY(target: Vec3): number;
    getTempMobPos(): Vec3;
    isStableDestination(pos: BlockPos): boolean;
    setCanFloat(canFloat: boolean): void;
}