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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/GraphSearch.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/GraphSearch.kt:51}
     */
    static aStarShortestPath(start: Object | null, isGoal: (param0: Object | null) => boolean, neighbors: (param0: Object) => WeightedEdge<Object>[], heuristic: (param0: Object | null) => number, maxIterations: number, maxCost: number): ShortestPath<Object>;
}