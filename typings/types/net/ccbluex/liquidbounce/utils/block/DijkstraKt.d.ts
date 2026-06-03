import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { ShortestPath } from '../../../../../net/ccbluex/liquidbounce/utils/block/ShortestPath.d.ts'
export class DijkstraKt extends Object {
    /**
     * Returns the shortest path from {@link start} to the first node where {@link isGoal} returns true.
     *
     * All edge costs must be non-negative.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/Dijkstra.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/Dijkstra.kt:24}
     */
    static dijkstraShortestPath(start: Object | null, isGoal: (param0: Object | null) => kotlin.Boolean, neighbors: Function1<Object, Object>, maxIterations: number, maxCost: number): ShortestPath<Object>;
}