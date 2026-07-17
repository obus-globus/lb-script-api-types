import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Mob } from '../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { PathNavigationRegion } from '../../../../../net/minecraft/world/level/PathNavigationRegion.d.ts'
import type { BinaryHeap } from '../../../../../net/minecraft/world/level/pathfinder/BinaryHeap.d.ts'
import type { Node } from '../../../../../net/minecraft/world/level/pathfinder/Node.d.ts'
import type { NodeEvaluator } from '../../../../../net/minecraft/world/level/pathfinder/NodeEvaluator.d.ts'
import type { Path } from '../../../../../net/minecraft/world/level/pathfinder/Path.d.ts'
import type { Target } from '../../../../../net/minecraft/world/level/pathfinder/Target.d.ts'
export class PathFinder extends Object {
    constructor(nodeEvaluator: NodeEvaluator, maxVisitedNodes: number)
    readonly captureDebug: () => boolean;
    readonly maxVisitedNodes: number;
    // private neighbors: Node[];
    // private nodeEvaluator: NodeEvaluator;
    // private openSet: BinaryHeap;
    distance(from: Node, to: Node): number;
    findPath(level: PathNavigationRegion, entity: Mob, targets: BlockPos[], maxPathLength: number, reachRange: number, maxVisitedNodesMultiplier: number): Path;
    // private findPath(from: Node, targetMap: JavaMap<Target, BlockPos>, maxPathLength: number, reachRange: number, maxVisitedNodesMultiplier: number): Path;
    // private getBestH(from: Node, targets: Target[]): number;
    // private reconstructPath(closest: Node, target: BlockPos, reached: boolean): Path;
    setCaptureDebug(captureDebug: () => boolean): void;
    setMaxVisitedNodes(maxVisitedNodes: number): void;
}