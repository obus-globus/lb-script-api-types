import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { WeightedEdge } from '../../../../../net/ccbluex/liquidbounce/utils/block/WeightedEdge.d.ts'
import type { Vec3i } from '../../../../../net/minecraft/core/Vec3i.d.ts'
export interface AStarPathBuilder extends Object{
    readonly allowDiagonal: boolean;
    readonly maxIterations: number;
    readonly stopRange: number;
    findPath(start: Vec3i, end: Vec3i, maxCost: number): Vec3i[];
    // private getAdjacentEdges(position: Vec3i): WeightedEdge<Vec3i>[];
}