import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MapExtensionsKt extends Object {
    static immutableCopy(map: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static memorizingFunction(map: Map<Object | null, Object | null>, mappingFunction: (param0: Object | null) => Object | null): (param0: Object | null) => Object | null;
    /**
     * Sums the values for matching keys from another map to this map.
     * Modifies the current collection.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/MapExtensions.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/MapExtensions.kt:36}
     */
    static sumValues(object2IntOpenHashMap: { [key: string]: any }, anotherMap: { [key: string]: any }): { [key: string]: any };
}