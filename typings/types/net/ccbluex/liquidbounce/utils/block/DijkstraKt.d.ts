import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ShortestPath } from '../../../../../net/ccbluex/liquidbounce/utils/block/ShortestPath.d.ts'
import type { WeightedEdge } from '../../../../../net/ccbluex/liquidbounce/utils/block/WeightedEdge.d.ts'
export class DijkstraKt extends Object {
    /**
     * Returns the shortest path from {@link start} to the first node where {@link isGoal} returns true.
     *
     * All edge costs must be non-negative.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/Dijkstra.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/Dijkstra.kt:29}
     */
    static dijkstraShortestPath<T extends unknown>(start: T, isGoal: (param0: T) => boolean, neighbors: (param0: T) => WeightedEdge<T>[], maxIterations: number, maxCost: number): ShortestPath<T> | null;
}