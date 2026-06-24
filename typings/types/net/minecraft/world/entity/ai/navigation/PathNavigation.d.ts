import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { NodeEvaluator } from '../../../../../../net/minecraft/world/level/pathfinder/NodeEvaluator.d.ts'
import type { Path } from '../../../../../../net/minecraft/world/level/pathfinder/Path.d.ts'
import type { PathFinder } from '../../../../../../net/minecraft/world/level/pathfinder/PathFinder.d.ts'
import type { PathType } from '../../../../../../net/minecraft/world/level/pathfinder/PathType.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export abstract class PathNavigation extends Object {
    constructor(mob: Mob, level: Level)
    // private hasDelayedRecomputation: boolean;
    // private isStuck: boolean;
    // private lastStuckCheck: number;
    // private lastStuckCheckPos: Vec3;
    // private lastTimeoutCheck: number;
    // private level: Level;
    maxDistanceToWaypoint: number;
    readonly maxVisitedNodesMultiplier: number;
    // private mob: Mob;
    nodeEvaluator: NodeEvaluator;
    path: Path;
    // private pathFinder: PathFinder;
    // private reachRange: number;
    readonly requiredPathLength: number;
    speedModifier: number;
    readonly targetPos: BlockPos;
    // private tick: number;
    // private timeLastRecompute: number;
    // private timeoutCachedNode: Vec3i;
    // private timeoutLimit: number;
    // private timeoutTimer: number;
    canCutCorner(pathType: PathType): boolean;
    canFloat(): boolean;
    canMoveDirectly(startPos: Vec3, stopPos: Vec3): boolean;
    canNavigateGround(): boolean;
    canUpdatePath(): boolean;
    createPath(positions: Stream<BlockPos>, reachRange: number): Path;
    createPath(x: number, y: number, z: number, reachRange: number): Path;
    createPath(positions: BlockPos[], reachRange: number): Path;
    createPath(targets: BlockPos[], radiusOffset: number, above: boolean, reachRange: number): Path;
    createPath(targets: BlockPos[], radiusOffset: number, above: boolean, reachRange: number, maxPathLength: number): Path;
    createPath(pos: BlockPos, reachRange: number): Path;
    createPath(pos: BlockPos, reachRange: number, maxPathLength: number): Path;
    createPath(target: Entity, reachRange: number): Path;
    createPathFinder(maxVisitedNodes: number): PathFinder;
    doStuckDetection(mobPos: Vec3): void;
    followThePath(): void;
    getGroundY(target: Vec3): number;
    getMaxDistanceToWaypoint(): number;
    // private getMaxPathLength(): number;
    getMaxVerticalDistanceToWaypoint(): number;
    getNodeEvaluator(): NodeEvaluator;
    getPath(): Path;
    getTargetPos(): BlockPos;
    getTempMobPos(): Vec3;
    isDone(): boolean;
    isInProgress(): boolean;
    isStableDestination(pos: BlockPos): boolean;
    isStuck(): boolean;
    moveTo(x: number, y: number, z: number, speedModifier: number): boolean;
    moveTo(x: number, y: number, z: number, reachRange: number, speedModifier: number): boolean;
    moveTo(target: Entity, speedModifier: number): boolean;
    moveTo(newPath: Path, speedModifier: number): boolean;
    recomputePath(): void;
    resetMaxVisitedNodesMultiplier(): void;
    // private resetStuckTimeout(): void;
    setCanFloat(canFloat: boolean): void;
    setCanOpenDoors(canOpenDoors: boolean): void;
    setMaxVisitedNodesMultiplier(maxVisitedNodesMultiplier: number): void;
    setRequiredPathLength(length: number): void;
    setSpeedModifier(speedModifier: number): void;
    shouldRecomputePath(pos: BlockPos): boolean;
    // private shouldTargetNextNodeInDirection(mobPosition: Vec3): boolean;
    stop(): void;
    tick(): void;
    // private timeoutPath(): void;
    trimPath(): void;
    updatePathfinderMaxVisitedNodes(): void;
}