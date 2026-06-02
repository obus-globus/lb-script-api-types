import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { GroundPathNavigation } from '../../../../../../net/minecraft/world/entity/ai/navigation/GroundPathNavigation.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { Path } from '../../../../../../net/minecraft/world/level/pathfinder/Path.d.ts'
export class WallClimberNavigation extends GroundPathNavigation {
    constructor(mob: Mob, level: Level)
    // private pathToPosition: BlockPos;
    createPath(pos: BlockPos, reachRange: number): Path;
    createPath(target: Entity, reachRange: number): Path;
    moveTo(target: Entity, speedModifier: number): boolean;
    tick(): void;
}