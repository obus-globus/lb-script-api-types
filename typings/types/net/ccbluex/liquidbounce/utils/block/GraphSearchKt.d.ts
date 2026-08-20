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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/GraphSearch.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/GraphSearch.kt:51}
     */
    static aStarShortestPath<T extends unknown>(start: T, isGoal: (param0: T) => boolean, neighbors: (param0: T) => WeightedEdge<T>[], heuristic: (param0: T) => number, maxIterations: number, maxCost: number): ShortestPath<T> | null;
}