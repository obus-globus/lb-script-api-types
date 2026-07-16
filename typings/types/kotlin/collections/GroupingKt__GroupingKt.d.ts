import type { Object } from '../../java/lang/Object.d.ts'
import type { Grouping } from '../../kotlin/collections/Grouping.d.ts'
import type { GroupingKt__GroupingJVMKt } from '../../kotlin/collections/GroupingKt__GroupingJVMKt.d.ts'
export class GroupingKt__GroupingKt extends GroupingKt__GroupingJVMKt {
    static aggregate<K extends unknown, R extends unknown, T extends unknown>(self: Grouping<T, K>, operation: (param0: K, param1: R | null, param2: T, param3: boolean) => R): Map<K, R>;
    static aggregateTo<M extends Map<K, R>, T extends unknown, K extends unknown, R extends unknown>(self: Grouping<T, K>, destination: M, operation: (param0: K, param1: R | null, param2: T, param3: boolean) => R): M;
    static eachCount<K extends unknown, T extends unknown>(self: Grouping<T, K>): Map<K, number>;
    static eachCountTo<M extends Map<K, number>, T extends unknown, K extends unknown>(self: Grouping<T, K>, destination: M): M;
    static fold<K extends unknown, R extends unknown, T extends unknown>(self: Grouping<T, K>, initialValue: R, operation: (param0: R, param1: T) => R): Map<K, R>;
    static fold<K extends unknown, R extends unknown, T extends unknown>(self: Grouping<T, K>, initialValueSelector: (param0: K, param1: T) => R, operation: (param0: K, param1: R, param2: T) => R): Map<K, R>;
    static foldTo<M extends Map<K, R>, T extends unknown, K extends unknown, R extends unknown>(self: Grouping<T, K>, destination: M, initialValue: R, operation: (param0: R, param1: T) => R): M;
    static foldTo<M extends Map<K, R>, T extends unknown, K extends unknown, R extends unknown>(self: Grouping<T, K>, destination: M, initialValueSelector: (param0: K, param1: T) => R, operation: (param0: K, param1: R, param2: T) => R): M;
    static reduce<K extends unknown, S extends unknown, T extends S>(self: Grouping<T, K>, operation: (param0: K, param1: S, param2: T) => S): Map<K, S>;
    static reduceTo<M extends Map<K, S>, T extends S, K extends unknown, S extends unknown>(self: Grouping<T, K>, destination: M, operation: (param0: K, param1: S, param2: T) => S): M;
}