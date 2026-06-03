import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { GroundPathNavigation } from '../../../../../../net/minecraft/world/entity/ai/navigation/GroundPathNavigation.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { Path } from '../../../../../../net/minecraft/world/level/pathfinder/Path.d.ts'
export class WallClimberNavigation extends GroundPathNavigation {
    constructor(mob: Mob, level: Level)
    // private pathToPosition: BlockPos;
    createPath(positions: Stream<BlockPos>, reachRange: number): Path;
    createPath(x: number, y: number, z: number, reachRange: number): Path;
    createPath(positions: BlockPos[], reachRange: number): Path;
    createPath(targets: BlockPos[], radiusOffset: number, above: boolean, reachRange: number): Path;
    createPath(targets: BlockPos[], radiusOffset: number, above: boolean, reachRange: number, maxPathLength: number): Path;
    createPath(pos: BlockPos, reachRange: number): Path;
    createPath(pos: BlockPos, reachRange: number, maxPathLength: number): Path;
    createPath(target: Entity, reachRange: number): Path;
    moveTo(x: number, y: number, z: number, speedModifier: number): boolean;
    moveTo(x: number, y: number, z: number, reachRange: number, speedModifier: number): boolean;
    moveTo(target: Entity, speedModifier: number): boolean;
    moveTo(newPath: Path, speedModifier: number): boolean;
    tick(): void;
}