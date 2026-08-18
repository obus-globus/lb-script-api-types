import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
export class ArrayExtensionsKt extends Object {
    static contains(self: { start: number; endInclusive: number; step: number }, range: { start: number; endInclusive: number; step: number }): boolean;
    /**
     * A JavaScript-styled forEach
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7419c75563c98eff050759c8dc8d8c35ed59d950/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt#L115 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt:115}
     */
    static forEachWithSelf<C extends T[], T extends unknown>(self: C, action: (param0: T, param1: number, param2: C) => void): void;
    /**
     * Transform a Collection to a String with by given {@link transform}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7419c75563c98eff050759c8dc8d8c35ed59d950/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt#L142 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt:142}
     */
    static mapString<T extends unknown>(self: T[], transform: (param0: T) => string): string;
    static mapString(self: string, transform: (param0: string) => string): string;
    static proportionOfValue(self: ClosedFloatingPointRange<number>, value: number): number;
    static random(self: ClosedFloatingPointRange<number>): number;
    static range(iterable1: number[], iterable2: number[], iterable3: number[], operation: (param0: number, param1: number, param2: number) => void): void;
    static range(iterable1: number[], iterable2: number[], operation: (param0: number, param1: number) => void): void;
    static range(iterable1: { first: number; last: number; step: number }, iterable2: { first: number; last: number; step: number }, iterable3: { first: number; last: number; step: number }, operation: (param0: number, param1: number, param2: number) => void): void;
    static removeRange<T extends unknown>(self: T[], fromInclusive: number, endExclusive: number): void;
    /**
     * Inserts a new element into a sorted list while maintaining the order.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7419c75563c98eff050759c8dc8d8c35ed59d950/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt#L124 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/ArrayExtensions.kt:124}
     */
    static sortedInsert<T extends unknown, K extends Comparable<K>>(self: T[], item: T, selector: (param0: T) => K | null): void;
    static subList<T extends unknown>(self: T[], fromIndex: number): T[];
    static toDouble(self: ClosedFloatingPointRange<number>): ClosedFloatingPointRange<number>;
    static toTypedArray<T extends unknown>(self: Stream<T>): T[];
    static unaryMinus(self: ClosedFloatingPointRange<number>): ClosedFloatingPointRange<number>;
    static valueAtProportion(self: ClosedFloatingPointRange<number>, proportion: number): number;
}