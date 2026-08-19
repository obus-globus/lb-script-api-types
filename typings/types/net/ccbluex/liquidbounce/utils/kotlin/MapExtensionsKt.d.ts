import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MapExtensionsKt extends Object {
    static immutableCopy<K extends unknown, V extends unknown>(self: JavaMap<K, V>): JavaMap<K, V>;
    static memorizingFunction<K extends unknown, V extends unknown>(map: JavaMap<K, V>, mappingFunction: (param0: K) => V): (param0: K) => V;
    /**
     * Sums the values for matching keys from another map to this map.
     * Modifies the current collection.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/MapExtensions.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/MapExtensions.kt:36}
     */
    static sumValues<K extends unknown>(self: JavaMap<any, any>, anotherMap: JavaMap<any, any>): JavaMap<any, any>;
}