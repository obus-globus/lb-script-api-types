import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class SetsKt__SetsJVMKt extends Object {
    static build<E extends unknown>(builder: E[]): E[];
    static createSetBuilder<E extends unknown>(): E[];
    static createSetBuilder<E extends unknown>(capacity: number): E[];
    static setOf<T extends unknown>(element: T): T[];
    static sortedSetOf<T extends unknown>(...elements: T[]): T[];
    static sortedSetOf<T extends unknown>(comparator: (param0: T, param1: T) => number, ...elements: T[]): T[];
}