import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { ComparisonsKt__ComparisonsKt } from '../../kotlin/comparisons/ComparisonsKt__ComparisonsKt.d.ts'
export class ComparisonsKt___ComparisonsJvmKt extends ComparisonsKt__ComparisonsKt {
    static compareBy<T extends unknown>(selectors: (param0: T) => Comparable<Object> | null[]): (param0: T, param1: T) => number;
    static compareValues<T extends Comparable<Object>>(a: T | null, b: T | null): number;
    static compareValuesBy<T extends unknown>(a: T, b: T, selectors: (param0: T) => Comparable<Object> | null[]): number;
    static maxOf<T extends Comparable<T>>(a: T, b: T): T;
    static maxOf<T extends Comparable<T>>(a: T, b: T, c: T): T;
    static maxOf<T extends Comparable<T>>(a: T, ...other: T[]): T;
    static maxOf(a: number, ...other: number[]): number;
    static minOf<T extends Comparable<T>>(a: T, b: T): T;
    static minOf<T extends Comparable<T>>(a: T, b: T, c: T): T;
    static minOf<T extends Comparable<T>>(a: T, ...other: T[]): T;
    static minOf(a: number, ...other: number[]): number;
    static naturalOrder<T extends Comparable<T>>(): (param0: T, param1: T) => number;
    static nullsFirst<T extends unknown>(comparator: (param0: T, param1: T) => number): (param0: T | null, param1: T | null) => number;
    static nullsLast<T extends unknown>(comparator: (param0: T, param1: T) => number): (param0: T | null, param1: T | null) => number;
    static reverseOrder<T extends Comparable<T>>(): (param0: T, param1: T) => number;
    static reversed<T extends unknown>(self: (param0: T, param1: T) => number): (param0: T, param1: T) => number;
    static then<T extends unknown>(self: (param0: T, param1: T) => number, comparator: (param0: T, param1: T) => number): (param0: T, param1: T) => number;
    static thenDescending<T extends unknown>(self: (param0: T, param1: T) => number, comparator: (param0: T, param1: T) => number): (param0: T, param1: T) => number;
}