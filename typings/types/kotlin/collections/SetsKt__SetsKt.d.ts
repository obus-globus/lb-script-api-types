import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { SetsKt__SetsJVMKt } from '../../kotlin/collections/SetsKt__SetsJVMKt.d.ts'
export class SetsKt__SetsKt extends SetsKt__SetsJVMKt {
    static build<E extends unknown>(builder: E[]): E[];
    static createSetBuilder<E extends unknown>(): E[];
    static createSetBuilder<E extends unknown>(capacity: number): E[];
    static emptySet<T extends unknown>(): T[];
    static hashSetOf<T extends unknown>(...elements: T[]): T[];
    static linkedSetOf<T extends unknown>(...elements: T[]): T[];
    static mutableSetOf<T extends unknown>(...elements: T[]): T[];
    static optimizeReadOnlySet<T extends unknown>(self: T[]): T[];
    static setOf<T extends unknown>(element: T): T[];
    static setOf<T extends unknown>(...elements: T[]): T[];
    static setOfNotNull<T extends unknown>(element: T | null): T[];
    static setOfNotNull<T extends unknown>(...elements: (T | null)[]): T[];
    static sortedSetOf<T extends unknown>(...elements: T[]): T[];
    static sortedSetOf<T extends unknown>(comparator: (param0: T, param1: T) => number, ...elements: T[]): T[];
}