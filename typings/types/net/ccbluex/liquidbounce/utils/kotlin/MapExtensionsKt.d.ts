import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MapExtensionsKt extends Object {
    static immutableCopy(map: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static memorizingFunction(map: Map<Object | null, Object | null>, mappingFunction: (param0: Object | null) => Object | null): (param0: Object | null) => Object | null;
    /**
     * Sums the values for matching keys from another map to this map.
     * Modifies the current collection.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/MapExtensions.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/MapExtensions.kt:32}
     */
    static sumValues(object2IntOpenHashMap: { [key: string]: any }, anotherMap: { [key: string]: any }): { [key: string]: any };
}