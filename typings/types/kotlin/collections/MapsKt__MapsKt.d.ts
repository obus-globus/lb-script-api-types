import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { Map$Entry } from '../../java/util/Map$Entry.d.ts'
import type { MapsKt__MapsJVMKt } from '../../kotlin/collections/MapsKt__MapsJVMKt.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class MapsKt__MapsKt extends MapsKt__MapsJVMKt {
    static build<K extends unknown, V extends unknown>(builder: Map<K, V>): Map<K, V>;
    static copy<K extends unknown, V extends unknown>(self: Map$Entry<K, V>): Map$Entry<K, V>;
    static createMapBuilder<K extends unknown, V extends unknown>(): Map<K, V>;
    static createMapBuilder<K extends unknown, V extends unknown>(capacity: number): Map<K, V>;
    static emptyMap<K extends unknown, V extends unknown>(): Map<K, V>;
    static filter<K extends unknown, V extends unknown>(self: Map<K, V>, predicate: (param0: Map$Entry<K, V>) => boolean): Map<K, V>;
    static filterKeys<K extends unknown, V extends unknown>(self: Map<K, V>, predicate: (param0: K) => boolean): Map<K, V>;
    static filterNot<K extends unknown, V extends unknown>(self: Map<K, V>, predicate: (param0: Map$Entry<K, V>) => boolean): Map<K, V>;
    static filterNotTo<M extends Map<K, V>, K extends unknown, V extends unknown>(self: Map<K, V>, destination: M, predicate: (param0: Map$Entry<K, V>) => boolean): M;
    static filterTo<M extends Map<K, V>, K extends unknown, V extends unknown>(self: Map<K, V>, destination: M, predicate: (param0: Map$Entry<K, V>) => boolean): M;
    static filterValues<K extends unknown, V extends unknown>(self: Map<K, V>, predicate: (param0: V) => boolean): Map<K, V>;
    static getOrDefaultImpl<V extends unknown, K extends unknown>(self: Map<K, V>, key: K, default_: V): V | null;
    static getOrImplicitDefaultNullable<V extends unknown, K extends unknown>(self: Map<K, V>, key: K): V;
    static getOrPut<V extends unknown, K extends unknown>(self: Map<K, V>, key: K, defaultValue: () => V): V;
    static getOrPutIfNullImpl<V extends unknown, K extends unknown>(self: Map<K, V>, key: K, newValue: V): V;
    static getValue<V extends unknown, K extends unknown>(self: Map<K, V>, key: K): V;
    static hashMapOf<K extends unknown, V extends unknown>(...pairs: Pair<K, V>[]): Map<K, V>;
    static linkedMapOf<K extends unknown, V extends unknown>(...pairs: Pair<K, V>[]): Map<K, V>;
    static mapCapacity(expectedSize: number): number;
    static mapEntryOf<K extends unknown, V extends unknown>(key: K, value: V): Map$Entry<K, V>;
    static mapKeys<R extends unknown, V extends unknown, K extends unknown>(self: Map<K, V>, transform: (param0: Map$Entry<K, V>) => R): Map<R, V>;
    static mapKeysTo<M extends Map<R, V>, K extends unknown, V extends unknown, R extends unknown>(self: Map<K, V>, destination: M, transform: (param0: Map$Entry<K, V>) => R): M;
    static mapOf<K extends unknown, V extends unknown>(pair: Pair<K, V>): Map<K, V>;
    static mapOf<K extends unknown, V extends unknown>(...pairs: Pair<K, V>[]): Map<K, V>;
    static mapValues<K extends unknown, R extends unknown, V extends unknown>(self: Map<K, V>, transform: (param0: Map$Entry<K, V>) => R): Map<K, R>;
    static mapValuesTo<M extends Map<K, R>, K extends unknown, V extends unknown, R extends unknown>(self: Map<K, V>, destination: M, transform: (param0: Map$Entry<K, V>) => R): M;
    static minus<K extends unknown, V extends unknown>(self: Map<K, V>, key: K): Map<K, V>;
    static minus<K extends unknown, V extends unknown>(self: Map<K, V>, keys: K[]): Map<K, V>;
    static minus<K extends unknown, V extends unknown>(self: Map<K, V>, keys: Sequence<K>): Map<K, V>;
    static mutableMapOf<K extends unknown, V extends unknown>(...pairs: Pair<K, V>[]): Map<K, V>;
    static optimizeReadOnlyMap<K extends unknown, V extends unknown>(self: Map<K, V>): Map<K, V>;
    static plus<K extends unknown, V extends unknown>(self: Map<K, V>, pairs: Pair<K, V>[]): Map<K, V>;
    static plus<K extends unknown, V extends unknown>(self: Map<K, V>, map: Map<K, V>): Map<K, V>;
    static plus<K extends unknown, V extends unknown>(self: Map<K, V>, pair: Pair<K, V>): Map<K, V>;
    static plus<K extends unknown, V extends unknown>(self: Map<K, V>, pairs: Sequence<Pair<K, V>>): Map<K, V>;
    static putAll<K extends unknown, V extends unknown>(self: Map<K, V>, pairs: Pair<K, V>[]): void;
    static putAll<K extends unknown, V extends unknown>(self: Map<K, V>, pairs: Sequence<Pair<K, V>>): void;
    static sortedMapOf<K extends Comparable<K>, V extends unknown>(...pairs: Pair<K, V>[]): Map<K, V>;
    static sortedMapOf<K extends unknown, V extends unknown>(comparator: (param0: K, param1: K) => number, ...pairs: Pair<K, V>[]): Map<K, V>;
    static toMap<M extends Map<K, V>, K extends unknown, V extends unknown>(self: Pair<K, V>[], destination: M): M;
    static toMap<M extends Map<K, V>, K extends unknown, V extends unknown>(self: Map<K, V>, destination: M): M;
    static toMap<M extends Map<K, V>, K extends unknown, V extends unknown>(self: Sequence<Pair<K, V>>, destination: M): M;
    static toMap<K extends unknown, V extends unknown>(self: Pair<K, V>[]): Map<K, V>;
    static toMap<K extends unknown, V extends unknown>(self: Map<K, V>): Map<K, V>;
    static toMap<K extends unknown, V extends unknown>(self: Sequence<Pair<K, V>>): Map<K, V>;
    static toMutableMap<K extends unknown, V extends unknown>(self: Map<K, V>): Map<K, V>;
    static toSingletonMap<K extends unknown, V extends unknown>(self: Map<K, V>): Map<K, V>;
    static toSortedMap<K extends Comparable<K>, V extends unknown>(self: Map<K, V>): Map<K, V>;
    static toSortedMap<K extends unknown, V extends unknown>(self: Map<K, V>, comparator: (param0: K, param1: K) => number): Map<K, V>;
    static withDefault<K extends unknown, V extends unknown>(self: Map<K, V>, defaultValue: (param0: K) => V): Map<K, V>;
    static withDefaultMutable<K extends unknown, V extends unknown>(self: Map<K, V>, defaultValue: (param0: K) => V): Map<K, V>;
}