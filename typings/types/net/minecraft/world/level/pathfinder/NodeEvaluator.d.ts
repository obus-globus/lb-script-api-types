import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Mob } from '../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { PathNavigationRegion } from '../../../../../net/minecraft/world/level/PathNavigationRegion.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Node } from '../../../../../net/minecraft/world/level/pathfinder/Node.d.ts'
import type { PathType } from '../../../../../net/minecraft/world/level/pathfinder/PathType.d.ts'
import type { PathfindingContext } from '../../../../../net/minecraft/world/level/pathfinder/PathfindingContext.d.ts'
import type { Target } from '../../../../../net/minecraft/world/level/pathfinder/Target.d.ts'
export abstract class NodeEvaluator extends Object {
    static isBurningBlock(paramblockState: BlockState): boolean;
    constructor()
    canFloat: boolean;
    canOpenDoors: boolean;
    canPassDoors: boolean;
    canWalkOverFences: boolean;
    // private currentContext: PathfindingContext;
    // private entityDepth: number;
    // private entityHeight: number;
    // private entityWidth: number;
    // private mob: Mob;
    // private nodes: { [key: string]: any };
    done(): void;
    getNeighbors(neighbors: Node[], pos: Node): number;
    getNode(x: number, y: number, z: number): Node;
    getNode(pos: BlockPos): Node;
    getPathType(mob: Mob, pos: BlockPos): PathType;
    getPathType(context: PathfindingContext, x: number, y: number, z: number): PathType;
    getPathTypeOfMob(context: PathfindingContext, x: number, y: number, z: number, mob: Mob): PathType;
    getStart(): Node;
    getTarget(x: number, y: number, z: number): Target;
    getTargetNodeAt(x: number, y: number, z: number): Target;
    prepare(level: PathNavigationRegion, entity: Mob): void;
    setCanFloat(canFloat: boolean): void;
    setCanOpenDoors(canOpenDoors: boolean): void;
    setCanPassDoors(canPassDoors: boolean): void;
    setCanWalkOverFences(canWalkOverFences: boolean): void;
}