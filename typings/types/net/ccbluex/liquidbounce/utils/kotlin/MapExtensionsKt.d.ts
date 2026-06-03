import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MapExtensionsKt extends Object {
    static immutableCopy(map: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static memorizingFunction(map: Map<Object | null, Object | null>, mappingFunction: (param0: Object | null) => Object | null): (param0: Object | null) => Object | null;
    /**
     * Sums the values for matching keys from another map to this map.
     * Modifies the current collection.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/MapExtensions.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/MapExtensions.kt:32}
     */
    static sumValues(object2IntOpenHashMap: Object2IntOpenHashMap<Object>, anotherMap: Object2IntMap<Object>): Object2IntMap<Object>;
}