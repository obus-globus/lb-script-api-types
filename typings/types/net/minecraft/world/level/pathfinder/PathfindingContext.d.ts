import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Mob } from '../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { CollisionGetter } from '../../../../../net/minecraft/world/level/CollisionGetter.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { PathType } from '../../../../../net/minecraft/world/level/pathfinder/PathType.d.ts'
import type { PathTypeCache } from '../../../../../net/minecraft/world/level/pathfinder/PathTypeCache.d.ts'
export class PathfindingContext extends Object {
    constructor(level: CollisionGetter, mob: Mob)
    // private cache: PathTypeCache;
    // private level: CollisionGetter;
    // private mobPosition: BlockPos;
    // private mutablePos: BlockPos$MutableBlockPos;
    getBlockState(pos: BlockPos): BlockState;
    getPathTypeFromState(x: number, y: number, z: number): PathType;
    level(): CollisionGetter;
    mobPosition(): BlockPos;
}