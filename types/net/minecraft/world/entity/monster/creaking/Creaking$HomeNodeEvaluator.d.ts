import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { BlockGetter } from '../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { PathType } from '../../../../../../net/minecraft/world/level/pathfinder/PathType.d.ts'
import type { PathfindingContext } from '../../../../../../net/minecraft/world/level/pathfinder/PathfindingContext.d.ts'
import type { WalkNodeEvaluator } from '../../../../../../net/minecraft/world/level/pathfinder/WalkNodeEvaluator.d.ts'
export class Creaking$HomeNodeEvaluator extends WalkNodeEvaluator {
    static SPACE_BETWEEN_WALL_POSTS: number;
    static checkNeighbourBlocks(paramcontext: PathfindingContext, paramx: number, paramy: number, paramz: number, paramblockPathType: PathType): PathType;
    static getFloorLevel(paramlevel: BlockGetter, parampos: BlockPos): number;
    static getPathTypeFromState(paramlevel: BlockGetter, parampos: BlockPos): PathType;
    static getPathTypeStatic(parammob: Mob, parampos: BlockPos): PathType;
    static getPathTypeStatic(paramcontext: PathfindingContext, parampos: BlockPos$MutableBlockPos): PathType;
    static isBurningBlock(paramblockState: BlockState): boolean;
    private constructor(null_: Creaking$HomeNodeEvaluator)
    getPathType(context: PathfindingContext, x: number, y: number, z: number): PathType;
}