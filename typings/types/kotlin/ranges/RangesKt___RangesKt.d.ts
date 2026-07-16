import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { Number } from '../../java/lang/Number.d.ts'
import type { Random } from '../../kotlin/random/Random.d.ts'
import type { ClosedFloatingPointRange } from '../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ClosedRange } from '../../kotlin/ranges/ClosedRange.d.ts'
import type { OpenEndRange } from '../../kotlin/ranges/OpenEndRange.d.ts'
import type { RangesKt__RangesKt } from '../../kotlin/ranges/RangesKt__RangesKt.d.ts'
export class RangesKt___RangesKt extends RangesKt__RangesKt {
    static byteRangeContains(self: ClosedRange<number>, value: number): boolean;
    static byteRangeContains(self: OpenEndRange<number>, value: number): boolean;
    static checkStepIsPositive(isPositive: boolean, step: Number): void;
    static coerceAtLeast<T extends Comparable<T>>(self: T, minimumValue: T): T;
    static coerceAtLeast(self: number, minimumValue: number): number;
    static coerceAtMost<T extends Comparable<T>>(self: T, maximumValue: T): T;
    static coerceAtMost(self: number, maximumValue: number): number;
    static coerceIn<T extends Comparable<T>>(self: T, minimumValue: T | null, maximumValue: T | null): T;
    static coerceIn<T extends Comparable<T>>(self: T, range: ClosedFloatingPointRange<T>): T;
    static coerceIn<T extends Comparable<T>>(self: T, range: ClosedRange<T>): T;
    static coerceIn(self: number, minimumValue: number, maximumValue: number): number;
    static coerceIn(self: number, range: ClosedRange<number>): number;
    static doubleRangeContains(self: ClosedRange<number>, value: number): boolean;
    static doubleRangeContains(self: OpenEndRange<number>, value: number): boolean;
    static downTo(self: string, to: string): { first: string; last: string; step: number };
    static downTo(self: number, to: number): { first: number; last: number; step: number };
    static first(self: { first: string; last: string; step: number }): string;
    static first(self: { first: number; last: number; step: number }): number;
    static firstOrNull(self: { first: string; last: string; step: number }): string | null;
    static firstOrNull(self: { first: number; last: number; step: number }): number | null;
    static floatRangeContains(self: ClosedRange<number>, value: number): boolean;
    static intRangeContains(self: ClosedRange<number>, value: number): boolean;
    static intRangeContains(self: OpenEndRange<number>, value: number): boolean;
    static last(self: { first: string; last: string; step: number }): string;
    static last(self: { first: number; last: number; step: number }): number;
    static lastOrNull(self: { first: string; last: string; step: number }): string | null;
    static lastOrNull(self: { first: number; last: number; step: number }): number | null;
    static longRangeContains(self: ClosedRange<number>, value: number): boolean;
    static longRangeContains(self: OpenEndRange<number>, value: number): boolean;
    static random(self: { start: string; endInclusive: string; step: number }, random: Random): string;
    static random(self: { start: number; endInclusive: number; step: number }, random: Random): number;
    static randomOrNull(self: { start: string; endInclusive: string; step: number }, random: Random): string | null;
    static randomOrNull(self: { start: number; endInclusive: number; step: number }, random: Random): number | null;
    static rangeTo<T extends Comparable<T>>(self: T, that: T): ClosedRange<T>;
    static rangeTo(self: number, that: number): ClosedFloatingPointRange<number>;
    static rangeUntil<T extends Comparable<T>>(self: T, that: T): OpenEndRange<T>;
    static rangeUntil(self: number, that: number): OpenEndRange<number>;
    static reversed(self: { first: string; last: string; step: number }): { first: string; last: string; step: number };
    static reversed(self: { first: number; last: number; step: number }): { first: number; last: number; step: number };
    static shortRangeContains(self: ClosedRange<number>, value: number): boolean;
    static shortRangeContains(self: OpenEndRange<number>, value: number): boolean;
    static step(self: { first: string; last: string; step: number }, step: number): { first: string; last: string; step: number };
    static step(self: { first: number; last: number; step: number }, step: number): { first: number; last: number; step: number };
    static toByteExactOrNull(self: number): number | null;
    static toIntExactOrNull(self: number): number | null;
    static toLongExactOrNull(self: number): number | null;
    static toShortExactOrNull(self: number): number | null;
    static until(self: string, to: string): { start: string; endInclusive: string; step: number };
    static until(self: number, to: number): { start: number; endInclusive: number; step: number };
}