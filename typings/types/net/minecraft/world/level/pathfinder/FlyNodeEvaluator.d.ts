import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Mob } from '../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { PathNavigationRegion } from '../../../../../net/minecraft/world/level/PathNavigationRegion.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Node } from '../../../../../net/minecraft/world/level/pathfinder/Node.d.ts'
import type { PathType } from '../../../../../net/minecraft/world/level/pathfinder/PathType.d.ts'
import type { PathfindingContext } from '../../../../../net/minecraft/world/level/pathfinder/PathfindingContext.d.ts'
import type { Target } from '../../../../../net/minecraft/world/level/pathfinder/Target.d.ts'
import type { WalkNodeEvaluator } from '../../../../../net/minecraft/world/level/pathfinder/WalkNodeEvaluator.d.ts'
export class FlyNodeEvaluator extends WalkNodeEvaluator {
    static SPACE_BETWEEN_WALL_POSTS: number;
    static checkNeighbourBlocks(paramcontext: PathfindingContext, paramx: number, paramy: number, paramz: number, paramblockPathType: PathType): PathType;
    static getFloorLevel(paramlevel: BlockGetter, parampos: BlockPos): number;
    static getPathTypeFromState(paramlevel: BlockGetter, parampos: BlockPos): PathType;
    static getPathTypeStatic(parammob: Mob, parampos: BlockPos): PathType;
    static getPathTypeStatic(paramcontext: PathfindingContext, parampos: BlockPos$MutableBlockPos): PathType;
    static isBurningBlock(paramblockState: BlockState): boolean;
    constructor()
    // private pathTypeByPosCache: JavaMap<any, any>;
    canStartAt(pos: BlockPos): boolean;
    done(): void;
    findAcceptedNode(x: number, y: number, z: number): Node;
    findAcceptedNode(x: number, y: number, z: number, jumpSize: number, nodeHeight: number, travelDirection: Direction, blockPathTypeCurrent: PathType): Node;
    getCachedPathType(x: number, y: number, z: number): PathType;
    getNeighbors(neighbors: Node[], pos: Node): number;
    getPathType(mob: Mob, pos: BlockPos): PathType;
    getPathType(context: PathfindingContext, x: number, y: number, z: number): PathType;
    getStart(): Node;
    getTarget(x: number, y: number, z: number): Target;
    // private hasMalus(node: Node): boolean;
    // private isOpen(node: Node): boolean;
    // private iteratePathfindingStartNodeCandidatePositions(mob: Mob): BlockPos[];
    prepare(level: PathNavigationRegion, entity: Mob): void;
}