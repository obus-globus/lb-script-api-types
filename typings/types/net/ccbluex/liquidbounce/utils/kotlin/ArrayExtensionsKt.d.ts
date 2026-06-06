import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
export class ArrayExtensionsKt extends Object {
    static contains(intRange: { start: number; endInclusive: number; step: number }, range: { start: number; endInclusive: number; step: number }): boolean;
    /**
     * A JavaScript-styled forEach
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt#L112 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt:112}
     */
    static forEachWithSelf(c: Object | null, action: (param0: Object | null, param1: Object | null, param2: Object | null) => void): void;
    /**
     * Transform a Collection to a String with by given {@link transform}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt#L139 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt:139}
     */
    static mapString(paramarg0: E[], paramarg1: (param0: Object | null) => string): string;
    static mapString(paramarg0: string, paramarg1: (param0: Object | null) => string): string;
    static proportionOfValue(closedFloatingPointRange: ClosedFloatingPointRange<number>, value: number): number;
    static random(paramarg0: ClosedFloatingPointRange<number>): number;
    static random(paramarg0: ClosedFloatingPointRange<number>): number;
    static range(paramarg0: number[], paramarg1: number[], paramarg2: number[], paramarg3: (param0: Object | null, param1: Object | null, param2: Object | null) => void): void;
    static range(iterable1: number[], iterable2: number[], operation: (param0: Object | null, param1: Object | null) => void): void;
    static range(paramarg0: { first: number; last: number; step: number }, paramarg1: { first: number; last: number; step: number }, paramarg2: { first: number; last: number; step: number }, paramarg3: (param0: Object | null, param1: Object | null, param2: Object | null) => void): void;
    static removeRange(mutableList: (Object | null)[], fromInclusive: number, endExclusive: number): void;
    /**
     * Inserts a new element into a sorted list while maintaining the order.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt#L121 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt:121}
     */
    static sortedInsert(mutableList: (Object | null)[], item: Object | null, selector: (param0: Object | null) => Object | null): void;
    static subList(list: (Object | null)[], fromIndex: number): (Object | null)[];
    static toDouble(closedFloatingPointRange: ClosedFloatingPointRange<number>): ClosedFloatingPointRange<number>;
    static toTypedArray(stream: Stream<Object>): Object | null;
    static unaryMinus(closedFloatingPointRange: ClosedFloatingPointRange<number>): ClosedFloatingPointRange<number>;
    static valueAtProportion(closedFloatingPointRange: ClosedFloatingPointRange<number>, proportion: number): number;
}