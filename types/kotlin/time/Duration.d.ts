import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { Function2 } from '../../kotlin/jvm/functions/Function2.d.ts'
import type { Function3 } from '../../kotlin/jvm/functions/Function3.d.ts'
import type { Function4 } from '../../kotlin/jvm/functions/Function4.d.ts'
import type { Function5 } from '../../kotlin/jvm/functions/Function5.d.ts'
import type { Duration$Companion } from '../../kotlin/time/Duration$Companion.d.ts'
import type { DurationUnit } from '../../kotlin/time/DurationUnit.d.ts'
export class Duration extends Object implements Comparable<Duration> {
    static Companion: Duration$Companion;
    static INVALID_RAW_VALUE: number;
//     static box-impl(paramarg0: number): Duration;
 // ; invalid because of -//     static compareTo-LRDsOJo(paramarg0: number, paramarg1: number): number;
 // ; invalid because of -//     static constructor-impl(paramarg0: number): number;
 // ; invalid because of -//     static div-LRDsOJo(paramarg0: number, paramarg1: number): number;
 // ; invalid because of -//     static div-UwyO8pc(paramarg0: number, paramarg1: number): number;
 // ; invalid because of -//     static div-UwyO8pc(paramarg0: number, paramarg1: number): number;
 // ; invalid because of -//     static equals-impl(paramarg0: number, paramarg1: Object): boolean;
 // ; invalid because of -//     static equals-impl0(paramarg0: number, paramarg1: number): boolean;
 // ; invalid because of -//     static getAbsoluteValue-UwyO8pc(paramarg0: number): number;
 // ; invalid because of -//     static getHoursComponent-impl(paramarg0: number): number;
 // ; invalid because of -//     static getInWholeDays-impl(paramarg0: number): number;
 // ; invalid because of -//     static getInWholeHours-impl(paramarg0: number): number;
 // ; invalid because of -//     static getInWholeMicroseconds-impl(paramarg0: number): number;
 // ; invalid because of -//     static getInWholeMilliseconds-impl(paramarg0: number): number;
 // ; invalid because of -//     static getInWholeMinutes-impl(paramarg0: number): number;
 // ; invalid because of -//     static getInWholeNanoseconds-impl(paramarg0: number): number;
 // ; invalid because of -//     static getInWholeSeconds-impl(paramarg0: number): number;
 // ; invalid because of -//     static getMinutesComponent-impl(paramarg0: number): number;
 // ; invalid because of -//     static getNanosecondsComponent-impl(paramarg0: number): number;
 // ; invalid because of -//     static getSecondsComponent-impl(paramarg0: number): number;
 // ; invalid because of -//     static hashCode-impl(paramarg0: number): number;
 // ; invalid because of -//     static isFinite-impl(paramarg0: number): boolean;
 // ; invalid because of -//     static isInfinite-impl(paramarg0: number): boolean;
 // ; invalid because of -//     static isNegative-impl(paramarg0: number): boolean;
 // ; invalid because of -//     static isPositive-impl(paramarg0: number): boolean;
 // ; invalid because of -//     static minus-LRDsOJo(paramarg0: number, paramarg1: number): number;
 // ; invalid because of -//     static plus-LRDsOJo(paramarg0: number, paramarg1: number): number;
 // ; invalid because of -//     static times-UwyO8pc(paramarg0: number, paramarg1: number): number;
 // ; invalid because of -//     static times-UwyO8pc(paramarg0: number, paramarg1: number): number;
 // ; invalid because of -//     static toComponents-impl(paramarg0: number, paramarg1: Function2<Object, Object, Object>): Object | null;
 // ; invalid because of -//     static toComponents-impl(paramarg0: number, paramarg1: Function3<Object, Object, Object, Object>): Object | null;
 // ; invalid because of -//     static toComponents-impl(paramarg0: number, paramarg1: Function4<Object, Object, Object, Object, Object>): Object | null;
 // ; invalid because of -//     static toComponents-impl(paramarg0: number, paramarg1: Function5<Object, Object, Object, Object, Object, Object>): Object | null;
 // ; invalid because of -//     static toDouble-impl(paramarg0: number, paramarg1: DurationUnit): number;
 // ; invalid because of -//     static toInt-impl(paramarg0: number, paramarg1: DurationUnit): number;
 // ; invalid because of -//     static toIsoString-impl(paramarg0: number): string;
 // ; invalid because of -//     static toLong-impl(paramarg0: number, paramarg1: DurationUnit): number;
 // ; invalid because of -//     static toString-impl(paramarg0: number, paramarg1: DurationUnit, paramarg2: number): string;
 // ; invalid because of -//     static toString-impl(paramarg0: number): string;
 // ; invalid because of -//     static truncateTo-UwyO8pc$kotlin_stdlib(paramarg0: number, paramarg1: DurationUnit): number;
 // ; invalid because of -//     static unaryMinus-UwyO8pc(paramarg0: number): number;
 // ; invalid because of -    constructor(rawValue: number)
//     /*not mapped: */ getAbsoluteValue-UwyO8pc(): Duration;
 // ; invalid because of -//     /*not mapped: */ getHoursComponent-impl(): number;
 // ; invalid because of -//     /*not mapped: */ getInWholeDays-impl(): number;
 // ; invalid because of -//     /*not mapped: */ getInWholeHours-impl(): number;
 // ; invalid because of -//     /*not mapped: */ getInWholeMicroseconds-impl(): number;
 // ; invalid because of -//     /*not mapped: */ getInWholeMilliseconds-impl(): number;
 // ; invalid because of -//     /*not mapped: */ getInWholeMinutes-impl(): number;
 // ; invalid because of -//     /*not mapped: */ getInWholeNanoseconds-impl(): number;
 // ; invalid because of -//     /*not mapped: */ getInWholeSeconds-impl(): number;
 // ; invalid because of -//     /*not mapped: */ getMinutesComponent-impl(): number;
 // ; invalid because of -//     /*not mapped: */ getNanosecondsComponent-impl(): number;
 // ; invalid because of -    // private rawValue: number;
//     /*not mapped: */ getSecondsComponent-impl(): number;
 // ; invalid because of -//     // private /*not mapped: */ getStorageUnit-impl(): DurationUnit;
 // ; invalid because of -//     // private /*not mapped: */ getUnitDiscriminator-impl(): number;
 // ; invalid because of -//     // private /*not mapped: */ getValue-impl(): number;
 // ; invalid because of -    // private addValuesMixedRanges(thisMillis: number, otherNanos: number): Duration;
    compareTo(other: Duration): number;
    div(scale: number): Duration;
    div(scale: number): Duration;
    div(other: Duration): number;
    equals(other: Object | null): boolean;
    hashCode(): number;
    isFinite(): boolean;
    // private isInMillis(): boolean;
    // private isInNanos(): boolean;
    isInfinite(): boolean;
    isNegative(): boolean;
    isPositive(): boolean;
    minus(other: Duration): Duration;
    plus(other: Duration): Duration;
    times(scale: number): Duration;
    times(scale: number): Duration;
    toComponents<T extends Object | number | string | boolean>(action: Function2<number, number, T>): T;
    toComponents<T extends Object | number | string | boolean>(action: Function3<number, number, number, T>): T;
    toComponents<T extends Object | number | string | boolean>(action: Function4<number, number, number, number, T>): T;
    toComponents<T extends Object | number | string | boolean>(action: Function5<number, number, number, number, number, T>): T;
    toDouble(unit: DurationUnit): number;
    toInt(unit: DurationUnit): number;
    toIsoString(): string;
    toLong(unit: DurationUnit): number;
    toString(): string;
    toString(unit: DurationUnit, decimals: number): string;
    truncateTo(unit: DurationUnit): Duration;
    unaryMinus(): Duration;
}