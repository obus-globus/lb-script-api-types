import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { SetsKt__SetsKt } from '../../kotlin/collections/SetsKt__SetsKt.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class SetsKt___SetsKt extends SetsKt__SetsKt {
    static build<E extends unknown>(builder: E[]): E[];
    static createSetBuilder<E extends unknown>(): E[];
    static createSetBuilder<E extends unknown>(capacity: number): E[];
    static emptySet<T extends unknown>(): T[];
    static hashSetOf<T extends unknown>(...elements: T[]): T[];
    static linkedSetOf<T extends unknown>(...elements: T[]): T[];
    static minus<T extends unknown>(self: T[], element: T): T[];
    static minus<T extends unknown>(self: T[], elements: T[]): T[];
    static minus<T extends unknown>(self: T[], elements: Sequence<T>): T[];
    static mutableSetOf<T extends unknown>(...elements: T[]): T[];
    static optimizeReadOnlySet<T extends unknown>(self: T[]): T[];
    static plus<T extends unknown>(self: T[], element: T): T[];
    static plus<T extends unknown>(self: T[], elements: T[]): T[];
    static plus<T extends unknown>(self: T[], elements: Sequence<T>): T[];
    static setOf<T extends unknown>(element: T): T[];
    static setOf<T extends unknown>(...elements: T[]): T[];
    static setOfNotNull<T extends unknown>(element: T | null): T[];
    static setOfNotNull<T extends unknown>(...elements: (T | null)[]): T[];
    static sortedSetOf<T extends unknown>(...elements: T[]): T[];
    static sortedSetOf<T extends unknown>(comparator: (param0: T, param1: T) => number, ...elements: T[]): T[];
}