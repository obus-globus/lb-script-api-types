import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ShortestPath } from '../../../../../net/ccbluex/liquidbounce/utils/block/ShortestPath.d.ts'
export class GraphSearchKt extends Object {
    /**
     * Finds the shortest path using A* search.
     *
     * Set {@link heuristic} to zero to get Dijkstra behavior.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/GraphSearch.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/GraphSearch.kt:46}
     */
    static aStarShortestPath(start: Object | null, isGoal: (param0: Object | null) => kotlin.Boolean, neighbors: (param0: Object | null) => Object | null, heuristic: (param0: Object | null) => kotlin.Double, maxIterations: number, maxCost: number): ShortestPath<Object>;
}