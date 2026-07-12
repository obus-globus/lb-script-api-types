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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/Dijkstra.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/Dijkstra.kt:29}
     */
    static dijkstraShortestPath(start: Object | null, isGoal: (param0: Object | null) => boolean, neighbors: (param0: Object) => WeightedEdge<Object>[], maxIterations: number, maxCost: number): ShortestPath<Object>;
}