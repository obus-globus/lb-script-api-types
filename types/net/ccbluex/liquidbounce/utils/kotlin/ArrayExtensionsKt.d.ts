import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Function2 } from '../../../../../kotlin/jvm/functions/Function2.d.ts'
import type { Function3 } from '../../../../../kotlin/jvm/functions/Function3.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
export class ArrayExtensionsKt extends Object {
    static contains(paramarg0: { start: number; endInclusive: number; step: number }, paramarg1: { start: number; endInclusive: number; step: number }): boolean;
    /**
     * A JavaScript-styled forEach
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt#L112 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt:112}
     */
    static forEachWithSelf(paramarg0: Object | null, paramarg1: Function3<Object, Object, Object, void>): void;
    /**
     * Transform a Collection to a String with by given {@link transform}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt#L139 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt:139}
     */
    static mapString(paramarg0: E[], paramarg1: Function1<Object, string>): string;
    static mapString(paramarg0: string, paramarg1: Function1<Object, string>): string;
    static proportionOfValue(paramarg0: ClosedFloatingPointRange<number>, paramarg1: number): number;
    static random(paramarg0: ClosedFloatingPointRange<number>): number;
    static random(paramarg0: ClosedFloatingPointRange<number>): number;
    static range(paramarg0: number[], paramarg1: number[], paramarg2: number[], paramarg3: Function3<Object, Object, Object, void>): void;
    static range(paramarg0: number[], paramarg1: number[], paramarg2: Function2<Object, Object, void>): void;
    static range(paramarg0: { first: number; last: number; step: number }, paramarg1: { first: number; last: number; step: number }, paramarg2: { first: number; last: number; step: number }, paramarg3: Function3<Object, Object, Object, void>): void;
    static removeRange(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): void;
    /**
     * Inserts a new element into a sorted list while maintaining the order.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt#L121 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt:121}
     */
    static sortedInsert(paramarg0: (Object | null)[], paramarg1: Object | null, paramarg2: Function1<Object, Object>): void;
    static subList(paramarg0: (Object | null)[], paramarg1: number): (Object | null)[];
    static toDouble(paramarg0: ClosedFloatingPointRange<number>): ClosedFloatingPointRange<number>;
    static toTypedArray(paramarg0: Stream<Object>): Object | null;
    static unaryMinus(paramarg0: ClosedFloatingPointRange<number>): ClosedFloatingPointRange<number>;
    static valueAtProportion(paramarg0: ClosedFloatingPointRange<number>, paramarg1: number): number;
}