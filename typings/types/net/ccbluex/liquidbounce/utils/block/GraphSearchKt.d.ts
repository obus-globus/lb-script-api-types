import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { ShortestPath } from '../../../../../net/ccbluex/liquidbounce/utils/block/ShortestPath.d.ts'
export class GraphSearchKt extends Object {
    /**
     * Finds the shortest path using A* search.
     *
     * Set {@link heuristic} to zero to get Dijkstra behavior.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/GraphSearch.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/GraphSearch.kt:46}
     */
    static aStarShortestPath(start: Object | null, isGoal: (param0: Object | null) => kotlin.Boolean, neighbors: Function1<Object, Object>, heuristic: (param0: Object | null) => kotlin.Double, maxIterations: number, maxCost: number): ShortestPath<Object>;
}