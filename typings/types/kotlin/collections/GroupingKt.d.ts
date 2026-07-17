import type { JavaMap } from '../../JavaMap.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Grouping } from '../../kotlin/collections/Grouping.d.ts'
import type { GroupingKt__GroupingKt } from '../../kotlin/collections/GroupingKt__GroupingKt.d.ts'
export class GroupingKt extends GroupingKt__GroupingKt {
    static aggregate<K extends unknown, R extends unknown, T extends unknown>(self: Grouping<T, K>, operation: (param0: K, param1: R | null, param2: T, param3: boolean) => R): JavaMap<K, R>;
    static aggregateTo<M extends JavaMap<K, R>, T extends unknown, K extends unknown, R extends unknown>(self: Grouping<T, K>, destination: M, operation: (param0: K, param1: R | null, param2: T, param3: boolean) => R): M;
    static eachCount<K extends unknown, T extends unknown>(self: Grouping<T, K>): JavaMap<K, number>;
    static eachCountTo<M extends JavaMap<K, number>, T extends unknown, K extends unknown>(self: Grouping<T, K>, destination: M): M;
    static fold<K extends unknown, R extends unknown, T extends unknown>(self: Grouping<T, K>, initialValue: R, operation: (param0: R, param1: T) => R): JavaMap<K, R>;
    static fold<K extends unknown, R extends unknown, T extends unknown>(self: Grouping<T, K>, initialValueSelector: (param0: K, param1: T) => R, operation: (param0: K, param1: R, param2: T) => R): JavaMap<K, R>;
    static foldTo<M extends JavaMap<K, R>, T extends unknown, K extends unknown, R extends unknown>(self: Grouping<T, K>, destination: M, initialValue: R, operation: (param0: R, param1: T) => R): M;
    static foldTo<M extends JavaMap<K, R>, T extends unknown, K extends unknown, R extends unknown>(self: Grouping<T, K>, destination: M, initialValueSelector: (param0: K, param1: T) => R, operation: (param0: K, param1: R, param2: T) => R): M;
    static reduce<K extends unknown, S extends unknown, T extends S>(self: Grouping<T, K>, operation: (param0: K, param1: S, param2: T) => S): JavaMap<K, S>;
    static reduceTo<M extends JavaMap<K, S>, T extends S, K extends unknown, S extends unknown>(self: Grouping<T, K>, destination: M, operation: (param0: K, param1: S, param2: T) => S): M;
}