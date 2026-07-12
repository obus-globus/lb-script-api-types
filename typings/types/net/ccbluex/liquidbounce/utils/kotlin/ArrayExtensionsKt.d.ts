import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
export class ArrayExtensionsKt extends Object {
    static contains(intRange: { start: number; endInclusive: number; step: number }, range: { start: number; endInclusive: number; step: number }): boolean;
    /**
     * A JavaScript-styled forEach
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt#L115 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt:115}
     */
    static forEachWithSelf(c: Object | null, action: (param0: Object, param1: Object, param2: Object) => void): void;
    /**
     * Transform a Collection to a String with by given {@link transform}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt#L142 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt:142}
     */
    static mapString(paramarg0: (Object | null)[], paramarg1: (param0: Object) => string): string;
    static mapString(paramarg0: string, paramarg1: (param0: Object) => string): string;
    static proportionOfValue(closedFloatingPointRange: ClosedFloatingPointRange<number>, value: number): number;
    static random(paramarg0: ClosedFloatingPointRange<number>): number;
    static random(paramarg0: ClosedFloatingPointRange<number>): number;
    static range(paramarg0: number[], paramarg1: number[], paramarg2: number[], paramarg3: (param0: Object, param1: Object, param2: Object) => void): void;
    static range(iterable1: number[], iterable2: number[], operation: (param0: Object, param1: Object) => void): void;
    static range(paramarg0: { first: number; last: number; step: number }, paramarg1: { first: number; last: number; step: number }, paramarg2: { first: number; last: number; step: number }, paramarg3: (param0: Object, param1: Object, param2: Object) => void): void;
    static removeRange(mutableList: (Object | null)[], fromInclusive: number, endExclusive: number): void;
    /**
     * Inserts a new element into a sorted list while maintaining the order.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt#L124 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt:124}
     */
    static sortedInsert(mutableList: (Object | null)[], item: Object | null, selector: (param0: Object) => Object | null): void;
    static subList(list: (Object | null)[], fromIndex: number): (Object | null)[];
    static toDouble(closedFloatingPointRange: ClosedFloatingPointRange<number>): ClosedFloatingPointRange<number>;
    static toTypedArray(stream: Stream<Object>): Object | null;
    static unaryMinus(closedFloatingPointRange: ClosedFloatingPointRange<number>): ClosedFloatingPointRange<number>;
    static valueAtProportion(closedFloatingPointRange: ClosedFloatingPointRange<number>, proportion: number): number;
}