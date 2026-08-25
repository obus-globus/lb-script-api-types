import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
export class ArrayExtensionsKt extends Object {
    static contains(self: { start: number; endInclusive: number; step: number }, range: { start: number; endInclusive: number; step: number }): boolean;
    /**
     * Transform a Collection to a String with by given {@link transform}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt#L129 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt:129}
     */
    static mapString<T extends unknown>(self: T[], transform: (param0: T) => string): string;
    static mapString(self: string, transform: (param0: string) => string): string;
    static proportionOfValue(self: ClosedFloatingPointRange<number>, value: number): number;
    static random(self: ClosedFloatingPointRange<number>): number;
    static range(iterable1: number[], iterable2: number[], iterable3: number[], operation: (param0: number, param1: number, param2: number) => void): void;
    static range(iterable1: number[], iterable2: number[], operation: (param0: number, param1: number) => void): void;
    static range(iterable1: { first: number; last: number; step: number }, iterable2: { first: number; last: number; step: number }, iterable3: { first: number; last: number; step: number }, operation: (param0: number, param1: number, param2: number) => void): void;
    /**
     * Inserts a new element into a sorted list while maintaining the order.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt#L111 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt:111}
     */
    static sortedInsert<T extends unknown, K extends Comparable<K>>(self: T[], item: T, selector: (param0: T) => K | null): void;
    static subList<T extends unknown>(self: T[], fromIndex: number): T[];
    static toDouble(self: ClosedFloatingPointRange<number>): ClosedFloatingPointRange<number>;
    static toTypedArray<T extends unknown>(self: Stream<T>): T[];
    static unaryMinus(self: ClosedFloatingPointRange<number>): ClosedFloatingPointRange<number>;
    static valueAtProportion(self: ClosedFloatingPointRange<number>, proportion: number): number;
}