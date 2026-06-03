import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Mob } from '../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { PathNavigationRegion } from '../../../../../net/minecraft/world/level/PathNavigationRegion.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Node } from '../../../../../net/minecraft/world/level/pathfinder/Node.d.ts'
import type { NodeEvaluator } from '../../../../../net/minecraft/world/level/pathfinder/NodeEvaluator.d.ts'
import type { PathType } from '../../../../../net/minecraft/world/level/pathfinder/PathType.d.ts'
import type { PathfindingContext } from '../../../../../net/minecraft/world/level/pathfinder/PathfindingContext.d.ts'
import type { Target } from '../../../../../net/minecraft/world/level/pathfinder/Target.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
export class WalkNodeEvaluator extends NodeEvaluator {
    static SPACE_BETWEEN_WALL_POSTS: number;
    static checkNeighbourBlocks(paramcontext: PathfindingContext, paramx: number, paramy: number, paramz: number, paramblockPathType: PathType): PathType;
    static getFloorLevel(paramlevel: BlockGetter, parampos: BlockPos): number;
    static getPathTypeFromState(paramlevel: BlockGetter, parampos: BlockPos): PathType;
    static getPathTypeStatic(parammob: Mob, parampos: BlockPos): PathType;
    static getPathTypeStatic(paramcontext: PathfindingContext, parampos: BlockPos$MutableBlockPos): PathType;
    static isBurningBlock(paramblockState: BlockState): boolean;
    constructor()
    // private collisionCache: Object2BooleanMap<AABB>;
    // private pathTypesByPosCacheByMob: Long2ObjectMap<PathType>;
    // private reusableNeighbors: Node[];
    // private canReachWithoutCollision(posTo: Node): boolean;
    canStartAt(pos: BlockPos): boolean;
    done(): void;
    findAcceptedNode(x: number, y: number, z: number, jumpSize: number, nodeHeight: number, travelDirection: Direction, blockPathTypeCurrent: PathType): Node;
    // private getBlockedNode(x: number, y: number, z: number): Node;
    getCachedPathType(x: number, y: number, z: number): PathType;
    // private getClosedNode(x: number, y: number, z: number, pathType: PathType): Node;
    getFloorLevel(pos: BlockPos): number;
    // private getMobJumpHeight(): number;
    getNeighbors(neighbors: Node[], pos: Node): number;
    // private getNodeAndUpdateCostToMax(x: number, y: number, z: number, pathType: PathType, cost: number): Node;
    getPathType(mob: Mob, pos: BlockPos): PathType;
    getPathType(context: PathfindingContext, x: number, y: number, z: number): PathType;
    getPathTypeOfMob(context: PathfindingContext, x: number, y: number, z: number, mob: Mob): PathType;
    getPathTypeWithinMobBB(context: PathfindingContext, x: number, y: number, z: number): PathType[];
    getStart(): Node;
    getStartNode(pos: BlockPos): Node;
    getTarget(x: number, y: number, z: number): Target;
    // private hasCollisions(aabb: AABB): boolean;
    isAmphibious(): boolean;
    isDiagonalValid(diagonal: Node): boolean;
    isDiagonalValid(pos: Node, ew: Node, ns: Node): boolean;
    isNeighborValid(neighbor: Node, current: Node): boolean;
    prepare(level: PathNavigationRegion, entity: Mob): void;
    // private tryFindFirstGroundNodeBelow(x: number, y: number, z: number): Node;
    // private tryFindFirstNonWaterBelow(x: number, y: number, z: number, best: Node): Node;
    // private tryJumpOn(x: number, y: number, z: number, jumpSize: number, nodeHeight: number, travelDirection: Direction, blockPathTypeCurrent: PathType, reusablePos: BlockPos$MutableBlockPos): Node;
}