import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Mob } from '../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { PathNavigationRegion } from '../../../../../net/minecraft/world/level/PathNavigationRegion.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Node } from '../../../../../net/minecraft/world/level/pathfinder/Node.d.ts'
import type { NodeEvaluator } from '../../../../../net/minecraft/world/level/pathfinder/NodeEvaluator.d.ts'
import type { PathType } from '../../../../../net/minecraft/world/level/pathfinder/PathType.d.ts'
import type { PathfindingContext } from '../../../../../net/minecraft/world/level/pathfinder/PathfindingContext.d.ts'
import type { Target } from '../../../../../net/minecraft/world/level/pathfinder/Target.d.ts'
export class SwimNodeEvaluator extends NodeEvaluator {
    static isBurningBlock(paramblockState: BlockState): boolean;
    constructor(allowBreaching: boolean)
    // private allowBreaching: boolean;
    // private pathTypesByPosCache: Long2ObjectMap<PathType>;
    done(): void;
    findAcceptedNode(x: number, y: number, z: number): Node;
    getCachedBlockType(x: number, y: number, z: number): PathType;
    getNeighbors(neighbors: Node[], pos: Node): number;
    getPathType(mob: Mob, pos: BlockPos): PathType;
    getPathType(context: PathfindingContext, x: number, y: number, z: number): PathType;
    getPathTypeOfMob(context: PathfindingContext, x: number, y: number, z: number, mob: Mob): PathType;
    getStart(): Node;
    getTarget(x: number, y: number, z: number): Target;
    isNodeValid(node: Node): boolean;
    prepare(level: PathNavigationRegion, entity: Mob): void;
}