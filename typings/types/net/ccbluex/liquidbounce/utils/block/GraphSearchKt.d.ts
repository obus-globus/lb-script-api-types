import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ShortestPath } from '../../../../../net/ccbluex/liquidbounce/utils/block/ShortestPath.d.ts'
import type { WeightedEdge } from '../../../../../net/ccbluex/liquidbounce/utils/block/WeightedEdge.d.ts'
export class GraphSearchKt extends Object {
    /**
     * Finds the shortest path using A* search.
     *
     * Set {@link heuristic} to zero to get Dijkstra behavior.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/GraphSearch.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/GraphSearch.kt:46}
     */
    static aStarShortestPath(start: Object | null, isGoal: (param0: Object | null) => boolean, neighbors: (param0: Object) => WeightedEdge<Object>[], heuristic: (param0: Object | null) => number, maxIterations: number, maxCost: number): ShortestPath<Object>;
}